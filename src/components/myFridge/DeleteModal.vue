<script setup>
import { onMounted, onUnmounted } from 'vue'

const props = defineProps({
  show: Boolean,
});

const emit = defineEmits(["close", "confirm"]);

function handleClose() {
  emit("close");
}

function handleConfirm() {
  emit("confirm");
}

const handleEsc = (e) => {
  if (e.key === 'Escape') {
    handleClose()
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleEsc)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleEsc)
})
</script>

<template>
  <div v-if="show" @click.self="handleClose" class="fixed inset-0 flex items-center justify-center bg-black/50 z-[120]">
    <div class="bg-white dark:bg-card-dark p-6 rounded-2xl w-full max-w-[320px] text-center shadow-xl">
      <div class="flex justify-center mb-4">
        <div class="bg-orange-100 p-4 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-8 text-danger"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
          </svg>
        </div>
      </div>
      <h2 class="text-xl font-bold dark:text-white mb-2">ลบวัตถุดิบ?</h2>
      <p class="text-neutral-500 mb-6 text-sm">
        คุณแน่ใจหรือไม่ว่าต้องการลบวัตถุดิบนี้? การดำเนินการนี้ไม่สามารถย้อนกลับได้
      </p>
      <div class="flex justify-center gap-3">
        <button
          @click="handleClose"
          class="flex-1 py-2 hover:bg-neutral-200 hover:-translate-y-1 transition-all duration-500 bg-neutral-100 text-neutral-700 font-bold rounded-xl focus:outline-none"
        >
          ยกเลิก
        </button>
        <button
          @click="handleConfirm"
          class="flex-1 py-2 hover:bg-danger hover:-translate-y-1 transition-all duration-500 bg-danger text-white font-bold rounded-xl focus:outline-none shadow-md shadow-orange-100 dark:shadow-none"
        >
          ลบเลย
        </button>
      </div>
    </div>
  </div>
</template>
