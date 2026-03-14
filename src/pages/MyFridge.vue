<script setup>
import FridgeItems from '../components/FridgeItems.vue';
import UseItUp from '../components/UseItUp.vue';
import FridgeHealth from '../components/FridgeHealth.vue';
import { ref, watch , computed } from "vue";

const showModal = ref(false)

function openModal() {
  showModal.value = true
}

function closeModal() {
  showModal.value = false;
  editingItemId.value = null;   
  originalItemData.value = null;
  
  error.value = {
  name: '',
  category: '',
  quantity: '',
  unit:'',
  expiredDate: ''
}
}



let fridgeItems = ref(JSON.parse(localStorage.getItem("fridgeItems")) || [])
if (fridgeItems === []){
  localStorage.setItem("fridgeItems", JSON.stringify([]))
}




// error handling
const error = ref({
  name: '',
  category: '',
  quantity: '',
  unit:'',
  expiredDate: ''
})

function validateForm() {
  error.value = { name: '', category: '', quantity: '', unit: '', expiredDate: '' }
  
  let errorCount = 0
  let tempErrors = { name: '', category: '', quantity: '', unit: '', expiredDate: '' }

  if (!name.value.trim()) {
    tempErrors.name = 'Please enter an item name.'
    errorCount++
  }
  
  if (!name.value.trim()) {
    tempErrors.name = 'Please enter an item name.'
    errorCount++
  } else {
    // เช็กว่าชื่อซ้ำกับของที่มีในตู้เย็นไหม (แปลงเป็นตัวพิมพ์เล็กเพื่อเทียบให้แม่นขึ้น)
    const isDuplicate = fridgeItems.value.some(item => {
      // ถ้าเป็นการ Edit (มี editingItemId) ให้ข้ามการเทียบกับชื่อของตัวมันเอง
      if (editingItemId.value && item.id === editingItemId.value) {
        return false;
      }
      return item.name.toLowerCase() === name.value.trim().toLowerCase();
    });

    if (isDuplicate) {
      tempErrors.name = 'This item already exists in your fridge.'
      errorCount++
    }
  }
  
  if (!category.value) {
    tempErrors.category = 'Please select a category.'
    errorCount++
  }

  if (!quantity.value || isNaN(quantity.value) || Number(quantity.value) <= 0) {
    tempErrors.quantity = 'Quantity must be greater than 0.'
    errorCount++
  }

  if (!unit.value.trim()) {
    tempErrors.unit = 'Please select an item unit.'
    errorCount++
  }

  if (!expiredDate.value) {
    tempErrors.expiredDate = 'Please select an expiration date.'
    errorCount++
  }

  if (!expiredDate.value) {
    tempErrors.expiredDate = 'Please select an expiration date.'
    errorCount++
  } else {
    const today = new Date();
    today.setHours(0, 0, 0, 0); 

    const selectedDate = new Date(expiredDate.value);
    selectedDate.setHours(0, 0, 0, 0);
    if (selectedDate < today) {
      tempErrors.expiredDate = 'Expiration date cannot be in the past.'
      errorCount++
    }
  }

  if (errorCount > 1) {
    const generalMsg = 'Please fill in all required fields.'
    
    if (tempErrors.name) error.value.name = generalMsg
    if (tempErrors.category) error.value.category = generalMsg
    if (tempErrors.quantity) error.value.quantity = generalMsg
    if (tempErrors.unit) error.value.unit = generalMsg
    if (tempErrors.expiredDate) error.value.expiredDate = generalMsg

  } else if (errorCount === 1) {
    error.value = { ...tempErrors }
  }

  return errorCount === 0
}





const originalItemData = ref(null);
const editingItemId = ref(null);

const openAddModal = () => {
  editingItemId.value = null;
  originalItemData.value = null;
  
  name.value = "";
  category.value = "";
  quantity.value = "";
  unit.value = "";
  expiredDate.value = "";
  
  openModal();
};



// deleteItem
const deleteItem = (id) => {
  if (confirm('Are you sure you want to delete this item?')) {
    fridgeItems.value = fridgeItems.value.filter(item => item.id !== id);
  }
}


// editItem
const editItem = (item) => {
  editingItemId.value = item.id;
  originalItemData.value = { ...item };
  name.value = item.name;
  category.value = item.category;
  quantity.value = item.quantity;
  unit.value = item.unit;
  expiredDate.value = item.expiredDate;
  
  
  openModal();
};

