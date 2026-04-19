<template>
  <div class="bg-white text-[#111111] min-h-screen font-sans selection:bg-secondary selection:text-white overflow-x-hidden">
    
    <section class="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-50 via-white to-white z-0"></div>
      <div class="absolute top-1/4 left-1/4 w-[30vw] h-[30vw] bg-secondary/5 blur-[120px] rounded-full"></div>
      <div class="absolute bottom-1/4 right-1/4 w-[40vw] h-[40vw] bg-red-600/5 blur-[150px] rounded-full"></div>

      <div class="relative z-10 text-center max-w-4xl mx-auto px-6">
        <span class="inline-block py-1 px-3 rounded-full bg-secondary/5 border border-secondary/10 text-secondary text-sm font-bold tracking-widest uppercase mb-6 backdrop-blur-sm">
          The Ultimate Food Assistant
        </span>
        <h1 class="text-6xl md:text-8xl font-black leading-tight mb-6 tracking-tight">
          จบปัญหาโลกแตก<br />
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-secondary">
            "วันนี้กินอะไรดี?"
          </span>
        </h1>
        <p class="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
          แอปพลิเคชันที่ช่วยคุณตัดสินใจมื้ออาหารใน 3 วินาที ค้นหาร้านเด็ดใกล้ตัว และจัดการวัตถุดิบในตู้เย็นเพื่อรังสรรค์เมนูสุดพิเศษของคุณเอง
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          
          <button class="px-8 py-4 rounded-full font-bold text-lg border border-secondary/20 hover:bg-secondary/5 transition-colors flex items-center justify-center gap-2">
            ดูฟีเจอร์ทั้งหมด <span class="text-xl">↓</span>
          </button>
        </div>
      </div>
    </section>

    <section class="max-w-7xl mx-auto px-6 lg:px-12 py-24 space-y-32">
      
      <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        <div class="w-full lg:w-1/2 order-2 lg:order-1 relative group">
          <div class="absolute inset-0 bg-secondary/10 blur-[50px] rounded-full group-hover:bg-secondary/20 transition-colors duration-500"></div>
          <img :src="kinraidee" alt="Random Food" class="relative z-10 rounded-3xl shadow-xl border border-gray-100 object-cover w-full" />
          <div class="absolute -bottom-6 -right-6 bg-white border border-gray-100 p-4 rounded-2xl shadow-xl z-20 flex items-center gap-3">
            <div class="bg-secondary/10 p-2 rounded-lg text-secondary">☪️</div>
            <div>
              <p class="text-xs text-gray-400 font-bold uppercase">Filter Option</p>
              <p class="font-bold text-slate-900">รองรับฮาลาล & มังสวิรัติ</p>
            </div>
          </div>
        </div>
        <div class="w-full lg:w-1/2 order-1 lg:order-2">
          <span class="text-secondary font-black tracking-widest uppercase text-sm">Feature 01</span>
          <h2 class="text-4xl md:text-5xl font-bold mt-4 mb-6">ระบบสุ่มเมนู<br/>"กินไรดี"</h2>
          <p class="text-slate-600 text-lg leading-relaxed mb-8">
            คิดไม่ออกบอกเรา! สุ่มเมนูอาหารทันใจโดยไม่ต้องอิงวัตถุดิบในตู้เย็น เหมาะสำหรับวันที่เร่งรีบ พร้อมระบบคัดกรอง (Filter) ที่ปรับแต่งได้ตามใจคุณ
          </p>
          <ul class="space-y-4 mb-8">
            <li class="flex items-center gap-3 text-slate-600">
              <svg class="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
              สุ่มอาหารอย่างรวดเร็ว พร้อมแอนิเมชันสวยงาม
            </li>
            <li class="flex items-center gap-3 text-slate-600">
              <svg class="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
              ฟิลเตอร์แยกประเภท (เช่น Halal, No Meat)
            </li>
          </ul>
          <a href="/kinraidee" class="group inline-flex items-center gap-2 bg-secondary text-white px-8 py-3.5 rounded-full font-bold text-lg hover:bg-red-600 transition-all shadow-[0_0_20px_rgba(238,27,36,0.3)] hover:shadow-[0_0_30px_rgba(238,27,36,0.5)]">
            ไปที่ระบบกินไรดี
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </a>
        </div>
      </div>

      <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        <div class="w-full lg:w-1/2">
          <span class="text-secondary font-black tracking-widest uppercase text-sm">Feature 02</span>
          <h2 class="text-4xl md:text-5xl font-bold mt-4 mb-6">ระบบบเเนะนำร้านอาหาร<br/>"ร้านอาหารใกล้ฉัน"</h2>
          <p class="text-slate-600 text-lg leading-relaxed mb-8">
            สุ่มเมนูได้แล้ว ไม่อยากทำเอง? ระบบจะพาคุณไปค้นหาร้านอาหารที่เสิร์ฟเมนูนั้นทันที นำเสนอข้อมูลที่ดูง่าย สบายตา
          </p>
          <ul class="space-y-4 mb-8">
            <li class="flex items-center gap-3 text-slate-600">
              <svg class="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
              เชื่อมต่อโดยตรงจากผลลัพธ์ของ "กินไรดี"
            </li>
            <li class="flex items-center gap-3 text-slate-600">
              <svg class="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
              ปรับรัศมีค้นหาได้ตามใจ (เช่น 500 เมตร, 2 กิโลเมตร)
            </li>
          </ul>
          <a href="/restaurants" class="group inline-flex items-center gap-2 bg-red-600 text-white px-8 py-3.5 rounded-full font-bold text-lg hover:bg-red-500 transition-all shadow-[0_0_20px_rgba(220,38,38,0.3)] hover:shadow-[0_0_30px_rgba(220,38,38,0.5)]">
            ค้นหาร้านอาหารใกล้ฉัน
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </a>
        </div>
        <div class="w-full lg:w-1/2 relative group">
          <div class="absolute inset-0 bg-secondary/10 blur-[50px] rounded-full group-hover:bg-secondary/20 transition-colors duration-500"></div>
          <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80" alt="Restaurant Near Me" class="relative z-10 rounded-3xl shadow-xl border border-gray-100 object-cover h-[500px] w-full" />
          <div class="absolute top-10 -left-6 bg-white border border-gray-100 p-3 rounded-2xl shadow-xl z-20 flex items-center gap-3">
            <div class="bg-secondary/20 p-2 rounded-full text-secondary">📍</div>
            <p class="font-bold text-slate-900 text-sm">พบ 15 ร้านในระยะ 1 กม.</p>
          </div>
        </div>
      </div>

      <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        <div class="w-full lg:w-1/2 order-2 lg:order-1 relative group">
          <div class="absolute inset-0 bg-secondary/10 blur-[50px] rounded-full group-hover:bg-secondary/20 transition-colors duration-500"></div>
          <img src="https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?auto=format&fit=crop&w=1000&q=80" alt="Fridge Management" class="relative z-10 rounded-3xl shadow-xl border border-gray-100 object-cover h-[500px] w-full" />
          
          <div class="absolute bottom-10 -right-6 bg-white/95 backdrop-blur border border-gray-100 p-4 rounded-2xl shadow-2xl z-20 w-64">
             <div class="flex justify-between items-center mb-3">
               <span class="font-bold text-sm text-slate-900">สถานะวัตถุดิบ</span>
             </div>
             <div class="space-y-2">
               <div class="flex justify-between items-center text-xs p-2 bg-red-50 border border-red-100 rounded-lg">
                 <span class="text-slate-800">เนื้อหมู</span>
                 <span class="text-red-600 font-bold">หมดอายุวันนี้!</span>
               </div>
               <div class="flex justify-between items-center text-xs p-2 bg-orange-50 border border-orange-100 rounded-lg">
                 <span class="text-slate-800">ไข่ไก่</span>
                 <span class="text-orange-600 font-bold">เหลือ 3 วัน</span>
               </div>
             </div>
          </div>
        </div>
        <div class="w-full lg:w-1/2 order-1 lg:order-2">
          <span class="text-secondary font-black tracking-widest uppercase text-sm">Feature 03</span>
          <h2 class="text-4xl md:text-5xl font-bold mt-4 mb-6">จัดการวัตถุดิบ<br/>"ระบบตู้เย็น"</h2>
          <p class="text-slate-600 text-lg leading-relaxed mb-8">
            เปลี่ยนตู้เย็นที่ยุ่งเหยิงให้มีระเบียบยิ่งขึ้น บันทึกวัตถุดิบ ระบุวันหมดอายุ พร้อมระบบแจ้งเตือนด้วยแถบสี เพื่อลดขยะอาหาร หรือ Food Waste
          </p>
          <ul class="space-y-4 mb-8 text-slate-700">
            <li class="flex items-center gap-3">
              <svg class="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
              เพิ่ม / ลบ และจัดการวัตถุดิบได้อย่างอิสระ
            </li>
            <li class="flex items-center gap-3">
              <svg class="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
              เช็คสถานะความสดใหม่ผ่านระบบ Color Code
            </li>
          </ul>
          <a href="/myfridge" class="group inline-flex items-center gap-2 bg-secondary text-white px-8 py-3.5 rounded-full font-bold text-lg hover:bg-red-600 transition-all shadow-[0_0_20px_rgba(238,27,36,0.3)] hover:shadow-[0_0_30px_rgba(238,27,36,0.5)]">
            จัดการตู้เย็นของคุณ
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </a>
        </div>
      </div>

      <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        <div class="w-full lg:w-1/2">
          <span class="text-secondary font-black tracking-widest uppercase text-sm">Feature 04</span>
          <h2 class="text-4xl md:text-5xl font-bold mt-4 mb-6">แนะนำสูตรอาหาร<br/>"ทำไรดี"</h2>
          <p class="text-slate-600 text-lg leading-relaxed mb-8">
            ผสานการทำงานกับ "ระบบตู้เย็น" เพื่อเสนอเมนูที่คุณสามารถทำได้ทันที ช่วยบอกระดับความพร้อมของวัตถุดิบ และให้คุณจัดเก็บสูตรลับเฉพาะของคุณเอง
          </p>
          <div class="grid grid-cols-2 gap-4 mb-6">
            <div class="bg-slate-50 border border-slate-100 p-4 rounded-2xl">
              <div class="text-green-600 font-bold mb-1">Perfect Match 🌟</div>
              <p class="text-xs text-slate-500">วัตถุดิบครบ ทำได้ทันที 100%</p>
            </div>
            <div class="bg-slate-50 border border-slate-100 p-4 rounded-2xl">
              <div class="text-orange-600 font-bold mb-1">Almost There 🛒</div>
              <p class="text-xs text-slate-500">ขาดวัตถุดิบเพียง 1-2 ชิ้น</p>
            </div>
          </div>
          <ul class="space-y-4 mb-8 text-slate-700">
            <li class="flex items-center gap-3">
              <svg class="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
              ระบบ เพิ่ม แก้ไข ลบ (CRUD) สูตรอาหารส่วนตัว
            </li>
          </ul>
          <a href="/tumraidee" class="group inline-flex items-center gap-2 bg-secondary text-white px-8 py-3.5 rounded-full font-bold text-lg hover:bg-red-600 transition-all shadow-[0_0_20px_rgba(238,27,36,0.3)] hover:shadow-[0_0_30px_rgba(238,27,36,0.5)]">
            ค้นหาสูตรอาหาร
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </a>
        </div>
        <div class="w-full lg:w-1/2 relative group">
          <div class="absolute inset-0 bg-secondary/10 blur-[50px] rounded-full group-hover:bg-secondary/20 transition-colors duration-500"></div>
          <img src="https://www.njlifestylemag.com/content/images/size/w1304/2023/12/AdobeStock_267334945.jpeg" alt="Cooking Recipe" class="relative z-10 rounded-3xl shadow-xl border border-gray-100 object-cover h-[500px] w-full" />
        </div>
      </div>

    </section>

    <section class="py-24 relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-t from-red-50 to-transparent z-0"></div>
      <div class="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 class="text-4xl md:text-5xl font-bold mb-6">พร้อมที่จะเปลี่ยนมื้ออาหารของคุณแล้วหรือยัง?</h2>
        <p class="text-slate-500 mb-10 text-lg">เริ่มต้นสัมผัสประสบการณ์การใช้งาน 4 ฟีเจอร์หลักได้แล้ววันนี้</p>
        <a href="/kinraidee" class="inline-block">
          <button class="bg-secondary text-white px-10 py-5 rounded-full font-black text-xl hover:scale-105 transition-transform shadow-[0_0_40px_rgba(238,27,36,0.3)]">
            ลองสุ่มอาหารเลย!
          </button>
        </a>
      </div>
    </section>

  </div>
</template>

<script setup>
import kinraidee from "../assets/kinraidee.png"
</script>

<style scoped>
/* เลื่อนหน้าจอแบบสมูท */
html {
  scroll-behavior: smooth;
}
</style>