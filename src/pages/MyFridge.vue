<script setup>
import { ref, computed } from "vue";
import { fridgeItems } from "@/data/fridgeItems";
import FridgeItems from "../components/myFridge/FridgeItems.vue";
import UseItUp from "../components/myFridge/UseItUp.vue";
import FridgeHealth from "../components/myFridge/FridgeHealth.vue";
import RecommendMenu from "../components/myFridge/RecommendMenu.vue";
import FridgeFormModal from "../components/myFridge/FridgeFormModal.vue";
import DeleteModal from "../components/myFridge/DeleteModal.vue";

const showModal = ref(false);
const showDeleteModal = ref(false);
const editingItem = ref(null);
const itemToDeleteId = ref(null);

const categories = [
  { id: "all", name: "ทั้งหมด" },
  { id: "vegetable", name: "ผัก 🥦" },
  { id: "fruit", name: "ผลไม้ 🍎" },
  { id: "meat", name: "เนื้อสัตว์ 🥩" },
  { id: "seafood", name: "อาหารทะเล 🐟" },
  { id: "bakery", name: "เบเกอรี่ 🍞" },
  { id: "dairy", name: "ไข่และนม 🥚" },
  { id: "drink", name: "เครื่องดื่ม 🥤" },
  { id: "spice", name: "เครื่องเทศ 🧂" },
];

const searchQuery = ref("");
const sortBy = ref("expiry");
const filterBy = ref("all");
const selectedCategory = ref("all");

function openAddModal() {
  editingItem.value = null;
  showModal.value = true;
}

function openEditModal(item) {
  editingItem.value = item;
  showModal.value = true;
}

function closeFormModal() {
  showModal.value = false;
  editingItem.value = null;
}

function saveItem(itemData) {
  if (editingItem.value) {
    const index = fridgeItems.value.findIndex((item) => item.id === editingItem.value.id);
    if (index !== -1) {
      fridgeItems.value[index] = {
        ...fridgeItems.value[index],
        ...itemData,
      };
    }
  } else {
    const nextId = fridgeItems.value.length > 0 ? Math.max(...fridgeItems.value.map((item) => item.id)) + 1 : 1;
    const today = new Date().toISOString().split("T")[0];
    fridgeItems.value.push({
      id: nextId,
      ...itemData,
      purchaseDate: today,
    });
  }
  closeFormModal();
}

function confirmDelete(id) {
  itemToDeleteId.value = id;
  showDeleteModal.value = true;
}

function cancelDelete() {
  showDeleteModal.value = false;
  itemToDeleteId.value = null;
}

function executeDelete() {
  if (itemToDeleteId.value !== null) {
    fridgeItems.value = fridgeItems.value.filter((item) => item.id !== itemToDeleteId.value);
    showDeleteModal.value = false;
    itemToDeleteId.value = null;
  }
}

function calculateExpiredDate(expiredDate) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const targetDate = new Date(expiredDate);
  targetDate.setHours(0, 0, 0, 0);
  const diffInMs = targetDate - today;
  return Math.round(diffInMs / (1000 * 60 * 60 * 24));
}

function getExpiryMsg(expiredDate) {
  const diffInDays = calculateExpiredDate(expiredDate);
  if (diffInDays > 1) return `เหลืออีก ${diffInDays} วัน`;
  if (diffInDays === 1) return "หมดอายุพรุ่งนี้";
  if (diffInDays === 0) return "หมดอายุวันนี้";
  return "หมดอายุแล้ว";
}