const isFormUnchanged = computed(() => {
  if (!originalItemData.value) return false;

  return (
    name.value === originalItemData.value.name &&
    category.value === originalItemData.value.category &&
    String(quantity.value) === String(originalItemData.value.quantity) &&
    unit.value === originalItemData.value.unit &&
    expiredDate.value === originalItemData.value.expiredDate
  );
});

// AddItem
const name = ref('')
const quantity = ref('')
const unit = ref('')
const expiredDate = ref('')
const category = ref('')


function submitAddItem() {
  if (!validateForm()) {
    return; 
  }

  if (editingItemId.value) {
    const index = fridgeItems.value.findIndex(item => item.id === editingItemId.value);
    
    if (index !== -1) {
      fridgeItems.value[index] = {
        ...fridgeItems.value[index],
        name: name.value,
        category: category.value,
        quantity: quantity.value,
        unit: unit.value,
        expiredDate: expiredDate.value
      };
    }
  } else {

    const nextId = fridgeItems.value.length > 0 
      ? Math.max(...fridgeItems.value.map(item => item.id)) + 1 
      : 1;
    const today = new Date().toISOString().split('T')[0];

    fridgeItems.value.push({
      id: nextId,
      name: name.value,
      category: category.value,
      quantity: quantity.value,
      unit: unit.value,
      purchaseDate: today,
      expiredDate: expiredDate.value
    });
  }

  
  name.value = '';
  quantity.value = '';
  category.value = '';
  unit.value = '';
  expiredDate.value = '';
  
  closeModal();
}


watch(
  fridgeItems, 
  (newVal) => {
    localStorage.setItem("fridgeItems", JSON.stringify(newVal))
  },
  { deep: true }
)







// sort 
const searchQuery = ref("");
const sortBy = ref("expiry");
const filterBy = ref("all"); 

const selectedCategory = ref("all");

const categories = [
  { id: 'all', name: 'All Items' },
  { id: 'vegetable', name: 'Vegetable 🥦' },
  { id: 'fruit', name: 'Fruit 🍎' },
  { id: 'meat', name: 'Meat & Poultry 🥩' },
  { id: 'seafood', name: 'Seafood 🐟' },
  { id: 'dairy', name: 'Dairy & Eggs 🥚' },
  { id: 'drink', name: 'Drinks 🥤' }
];


// 2. สร้าง Computed เพื่อกรองและจัดเรียงข้อมูลแบบเรียลไทม์
const processedFridgeItems = computed(() => {
  // ก๊อปปี้ array ออกมาก่อน จะได้ไม่กระทบข้อมูลต้นฉบับเวลา sort
  let result = [...fridgeItems.value];

  // --- Step 1: SEARCH ---
  if (searchQuery.value.trim()) {
    const query = searchQuery.value.toLowerCase();
    result = result.filter(item => 
      item.name.toLowerCase().includes(query)
    );
  }

  // --- Step 2: FILTER (เวลาที่เหลือ) ---
if (filterBy.value !== "all") {
    const now = new Date().getTime();
    result = result.filter(item => {
      const expTime = new Date(item.expiredDate).getTime();
      const diffInHours = (expTime - now) / (1000 * 60 * 60);

      if (filterBy.value === "24h") return diffInHours >= 0 && diffInHours <= 24;
      if (filterBy.value === "48h") return diffInHours > 24 && diffInHours <= 48;
      if (filterBy.value === "more") return diffInHours > 48;
      if (filterBy.value === "expired") return diffInHours < 0; 
      
      return true;
    });
  }

  // --- Step 3: SORT ---
  if (selectedCategory.value !== "all") {
    result = result.filter(item => 
      item.category.toLowerCase() === selectedCategory.value.toLowerCase() 
    );
  }

  // Step 4: SORT
  result.sort((a, b) => {
    if (sortBy.value === "a-z") {
      return a.name.localeCompare(b.name);
    } else if (sortBy.value === "expiry") {
      return new Date(a.expiredDate) - new Date(b.expiredDate);
    } else if (sortBy.value === "purchase") {
      return new Date(b.purchaseDate) - new Date(a.purchaseDate);
    }
    return 0;
  });

  return result;
});

const resetFilters = () => {
  searchQuery.value = "";
  sortBy.value = "expiry";
  filterBy.value = "all";
  selectedCategory.value = "all";
};





