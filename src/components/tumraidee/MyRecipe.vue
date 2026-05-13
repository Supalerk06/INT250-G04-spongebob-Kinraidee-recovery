<script setup>
import { db } from "@/data/userRecipes";
import RecipePopup from "./RecipePopup.vue";
import { ref, watch } from "vue";

import { toRaw } from "vue";

const Props = defineProps([
  "fridgeItems",
  "id",
  "name",
  "short_description",
  "image",
  "ingredients",
  "steps",
]);

const emit = defineEmits(["cook", "delete"]);

import { fridgeItems as globalFridgeItems } from "@/data/fridgeItems";

const showModal = ref(false);
const showDeleteConfirm = ref(false);

function openRecipe() {
  showModal.value = true;
}

function closeModal() {
  showModal.value = false;
}
const showConfirm = ref(false);

function handleCook() {
  closeModal(); // 👈 ปิด popup หลักก่อน
  errorMessage.value = [];
  showConfirm.value = true;
}

const errorMessage = ref([]);

// 👇 เพิ่มฟังก์ชันตรวจสอบวันหมดอายุ
function isExpired(dateString) {
  if (!dateString) return false;

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const expDate = new Date(dateString);
  expDate.setHours(0, 0, 0, 0);

  return expDate < today;
}

function confirmCook() {
  const missingItems = [];

  // 1. ตรวจสอบวัตถุดิบที่ขาด (ดึงจาก Props ตามปกติ)
  Props.ingredients.forEach((recipeItem) => {
    // 👇 เพิ่มเช็คไม่หมดอายุตอนหาวัตถุดิบ
    const item = Props.fridgeItems.find(
      (i) =>
        i.name.trim().toLowerCase() === recipeItem.name.trim().toLowerCase() &&
        !isExpired(i.expiredDate),
    );

    if (!item) {
      missingItems.push(`${recipeItem.name} (ไม่มี หรือ หมดอายุแล้ว)`);
    } else if (Number(item.quantity) < Number(recipeItem.quantity)) {
      missingItems.push(
        `${recipeItem.name} (ต้องใช้ ${recipeItem.quantity} ${recipeItem.unit} แต่มีเพียง ${item.quantity})`,
      );
    }
  });

  // ถ้ามีวัตถุดิบไม่พอ ให้แสดง Error และหยุดการทำงาน
  if (missingItems.length > 0) {
    errorMessage.value = missingItems;
    return;
  }

  // 2. ถ้าผ่านเงื่อนไข อัปเดตข้อมูลโดยตรงกับ global state
  Props.ingredients.forEach((recipeItem) => {
    const index = globalFridgeItems.value.findIndex(
      (i) =>
        i.name.trim().toLowerCase() === recipeItem.name.trim().toLowerCase() &&
        !isExpired(i.expiredDate),
    );

    if (index !== -1) {
      // หักลบจำนวน
      globalFridgeItems.value[index].quantity =
        Number(globalFridgeItems.value[index].quantity) -
        Number(recipeItem.quantity);

      // ถ้าของหมด ให้ลบออกจาก Array
      if (globalFridgeItems.value[index].quantity <= 0) {
        globalFridgeItems.value.splice(index, 1);
      }
    }
  });

  // 4. เคลียร์ Error, ปิด Popup
  errorMessage.value = [];
  showConfirm.value = false;
  emit("cook");
}

function cancelCook() {
  showConfirm.value = false;
}

const isCooking = ref(false);

function confirmDelete() {
  emit("delete", Props.id); // 👈 ส่ง id กลับไปลบใน parent
  showDeleteConfirm.value = false;
}

function cancelDelete() {
  showDeleteConfirm.value = false;
}

const showEditModal = ref(false);
const editForm = ref({
  id: null,
  name: "",
  short_description: "",
  image: "",
  ingredients: [],
  steps: [],
});