const processedFridgeItems = computed(() => {
  let result = [...fridgeItems.value];

  if (searchQuery.value.trim()) {
    const query = searchQuery.value.toLowerCase();
    result = result.filter((item) => item.name.toLowerCase().includes(query));
  }

  if (filterBy.value !== "all") {
    result = result.filter((item) => {
      const diffInDays = calculateExpiredDate(item.expiredDate);
      if (filterBy.value === "24h") return diffInDays === 0 || diffInDays === 1;
      if (filterBy.value === "48h") return diffInDays === 2;
      if (filterBy.value === "more") return diffInDays > 2;
      if (filterBy.value === "expired") return diffInDays < 0;
      return true;
    });
  }

  if (selectedCategory.value !== "all") {
    result = result.filter((item) => item.category.toLowerCase() === selectedCategory.value.toLowerCase());
  }

  result.sort((a, b) => {
    if (sortBy.value === "a-z") return a.name.localeCompare(b.name);
    if (sortBy.value === "expiry") return new Date(a.expiredDate) - new Date(b.expiredDate);
    if (sortBy.value === "purchase") return new Date(b.purchaseDate) - new Date(a.purchaseDate);
    return 0;
  });

  return result;
});

const icons = import.meta.glob("../assets/ingredient-icon/*.png", { eager: true });
const iconNames = Object.keys(icons).map((path) => path.split("/").pop().replace(".png", ""));

const getIngredientIcon = (name) => {
  const lowerName = name.toLowerCase().trim();
  const mapping = {
    ขนมปัง: "bread" , นม: "milk", ไข่: "eggs", ไก่: "chicken", เนื้อ: "meat", ปลา: "fish",
    สเต็ก: "steak", กุ้ง: "shrimp", สตรอเบอร์รี่: "strawberry", ชีส: "cheese",
    หมู: "pork", สลัด: "salad", ขนมปัง: "bread", แครอท: "carrot", บรอกโคลี: "broccoli",
  };

  let fileName = null;
  for (const key in mapping) {
    if (lowerName.includes(key)) {
      fileName = mapping[key];
      break;
    }
  }
  if (!fileName && iconNames.includes(lowerName)) fileName = lowerName;
  if (!fileName) fileName = "default";
  
  const targetPath = `../assets/ingredient-icon/${fileName}.png`;
  return icons[targetPath]?.default || icons[`../assets/ingredient-icon/default.png`]?.default || "";
};
</script>