// match รูปกับ ชื่อ ingredient
const icons = import.meta.glob('../assets/ingredient-icon/*.png', { eager: true });
const iconNames = Object.keys(icons).map(path => {
  return path
    .split('/')
    .pop()
    .replace('.png','') 
});
const getIngredientIcon = (name) => {
  const lowerName = name.toLowerCase().trim();
  const mapping = {
    milk: 'milk',
    chick: 'chicken',
    meat: 'meat',
    fish: 'fish',
    steak: 'steak',
    shrimp: 'shrimp',
    chicken: 'chicken',
    strawb: 'strawberry',
    cheese: 'cheese',
    pork: 'pork',
    salad: 'salad',
    egg: 'eggs',
    bread: 'bread',
    carrot: 'carrot',
    broccoli: 'broccoli'
  };

  let fileName = null;

  for (const key in mapping) {
    if (lowerName.includes(key)) {
      fileName = mapping[key];
      break;
    }
  }
  if (!fileName && iconNames.includes(lowerName)) {
    fileName = lowerName;
  }
  if (!fileName) fileName = "default";
  const targetPath = `../assets/ingredient-icon/${fileName}.png`;
  return icons[targetPath]?.default || icons[`../assets/ingredient-icon/default.png`]?.default || "";
};  


</script>

<template>
  <div class="px-4 py-4 bg-neutral-200 min-h-screen flex flex-col gap-4
  md:px-10 lg:flex-row">
    <div class="flex flex-col gap-4 w-full lg:max-w-6/8 lg:mr-auto">

    <div class="flex justify-between py-2">
        <div class="flex flex-col gap-1">
            <h1 class="text-3xl font-bold">My Fridge</h1>
            <p class="text-neutral-500">Manage your household ingredients</p>
        </div>
        <button class="rounded-full flex justify-center items-center min-w-[129px] shadow shadow-success
         bg-success text-white h-full max-h-10 gap-2 hover:scale-[1.025] transition py-3 px-1
         md:py-2 md:px-5
         lg:py-1 lg:px-4"
         
         @click="openModal"
         >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 ">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
        Add Item</button>
    </div>
    <div class="flex rounded-3xl bg-white p-4 flex-wrap md:flex-nowrap shadow shadow-neutral-300 gap-3">
  
  <div class="bg-neutral-100 px-4 py-1 rounded-3xl w-full  flex justify-center items-center">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 text-neutral-500 mr-2">
      <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
    </svg>
    <input 
      v-model="searchQuery" 
      class="w-full bg-neutral-100 outline-none focus:outline-none focus:ring-0 border-none " 
      placeholder="Search ingredients (e.g. Egg, Milk)" 
      type="text" 
    />
  </div>

  <div class="shrink-0 bg-neutral-100 px-3 py-1 md:px-4 md:py-1 w-full max-w-55 rounded-3xl cursor-pointer  flex justify-center  items-center ">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-7 text-neutral-500">
      <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
    </svg>
    <select v-model="sortBy" class="bg-transparent focus:ring-0 focus:outline-none border-0 ring-0 outline-none cursor-pointer appearance-none text-center font-medium w-full">
      <option value="a-z">Sort: A-Z</option>
      <option value="expiry">Sort: Expiry</option>
      <option value="purchase">Sort: Purchase</option>
    </select>
  </div>

  <div class="shrink-0 bg-neutral-100 px-3 py-1 md:px-4 md:py-1 w-full max-w-55 rounded-3xl cursor-pointer  flex justify-center  items-center ">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-7 text-neutral-500">
      <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
    </svg>
    <select v-model="filterBy" class="bg-transparent focus:ring-0 focus:outline-none border-0 ring-0 outline-none cursor-pointer appearance-none text-center font-medium w-full">
      <option value="all">Filter: All</option>
      <option value="24h">Exp in 24h</option>
      <option value="48h">Exp in 48h</option>
      <option value="more">Exp after 48h</option>
      <option value="expired">Expired</option>
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
        ? 'bg-neutral-800 text-white shadow-neutral-500'  /* สีตอนปุ่มถูกกด (Active) */
        : 'bg-white text-black shadow-neutral-300 hover:bg-neutral-600 hover:text-white' /* สีปุ่มปกติ */
    ]"
  >
    {{ cat.name }}
  </button>