function openEdit(recipe) {
  console.log("CLICK EDIT", recipe);

  editForm.value = {
    id: recipe.id,
    name: recipe.name,
    short_description: recipe.short_description,
    image: recipe.image,

    ingredients: recipe.ingredients.map((item) => ({
      name: item.name,
      quantity: item.quantity,
      unit: item.unit,
    })),

    steps: recipe.steps.map((step) => step),
  };

  showEditModal.value = true;
}

async function saveEdit() {
  const rawData = toRaw(editForm.value);

  await db.recipes.update(rawData.id, {
    name: rawData.name,
    short_description: rawData.short_description,
    image: rawData.image,

    // 👇 clone ใหม่กัน proxy
    ingredients: rawData.ingredients.map((i) => ({
      name: i.name,
      quantity: i.quantity,
      unit: i.unit,
    })),

    steps: rawData.steps.map((s) => s),
  });

  showEditModal.value = false;
}

function cancelEdit() {
  showEditModal.value = false;
}

function handleEditFile(e) {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = () => {
    editForm.value.image = reader.result;
  };
  reader.readAsDataURL(file);
}

// ➕➖ INGREDIENT
function addIngredient() {
  editForm.value.ingredients.push({ name: "", quantity: 1, unit: "ชิ้น" });
}

function removeIngredient(i) {
  if (editForm.value.ingredients.length > 1) {
    editForm.value.ingredients.splice(i, 1);
  }
}

// ➕➖ STEP
function addStep() {
  editForm.value.steps.push("");
}

