# KinRaiDee 

**Group Assignment #1: Tailwind CSS Term Project**
**Project Title:** Food Discovery & Recommendation
**Product Title:** KinRaiDee
**Theme:** Food and Cooking

---

##  (Team Members)

| Student ID | Name | Role |
| :--- | :--- | :--- |
| **67130500010** | Natthasith Boonheng | Developer |
| **67130500117** | Supalerk Kamolnetr | Developer |
| **67130500074** | Thitirat Srithomya | Developer |
| **67130500028** | Phakaphol Dherachaisuphakij | Developer |

---

## 📝 เกี่ยวกับโปรเจกต์ (Project Overview)

**KinRaiDee** คือ Web Application ที่ช่วยแก้ปัญหาโลกแตกในชีวิตประจำวันอย่าง **"วันนี้กินอะไรดี?"** และ **"มีของในตู้เย็น ทำอะไรได้บ้าง?"**

### ปัญหาที่พบ (Pain Points)
จากการ Research พบว่าผู้คนจำนวนมากประสบปัญหาในการตัดสินใจเลือกมื้ออาหาร โดยเห็นได้จาก Hashtag ใน Social Media เช่น **#กินไรดี (4.6 แสนโพสต์)** และ **#กินอะไรดี (162K โพสต์)** แม้ว่าผู้ใช้จะมีวัตถุดิบในตู้เย็นอยู่แล้ว แต่ก็มักนึกเมนูไม่ออก ส่งผลให้เสียเวลาและเกิดการย้ำคิดย้ำทำ

### เป้าหมาย (Goals)
1.  **Reduce Decision Fatigue:** ลดปัญหาการคิดเมนูไม่ออก
2.  **Optimize Ingredients:** ช่วยให้ผู้ใช้ใช้วัตถุดิบที่มีอยู่ได้อย่างคุ้มค่า
3.  **Systematic Organization:** จัดการสูตรอาหารส่วนตัวได้อย่างเป็นระบบ

### กลุ่มเป้าหมาย (Target Audience)
* คนที่ทำอาหารทานเอง หรือผู้อยู่อาศัยในหอพัก/คอนโดมิเนียม
* บุคคลทั่วไปที่ประสบปัญหาในการเลือกเมนูอาหาร

---

## Features

ระบบประกอบด้วย 4 ฟีเจอร์หลักที่ทำงานเชื่อมโยงกัน:

### 🎲 F1: กินไรดี (Meal Randomizer)
* **Concept:** ระบบสุ่มเมนูอาหารสำหรับผู้ที่ต้องการไอเดียเร่งด่วน โดยไม่อิงกับวัตถุดิบในตู้เย็น
* **Functionality:**
    * สุ่มเมนูอาหารเพื่อสร้างแรงบันดาลใจ
    * **Filter:** กรองประเภทอาหารได้ (เช่น อาหารฮาลาล)
* **File:** `random.html`

### 📍 F2: ร้านอาหารใกล้ฉัน (Near Me Restaurant)
* **Concept:** ทางเลือกสำหรับผู้ที่ไม่ต้องการทำอาหารเอง โดยทำงานร่วมกับฟีเจอร์ "กินไรดี"
* **Functionality:**
    * แสดงร้านอาหารใกล้ตำแหน่งผู้ใช้
    * **Radius Adjustment:** ปรับรัศมีระยะทางได้
    * แสดงข้อมูลร้านในรูปแบบ Card ที่เข้าใจง่าย
* **File:** `nearby.html`

### 🥦 F3: ระบบตู้เย็น (Smart Fridge System)
* **Concept:** ระบบจัดการ Stock วัตถุดิบส่วนตัว เพื่อนำไปประมวลผลเมนูอาหาร
* **Functionality:**
    * เพิ่ม/ลบ วัตถุดิบในตู้เย็น
    * **Expiry Check:** ระบุวันหมดอายุและแสดงสถานะด้วยสี (Visual Indicators) เพื่อแจ้งเตือนก่อนของเสีย
* **File:** `myfridge.html`

### 🍳 F4: ทำไรดี (Smart Recipe Recommendation)
* **Concept:** ระบบแนะนำสูตรอาหารโดยอิงข้อมูลจาก **F3 (ระบบตู้เย็น)**
* **Functionality:**
    * **Perfect Match:** แนะนำเมนูที่มีวัตถุดิบครบ
    * **Almost There:** แนะนำเมนูที่ขาดวัตถุดิบเพียง 1-2 อย่าง
    * จัดการสูตรอาหารส่วนตัว (เพิ่ม/แก้ไข/ลบ) และมีสูตร Default ให้
* **File:** `tumRaidee.html`

---

## 🛠️ เครื่องมือและการพัฒนา (Software Development Plan)

* **Approach:** Agile Model
* **Frontend Framework:** Tailwind CSS (CDN Version for Prototyping)
* **Structure:** HTML5 Semantic Elements
* **Icons:** Google Material Symbols
* **Fonts:** Plus Jakarta Sans & Noto Sans Thai

---

## 📂 โครงสร้างไฟล์ (File Structure)

```text
KinRaiDee/
