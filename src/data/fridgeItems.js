import { ref, watch } from 'vue'

const STORAGE_KEY = 'fridgeItems'


const getTodayOffset = (days) => {
  const d = new Date()
  d.setDate(d.getDate() + days)
  return d.toISOString().split('T')[0]
}

const defaultItems = [
  
  { id: 101, name: "ไข่ไก่", category: "dairy", quantity: 6, unit: "ชิ้น", expiredDate: getTodayOffset(7), purchaseDate: getTodayOffset(0) },
  { id: 102, name: "เนย", category: "dairy", quantity: 50, unit: "กรัม", expiredDate: getTodayOffset(30), purchaseDate: getTodayOffset(0) },
  { id: 103, name: "เกลือ", category: "spice", quantity: 100, unit: "กรัม", expiredDate: getTodayOffset(365), purchaseDate: getTodayOffset(0) },
  { id: 104, name: "พริกไทย", category: "spice", quantity: 20, unit: "กรัม", expiredDate: getTodayOffset(180), purchaseDate: getTodayOffset(0) },
  
  
  { id: 105, name: "ขนมปัง", category: "bakery", quantity: 2, unit: "ชิ้น", expiredDate: getTodayOffset(3), purchaseDate: getTodayOffset(0) },
  { id: 106, name: "นม", category: "dairy", quantity: 500, unit: "มล.", expiredDate: getTodayOffset(5), purchaseDate: getTodayOffset(0) },
  { id: 107, name: "ไก่", category: "meat", quantity: 500, unit: "กรัม", expiredDate: getTodayOffset(4), purchaseDate: getTodayOffset(0) },
  { id: 108, name: "เนื้อ", category: "meat", quantity: 300, unit: "กรัม", expiredDate: getTodayOffset(3), purchaseDate: getTodayOffset(0) },
  { id: 109, name: "ปลา", category: "seafood", quantity: 1, unit: "ชิ้น", expiredDate: getTodayOffset(2), purchaseDate: getTodayOffset(0) },
  { id: 110, name: "กุ้ง", category: "seafood", quantity: 10, unit: "ชิ้น", expiredDate: getTodayOffset(3), purchaseDate: getTodayOffset(0) },
  { id: 111, name: "สตรอเบอร์รี่", category: "fruit", quantity: 200, unit: "กรัม", expiredDate: getTodayOffset(4), purchaseDate: getTodayOffset(0) },
  { id: 112, name: "ชีส", category: "dairy", quantity: 100, unit: "กรัม", expiredDate: getTodayOffset(14), purchaseDate: getTodayOffset(0) },
  { id: 113, name: "หมู", category: "meat", quantity: 400, unit: "กรัม", expiredDate: getTodayOffset(3), purchaseDate: getTodayOffset(0) },
  { id: 114, name: "แครอท", category: "vegetable", quantity: 2, unit: "ชิ้น", expiredDate: getTodayOffset(10), purchaseDate: getTodayOffset(0) },
  { id: 115, name: "บรอกโคลี", category: "vegetable", quantity: 1, unit: "ชิ้น", expiredDate: getTodayOffset(6), purchaseDate: getTodayOffset(0) },
]


const storedItems = localStorage.getItem(STORAGE_KEY)
const initialFridgeItems = storedItems ? JSON.parse(storedItems) : defaultItems


export const fridgeItems = ref(initialFridgeItems)


watch(fridgeItems, (newItems) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(newItems))
}, { deep: true })