function removeStep(i) {
  if (editForm.value.steps.length > 1) {
    editForm.value.steps.splice(i, 1);
  }
}
</script>
<template>
  <article
    @click="openRecipe"
    class="border border-slate-100 hover:border-secondary/30 group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col"
  >
    <div class="h-48 relative overflow-hidden">
      <div
        class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        data-alt="Thai style omelette on rice"
        :style="{ backgroundImage: `url(${image})` }"
      ></div>
      <button
        @click.stop="showDeleteConfirm = true"
        class="absolute top-2 right-2 bg-orange-500 text-white px-3 py-1 rounded-full shadow-lg hover:bg-orange-700 transition"
      >
        <span class="material-symbols-outlined text-sm">delete</span>
      </button>
      <button
        @click.stop="
          openEdit({
            id,
            name,
            short_description,
            image,
            ingredients,
            steps,
          })
        "
        class="absolute top-2 right-14 bg-orange-400 text-white px-3 py-1 rounded-full shadow-lg hover:bg-orange-500 transition"
      >
        <span class="material-symbols-outlined text-sm">edit</span>
      </button>
    </div>
    <div class="p-5 flex-1 flex flex-col">
      <div class="mb-3">
        <h4 class="text-xl font-bold text-slate-900 mb-1">{{ name }}</h4>
        <p class="text-xs text-slate-500">{{ short_description }}</p>
      </div>
      <div
        class="mt-auto pt-4 border-t border-gray-100 dark:border-gray-700 flex items-center justify-center"
      >
        <button
          @click.stop="openRecipe"
          class="text-secondary font-black text-sm hover:underline"
        >
          ดูวิธีทำ
        </button>
      </div>
    </div>
  </article>
  <Teleport to="body">
    <RecipePopup
      v-if="showModal"
      :name="name"
      :image="image"
      :ingredients="ingredients"
      :steps="steps"
      @close="closeModal"
      @cook="handleCook"
    />
  </Teleport>

  <div
    v-if="showConfirm"
    class="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
  >
    <div
      class="bg-white dark:bg-gray-800 p-6 rounded-2xl w-[90%] max-w-md shadow-xl"
    >
      <h3 class="text-lg font-bold mb-4 text-center">
        คุณแน่ใจหรือไม่ว่าคุณทำอาหารเสร็จแล้ว?
      </h3>
      <div
        v-if="errorMessage.length"
        class="bg-orange-100 text-orange-700 p-4 rounded-lg mb-4"
      >
        <p class="font-bold">❌ ทำอาหารไม่สำเร็จ</p>
        <ul class="list-disc ml-5">
          <li v-for="(item, i) in errorMessage" :key="i">
            {{ item }}
          </li>
        </ul>
      </div>
      <div class="flex justify-center gap-4">
        <button
          @click="cancelCook"
          class="font-bold px-6 py-2.5 rounded-xl bg-slate-100 text-slate-500 hover:bg-slate-200 transition-colors"
        >
          ยกเลิก
        </button>

        <button
          @click="confirmCook"
          class="font-bold px-6 py-2.5 rounded-xl bg-secondary text-white hover:bg-orange-600 shadow-lg shadow-secondary/20 transition-all"
        >
          ใช่ เสร็จแล้ว
        </button>
      </div>
    </div>
  </div>

  <div
    v-if="showDeleteConfirm"
    class="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
  >
    <div
      class="bg-white dark:bg-gray-800 p-6 rounded-2xl w-[90%] max-w-md shadow-xl"
    >
      <h3 class="text-lg font-bold mb-4 text-center text-orange-500">
        🗑 ลบสูตรอาหาร
      </h3>

      <p class="text-center mb-6 text-slate-400 dark:text-slate-500">
        คุณแน่ใจหรือไม่ว่าต้องการลบสูตร <br />
        <span class="font-bold text-black dark:text-white">{{ name }}</span> ?
      </p>

      <div class="flex justify-center gap-4">
        <button
          @click="cancelDelete"
          class="px-4 py-2 rounded-lg bg-gray-300 hover:bg-gray-400 font-bold"
        >
          ยกเลิก
        </button>

        <button
          @click="confirmDelete"
          class="px-4 py-2 rounded-lg bg-orange-500 text-white hover:bg-orange-700 font-bold"
        >
          ลบเลย
        </button>
      </div>
    </div>
  </div>

  <div
    v-if="showEditModal"
    class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
    @click.self="cancelEdit"
  >
    <div
      class="bg-white dark:bg-card-dark rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl border border-transparent dark:border-card-dark-02 transition-colors"
    >
      <!-- HEADER -->
      <div
        class="p-6 border-b dark:border-card-dark-02 flex justify-between items-center sticky top-0 bg-white dark:bg-card-dark z-10 transition-colors"
      >
        <h2 class="text-2xl font-bold text-gray-800 dark:text-white">
          แก้ไขสูตรอาหาร
        </h2>
        <button
          @click="cancelEdit"
          class="text-gray-500 dark:text-slate-400 hover:text-gray-700 dark:hover:text-white transition-colors"
        >
          <span class="material-symbols-outlined">close</span>
        </button>
      </div>

      <!-- BODY -->
      <div class="p-6 space-y-6">
        <!-- NAME -->
        <div>
          <label
            class="block text-sm font-semibold text-gray-700 dark:text-slate-300 mb-2"
            >ชื่อสูตรอาหาร</label
          >
          <input
            v-model="editForm.name"
            class="w-full px-4 py-2 border rounded-lg outline-none border-gray-300 dark:border-slate-700 bg-white dark:bg-card-dark-02 dark:text-white transition-colors"
          />
        </div>

        <!-- DESCRIPTION -->
        <div>
          <label
            class="block text-sm font-semibold text-gray-700 dark:text-slate-300 mb-2"
            >คำอธิบายสั้นๆ</label
          >
          <input
            v-model="editForm.short_description"
            class="w-full px-4 py-2 border rounded-lg outline-none border-gray-300 dark:border-slate-700 bg-white dark:bg-card-dark-02 dark:text-white transition-colors"
          />
        </div>

        <!-- IMAGE -->
        <div>
          <label
            class="block text-sm font-semibold text-gray-700 dark:text-slate-300 mb-2"
            >อัปโหลดรูปภาพ</label
          >
          <input
            type="file"
            @change="handleEditFile"
            class="w-full px-4 py-2 border rounded-lg border-gray-300 dark:border-slate-700 bg-white dark:bg-card-dark-02 dark:text-white transition-colors"
          />

          <img
            v-if="editForm.image"
            :src="editForm.image"
            class="w-40 mt-3 rounded-lg shadow"
          />
        </div>

        <!-- INGREDIENT -->
        <div>
          <div class="flex justify-between items-center mb-2">
            <label
              class="block text-sm font-semibold text-gray-700 dark:text-slate-300"
              >วัตถุดิบ</label
            >
            <button
              @click="addIngredient"
              type="button"
              class="text-sm bg-orange-50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 px-3 py-1 rounded-md hover:bg-orange-100 flex items-center gap-1 font-bold transition-colors"
            >
              <span class="material-symbols-outlined text-sm">add</span>
              เพิ่มวัตถุดิบ
            </button>
          </div>

          <div
            v-for="(item, index) in editForm.ingredients"
            :key="index"
            class="flex gap-2 mb-2 flex-col"
          >
            <div class="flex gap-2">
              <input
                v-model="item.name"
                class="flex-1 px-3 py-2 border rounded-md border-gray-300 dark:border-slate-700 bg-white dark:bg-card-dark-02 dark:text-white transition-colors"
                placeholder="ชื่อวัตถุดิบ"
              />

              <input
                v-model.number="item.quantity"
                type="number"
                class="w-20 px-3 py-2 border rounded-md border-gray-300 dark:border-slate-700 bg-white dark:bg-card-dark-02 dark:text-white transition-colors"
              />

              <select
                v-model="item.unit"
                class="w-24 px-3 py-2 border rounded-md border-gray-300 dark:border-slate-700 bg-white dark:bg-card-dark-02 dark:text-white transition-colors"
              >
                <option value="ชิ้น" class="dark:bg-card-dark-02">ชิ้น</option>
                <option value="มล." class="dark:bg-card-dark-02">มล.</option>
                <option value="กรัม" class="dark:bg-card-dark-02">กรัม</option>
              </select>

              <button
                @click="removeIngredient(index)"
                class="text-orange-500 hover:bg-orange-50 dark:hover:bg-orange-900/30 p-1 rounded transition-colors"
              >
                <span class="material-symbols-outlined">delete</span>
              </button>
            </div>
          </div>
        </div>

        <!-- STEPS -->
        <div>
          <div class="flex justify-between items-center mb-2">
            <label
              class="block text-sm font-semibold text-gray-700 dark:text-slate-300"
              >วิธีทำ</label
            >
            <button
              @click="addStep"
              type="button"
              class="text-sm bg-orange-50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 px-3 py-1 rounded-md hover:bg-orange-100 flex items-center gap-1 font-bold transition-colors"
            >
              <span class="material-symbols-outlined text-sm">add</span>
              เพิ่มขั้นตอน
            </button>
          </div>

          <div
            v-for="(step, index) in editForm.steps"
            :key="index"
            class="flex gap-3 mb-3 items-start"
          >
            <span class="mt-2 font-bold text-gray-400 dark:text-slate-600">
              {{ index + 1 }}.
            </span>

            <textarea
              v-model="editForm.steps[index]"
              class="flex-1 px-3 py-2 border rounded-md h-20 border-gray-300 dark:border-slate-700 bg-white dark:bg-card-dark-02 dark:text-white transition-colors"
            ></textarea>

            <button
              @click="removeStep(index)"
              class="mt-2 text-orange-500 hover:bg-orange-50 dark:hover:bg-orange-900/30 p-1 rounded transition-colors"
            >
              <span class="material-symbols-outlined">delete</span>
            </button>
          </div>
        </div>
      </div>

      <!-- FOOTER -->
      <div
        class="p-6 border-t dark:border-card-dark-02 flex justify-end gap-3 bg-slate-50 dark:bg-card-dark transition-colors"
      >
        <button
          @click="cancelEdit"
          class="px-6 py-2 border border-gray-100 dark:border-slate-700 rounded-xl text-slate-500 dark:text-slate-400 bg-white dark:bg-card-dark-02 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors font-bold"
        >
          ยกเลิก
        </button>

        <button
          @click="saveEdit"
          class="px-8 py-2 bg-secondary text-white rounded-xl hover:bg-orange-600 font-bold shadow-lg shadow-secondary/20 transition-all"
        >
          บันทึกสูตรอาหาร
        </button>
      </div>
    </div>
  </div>
</template>