<template>
  <div class="px-4 py-8 bg-slate-50 dark:bg-background-dark transition-colors duration-300 min-h-screen w-full flex flex-col gap-4 md:px-10 lg:flex-row font-sans justify-center">
    <div class="flex flex-col gap-4 w-full max-w-[1280px] lg:flex-row">
      <div class="flex flex-col gap-4 w-full lg:flex-1">
        <div class="flex justify-between py-2">
          <div class="flex flex-col gap-1">
            <h1 class="text-3xl font-bold flex items-center gap-1 dark:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
              </svg>
              ตู้เย็นของฉัน
            </h1>
            <p class="text-neutral-600 dark:text-neutral-400 font-medium">จัดการวัตถุดิบในบ้านของคุณ</p>
          </div>
          <button
            class="rounded-full flex justify-center items-center min-w-[129px] shadow-lg shadow-secondary/20 bg-secondary text-white h-full max-h-10 gap-2 hover:scale-[1.025] transition py-3 px-1 md:py-2 md:px-5 lg:py-1 lg:px-4"
            @click="openAddModal"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            เพิ่มวัตถุดิบ
          </button>
        </div>

        <div class="flex rounded-3xl bg-white dark:bg-card-dark p-4 flex-wrap md:flex-nowrap shadow shadow-neutral-300 dark:shadow-slate-900/50 gap-3 border border-transparent dark:border-card-dark-02 transition-colors">
          <div class="shrink-2 bg-neutral-100 dark:bg-card-dark-02 px-4 py-1 rounded-3xl w-full flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 text-neutral-500 dark:text-neutral-400 mr-2">
              <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
            <input
              v-model="searchQuery"
              class="w-full bg-neutral-100 dark:bg-card-dark-02 outline-none focus:outline-none focus:ring-0 border-none dark:text-white placeholder:dark:text-neutral-500"
              placeholder="ค้นหาวัตถุดิบ (เช่น ไข่, นม)"
              type="text"
            />
          </div>

          <div class="shrink-0 bg-neutral-100 dark:bg-card-dark-02 px-3 py-1 w-[240px] grow rounded-3xl cursor-pointer flex justify-center items-center md:px-4 md:py-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-7 text-neutral-500">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
            </svg>
            <select
              v-model="sortBy"
              class="bg-transparent focus:ring-0 focus:outline-none border-0 ring-0 outline-none cursor-pointer appearance-none text-center font-bold w-full dark:text-white"
            >
              <option value="a-z" class="dark:bg-card-dark">เรียง: ก-ฮ</option>
              <option value="expiry" class="dark:bg-card-dark">เรียง: วันหมดอายุ</option>
              <option value="purchase" class="dark:bg-card-dark">เรียง: วันที่ซื้อ</option>
            </select>
          </div>

          <div class="shrink-0 bg-neutral-100 dark:bg-card-dark-02 px-3 py-1 w-[240px] grow rounded-3xl cursor-pointer flex justify-center items-center md:px-4 md:py-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-7 text-neutral-500">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
            </svg>
            <select
              v-model="filterBy"
              class="bg-transparent focus:ring-0 focus:outline-none border-0 ring-0 outline-none cursor-pointer appearance-none text-center font-bold w-full dark:text-white"
            >
              <option value="all" class="dark:bg-card-dark">ตัวกรอง: ทั้งหมด</option>
              <option value="24h" class="dark:bg-card-dark">หมดอายุใน 24 ชม.</option>
              <option value="48h" class="dark:bg-card-dark">หมดอายุใน 48 ชม.</option>
              <option value="more" class="dark:bg-card-dark">มากกว่า 48 ชม.</option>
              <option value="expired" class="dark:bg-card-dark">หมดอายุแล้ว</option>
            </select>
          </div>
        </div>

        <div class="flex flex-wrap lg:flex-no-wrap mt-4 mb-2 gap-3 overflow-x-auto pb-2 scrollbar-hide">
          <button
            v-for="cat in categories"
            :key="cat.id"
            @click="selectedCategory = cat.id"
            :class="[
              'shrink-0 rounded-full shadow py-2 px-4 transition font-medium hover:scale-[1.015]',
              selectedCategory === cat.id
                ? 'bg-secondary text-white shadow-secondary/20'
                : 'bg-white dark:bg-card-dark text-slate-600 dark:text-slate-300 shadow-slate-100 dark:shadow-slate-900/50 hover:bg-secondary/10 hover:text-secondary',
            ]"
          >
            {{ cat.name }}
          </button>
        </div>

        <FridgeItems
          :fridgeItems="processedFridgeItems"
          :getIcon="getIngredientIcon"
          @delete-item="confirmDelete"
          @edit-item="openEditModal"
          :calculateExpiredDate="calculateExpiredDate"
          :getExpiryMsg="getExpiryMsg"
        />
      </div>

      <div class="flex flex-col gap-4 w-full lg:max-w-[350px]">
        <UseItUp
          :fridgeItems="fridgeItems"
          :getIcon="getIngredientIcon"
          :calculateExpiredDate="calculateExpiredDate"
          :getExpiryMsg="getExpiryMsg"
          @delete-item="confirmDelete"
        />
        <FridgeHealth :fridgeItems="fridgeItems" />
        <RecommendMenu :fridgeItems="fridgeItems" />
      </div>

      <!-- Modals -->
      <FridgeFormModal
        :show="showModal"
        :item="editingItem"
        :categories="categories"
        :fridgeItems="fridgeItems"
        @close="closeFormModal"
        @save="saveItem"
      />

      <DeleteModal
        :show="showDeleteModal"
        @close="cancelDelete"
        @confirm="executeDelete"
      />
    </div>
  </div>
</template>

<style scoped></style>
