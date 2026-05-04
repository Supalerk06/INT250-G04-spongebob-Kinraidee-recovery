<template>
  <section
    class="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
  >
    <div class="absolute inset-0 bg-slate-50/50 z-0"></div>
    <div
      class="absolute top-1/4 left-1/4 w-[30vw] h-[30vw] bg-secondary/5 blur-[120px] rounded-full mix-blend-multiply animate-pulse"
    ></div>
    <div
      class="absolute bottom-1/4 right-1/4 w-[40vw] h-[40vw] bg-orange-200/10 blur-[150px] rounded-full mix-blend-multiply"
    ></div>

    <div class="relative z-10 text-center max-w-4xl mx-auto px-6">
      <span
        class="inline-block py-1.5 px-4 rounded-full bg-white border border-slate-100 text-secondary text-xs font-black tracking-widest uppercase mb-8 shadow-sm"
      >
        ผู้ช่วยทำอาหารส่วนตัวของคุณ
      </span>
      <h1
        class="text-6xl md:text-8xl font-black leading-tight mb-6 tracking-tight text-slate-800"
      >
        แก้ปัญหาโลกแตก:<br />
        <span class="text-secondary">"วันนี้กินอะไรดี?"</span>
      </h1>
      <p
        class="text-lg md:text-xl text-slate-500 mb-10 max-w-2xl mx-auto font-medium leading-relaxed"
      >
        ตัดสินใจเลือกเมนูถัดไปได้ใน 3 วินาที ค้นพบร้านอร่อยในพื้นที่ของคุณ
        และจัดระเบียบตู้เย็นเพื่อรังสรรค์สูตรอาหารลับของคุณเอง
      </p>
      <div class="flex flex-col sm:flex-row justify-center gap-4">
        <a href="/kinraidee"
          ><button
            class="px-10 py-5 rounded-2xl font-black text-xl bg-secondary text-white shadow-xl shadow-secondary/20 hover:scale-105 active:scale-95 transition-all"
          >
            เริ่มต้นใช้งานเลย
          </button>
        </a>
      </div>
    </div>
  </section>
</template>