</div>

<FridgeItems 
  :fridgeItems="processedFridgeItems" 
  :getIcon="getIngredientIcon"
  @delete-item="deleteItem" 
  @edit-item="editItem" 
/>
    </div>

    <div class="flex flex-col gap-4 w-full lg:max-w-2/8">
        <UseItUp 
        :fridgeItems="fridgeItems" 
        :getIcon="getIngredientIcon"
        />

        <FridgeHealth :fridgeItems="fridgeItems" />

        <div class="bg-white  rounded-2xl flex flex-col p-5 shadow gap-2">
            <h3 class="font-bold text-xl">Suggest menu</h3>
        </div>
    </div>




<!-- Add Item -->
    <div v-if="showModal" class="fixed inset-0 flex items-center justify-center bg-black/50">
  <div class="bg-white p-6 rounded-xl w-80">

    <h2 class="text-xl font-bold mb-4">Add Item</h2>
    <form action="" @submit.prevent="submitAddItem" class="flex flex-col gap-3">

      <div class="flex flex-col gap-1">

    <label for="item-name">Name</label>
    <input
      type="text"
      id="item-name"
      v-model="name"
      placeholder="Item Name (e.g. Egg)"
      class="border-2 py-2 px-4 w-full rounded-xl focus:border-success focus:ring-0 focus:outline-none"
      :class="error.name ? 'border-danger focus:border-danger' : 'border-gray-200 focus:border-success'"
    />
      </div>

<div class="flex flex-col gap-1">

    <label for="item-category">Category</label>
    <select 
    id="item-category"
    v-model="category"
    class="border-2 py-2 px-4 w-full rounded-xl focus:border-success focus:ring-0 focus:outline-none"
    :class="error.category ? 'border-danger focus:border-danger' : 'border-gray-200 focus:border-success'">
        <option value="" disabled selected>Select Category</option>
        <option v-for="cat in categories.slice(1)" :value="cat.id">{{cat.name}}</option>
    </select>
</div>

    
<di class="flex flex-col gap-1">

    <label for="item-quantity">Quantity</label>
    <input
      type="text"
      id="item-quantity"
      v-model="quantity"
      placeholder="Item Quantity (e.g. 3)"
      class="border-2 py-2 px-4 w-full rounded-xl focus:border-success focus:ring-0 focus:outline-none"
      :class="error.quantity ? 'border-danger focus:border-danger' : 'border-gray-200 focus:border-success'"
    />
</di>



<di class="flex flex-col gap-1">

    <label for="item-unit">Unit</label>
    <select 
    id="item-unit"
    v-model="unit"
    class="border-2 py-2 px-4 w-full rounded-xl focus:border-success focus:ring-0 focus:outline-none"
    :class="error.unit ? 'border-danger focus:border-danger' : 'border-gray-200 focus:border-success'">
        <option value="" disabled selected>Select Unit</option>
        <option value="ml">Milliliter</option>
        <option value="g">Gram</option>
        <option value="pcs">Pieces</option>
    </select>
</di>

<di class="flex flex-col gap-1">

    <label for="item-expired-date">Expired Date</label>
    <input
      type="date"
      id="item-expired-date"
      v-model="expiredDate"
      placeholder="Item Expired Date"
      class="border-2 py-2 px-4 w-full rounded-xl focus:border-success focus:ring-0 focus:outline-none"
      :class="error.expiredDate ? 'border-danger focus:border-danger' : 'border-gray-200 focus:border-success'"
    />
</di>
    
<div 
      v-if="error.name || error.category || error.quantity || error.unit || error.expiredDate" 
      class="text-danger text-sm font-bold text-center my-1"
    >
      {{ error.name || error.category || error.quantity || error.unit || error.expiredDate }}
    </div>

    <div class="flex justify-end gap-1">
      <button 
        @click="closeModal"
        class="px-4 py-2 hover:bg-neutral-400 transition bg-gray-300 rounded-xl focus:border-success focus:ring-0 focus:outline-none"
      >
        Cancel
      </button>

      <button 
        class="px-4 py-2 hover:bg-green-500 transition bg-success text-white rounded-xl focus:border-success focus:ring-0 focus:outline-none"
        type="submit"
      >
        Add
      </button>
    </div>
    </form>

  </div>
</div>



  </div>
</template>



<style scoped>
</style>