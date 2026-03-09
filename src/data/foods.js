const foods = [
  // --- หมวดอาหารไทย & สตรีทฟู้ด (1-20) ---
  {
    id: 1,
    name: "ข้าวหมกไก่",
    halal: true,
    vegetarian: false,
    noMeat: false,
    imageUrl: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=600&q=80",
    detail: "หอมกลิ่นเครื่องเทศ ไก่นุ่มละลายในปาก",
    restaurants: [
      { name: "ร้านอาลี", star: 4, distance: 0.8 },
      { name: "ข้าวหมกไก่ยะลา", star: 4.5, distance: 1.2 }
    ]
  },
  {
    id: 2,
    name: "กะเพราหมูกรอบ",
    halal: false,
    vegetarian: false,
    noMeat: false,
    imageUrl: "https://images.unsplash.com/photo-1626804475297-41607ea0d5eb?auto=format&fit=crop&w=600&q=80",
    detail: "หมูกรอบสะท้านฟ้า รสชาติเผ็ดร้อนทะลวงไส้",
    restaurants: [
      { name: "ร้านป้าสั่งลุย", star: 5, distance: 0.5 },
      { name: "ตามสั่งลุงชัย", star: 4, distance: 1.1 }
    ]
  },
  {
    id: 3,
    name: "ต้มยำกุ้งน้ำข้น",
    halal: true,
    vegetarian: false,
    noMeat: false,
    imageUrl: "https://images.unsplash.com/photo-1559314809-0d155014e29e?auto=format&fit=crop&w=600&q=80",
    detail: "กุ้งตัวโตในน้ำต้มยำรสจัดจ้านถึงเครื่อง",
    restaurants: [
      { name: "ซีฟู้ดสเตชั่น", star: 5, distance: 2.1 },
      { name: "ต้มยำกุ้งแม่กลอง", star: 4.5, distance: 3.5 }
    ]
  },
  {
    id: 4,
    name: "ผัดไทยกุ้งสด",
    halal: true,
    vegetarian: false,
    noMeat: false,
    imageUrl: "https://images.unsplash.com/photo-1559314809-0d155014e29e?auto=format&fit=crop&w=600&q=80",
    detail: "เส้นจันท์เหนียวนุ่ม ผัดซอสสูตรโบราณ",
    restaurants: [
      { name: "แม่จิตรผัดไทย", star: 4, distance: 1.5 },
      { name: "ผัดไทยเจริญนคร", star: 4.5, distance: 2.8 }
    ]
  },
  {
    id: 5,
    name: "ส้มตำไทยไข่เค็ม",
    halal: true,
    vegetarian: false,
    noMeat: true,
    imageUrl: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80",
    detail: "มะละกอกรอบ รสเปรี้ยวหวานลงตัว",
    restaurants: [
      { name: "แซ่บอีหลี", star: 4, distance: 0.9 },
      { name: "ส้มตำป้าณี", star: 4.5, distance: 1.6 }
    ]
  },
  {
    id: 6,
    name: "คอหมูย่างจิ้มแจ่ว",
    halal: false,
    vegetarian: false,
    noMeat: false,
    imageUrl: "https://images.unsplash.com/photo-1626804475297-41607ea0d5eb?auto=format&fit=crop&w=600&q=80",
    detail: "หมูหมักนุ่มย่างเตาถ่าน หอมกลิ่นข้าวคั่ว",
    restaurants: [
      { name: "แซ่บอีหลี", star: 5, distance: 0.9 },
      { name: "ย่างเนยกระทะร้อน", star: 4, distance: 2.0 }
    ]
  },
  {
    id: 7,
    name: "ข้าวมันไก่ตอน",
    halal: false,
    vegetarian: false,
    noMeat: false,
    imageUrl: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=600&q=80",
    detail: "ข้าวเรียงเม็ดสวย ไก่เนื้อฉ่ำ น้ำจิ้มเด็ด",
    restaurants: [
      { name: "เฮียตี๋ข้าวมันไก่", star: 4, distance: 1.2 },
      { name: "ข้าวมันไก่ประตูน้ำ", star: 4.5, distance: 4.0 }
    ]
  },
  {
    id: 8,
    name: "ก๋วยเตี๋ยวเรือเนื้อตุ๋น",
    halal: true,
    vegetarian: false,
    noMeat: false,
    imageUrl: "https://images.unsplash.com/photo-1559314809-0d155014e29e?auto=format&fit=crop&w=600&q=80",
    detail: "น้ำตกเข้มข้น เนื้อตุ๋นเปื่อยแทบไม่ต้องเคี้ยว",
    restaurants: [
      { name: "เตี๋ยวเรืออยุธยา", star: 5, distance: 1.8 },
      { name: "ก๋วยเตี๋ยวเรือลุงจิตร", star: 4, distance: 2.5 }
    ]
  },
  {
    id: 9,
    name: "ข้าวซอยไก่",
    halal: true,
    vegetarian: false,
    noMeat: false,
    imageUrl: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=600&q=80",
    detail: "น้ำแกงกะทิเข้มข้น เส้นกรอบอร่อย",
    restaurants: [
      { name: "เฮือนชาวเหนือ", star: 4, distance: 3.2 },
      { name: "ข้าวซอยเชียงใหม่", star: 4.5, distance: 4.1 }
    ]
  },
  {
    id: 10,
    name: "มัสมั่นไก่",
    halal: true,
    vegetarian: false,
    noMeat: false,
    imageUrl: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=600&q=80",
    detail: "เครื่องแกงหอมกรุ่น มันฝรั่งนุ่มอร่อย",
    restaurants: [
      { name: "ร้านอาลี", star: 5, distance: 0.8 },
      { name: "ครัวไทยเดิม", star: 4, distance: 1.5 }
    ]
  },
  {
    id: 11,
    name: "แกงเขียวหวานเนื้อ",
    halal: true,
    vegetarian: false,
    noMeat: false,
    imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80",
    detail: "รสชาติไทยแท้ ทานคู่กับขนมจีนหรือข้าวสวยร้อนๆ",
    restaurants: [
      { name: "ครัวริมน้ำ", star: 4, distance: 2.2 },
      { name: "แกงไทยแม่สมบุญ", star: 4.5, distance: 3.0 }
    ]
  },
  {
    id: 12,
    name: "ยำวุ้นเส้นทะเล",
    halal: true,
    vegetarian: false,
    noMeat: false,
    imageUrl: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80",
    detail: "เครื่องแน่น รสจัดจ้าน เปรี้ยวเผ็ดกำลังดี",
    restaurants: [
      { name: "ซีฟู้ดสเตชั่น", star: 4, distance: 2.1 },
      { name: "ยำแซ่บสะดุ้ง", star: 4, distance: 1.3 }
    ]
  },
  {
    id: 13,
    name: "ผัดซีอิ๊วหมู",
    halal: false,
    vegetarian: false,
    noMeat: false,
    imageUrl: "https://images.unsplash.com/photo-1559314809-0d155014e29e?auto=format&fit=crop&w=600&q=80",
    detail: "เส้นใหญ่ผัดหอมกลิ่นคั่วกระทะ",
    restaurants: [
      { name: "เจ๊ไฝผัดกระทะร้อน", star: 3, distance: 1.0 },
      { name: "ราดหน้ายอดผัก", star: 4, distance: 1.8 }
    ]
  },
  {
    id: 14,
    name: "ข้าวขาหมู",
    halal: false,
    vegetarian: false,
    noMeat: false,
    imageUrl: "https://images.unsplash.com/photo-1626804475297-41607ea0d5eb?auto=format&fit=crop&w=600&q=80",
    detail: "เนื้อหนังนุ่มละมุน น้ำพะโล้รสกลมกล่อม",
    restaurants: [
      { name: "ขาหมูตรอกซุง", star: 5, distance: 3.5 },
      { name: "ขาหมูเจริญกรุง", star: 4.5, distance: 4.2 }
    ]
  },
  {
    id: 15,
    name: "ซุปหางวัว",
    halal: true,
    vegetarian: false,
    noMeat: false,
    imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80",
    detail: "ซุปรสเปรี้ยวเผ็ด ซดคล่องคอ",
    restaurants: [
      { name: "ร้านอาลี", star: 4, distance: 0.8 },
      { name: "ซุปหางวัวอิสลาม", star: 4.5, distance: 2.5 }
    ]
  },
  {
    id: 16,
    name: "ข้าวผัดปู",
    halal: true,
    vegetarian: false,
    noMeat: false,
    imageUrl: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=600&q=80",
    detail: "ข้าวผัดร่วนๆ เนื้อปูเน้นๆ กลิ่นหอมกระทะ",
    restaurants: [
      { name: "ครัวริมน้ำ", star: 4, distance: 2.2 },
      { name: "ข้าวผัดปูเมืองทอง", star: 5, distance: 5.0 }
    ]
  },
  {
    id: 17,
    name: "ปูผัดผงกะหรี่",
    halal: true,
    vegetarian: false,
    noMeat: false,
    imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80",
    detail: "เครื่องแกงเข้มข้น ไข่ข้นละมุนลิ้น",
    restaurants: [
      { name: "ซีฟู้ดสเตชั่น", star: 5, distance: 2.1 },
      { name: "สมบูรณ์โภชนา", star: 4.5, distance: 4.8 }
    ]
  },
  {
    id: 18,
    name: "หอยทอดกรอบ",
    halal: true,
    vegetarian: false,
    noMeat: false,
    imageUrl: "https://images.unsplash.com/photo-1559314809-0d155014e29e?auto=format&fit=crop&w=600&q=80",
    detail: "แป้งกรอบนอกนุ่มใน หอยแมลงภู่สดๆ",
    restaurants: [
      { name: "เจ๊ไฝผัดกระทะร้อน", star: 4, distance: 1.0 },
      { name: "หอยทอดชาวเล", star: 4, distance: 2.7 }
    ]
  },
  {
    id: 19,
    name: "ข้าวหน้าเป็ดย่าง",
    halal: false,
    vegetarian: false,
    noMeat: false,
    imageUrl: "https://images.unsplash.com/photo-1626804475297-41607ea0d5eb?auto=format&fit=crop&w=600&q=80",
    detail: "เป็ดหนังกรอบ เนื้อนุ่ม ราดน้ำซอสหวานเค็ม",
    restaurants: [
      { name: "เป็ดย่างรสเด็ด", star: 4, distance: 1.4 },
      { name: "เป็ดย่างโฟร์ซีซั่น", star: 4.5, distance: 6.0 }
    ]
  },
  {
    id: 20,
    name: "ต้มข่าไก่",
    halal: true,
    vegetarian: false,
    noMeat: false,
    imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80",
    detail: "กะทิหอมมัน ตัดเปรี้ยวด้วยมะนาวสด",
    restaurants: [
      { name: "ครัวริมน้ำ", star: 4, distance: 2.2 },
      { name: "เรือนไทยอาหารป่า", star: 4, distance: 3.1 }
    ]
  },

  // --- หมวดสุขภาพ & วีแกน/เจ (21-40) ---
  {
    id: 21,
    name: "ผัดไทยเจ",
    halal: true,
    vegetarian: true,
    noMeat: true,
    imageUrl: "https://images.unsplash.com/photo-1559314809-0d155014e29e?auto=format&fit=crop&w=600&q=80",
    detail: "เส้นเหนียวนุ่ม ครบเครื่องเรื่องเจ อร่อยลงตัว",
    restaurants: [
      { name: "ร้านเจ", star: 4, distance: 1.0 },
      { name: "อาหารเจช้างเผือก", star: 4.5, distance: 2.2 }
    ]
  },
  {
    id: 22,
    name: "สลัดเพื่อสุขภาพ",
    halal: true,
    vegetarian: true,
    noMeat: true,
    imageUrl: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80",
    detail: "ผักออร์แกนิกกรอบๆ พร้อมน้ำสลัดสูตรพิเศษ",
    restaurants: [
      { name: "Healthy Bowl", star: 4, distance: 0.7 },
      { name: "Salad Factory", star: 4.5, distance: 3.0 }
    ]
  },
  {
    id: 23,
    name: "เต้าหู้ผัดเปรี้ยวหวาน",
    halal: true,
    vegetarian: true,
    noMeat: true,
    imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80",
    detail: "เต้าหู้ทอดกรอบ คลุกเคล้าซอสเปรี้ยวหวาน",
    restaurants: [
      { name: "ร้านเจ", star: 3, distance: 1.0 },
      { name: "โรงอาหารมังสวิรัติ", star: 4, distance: 1.8 }
    ]
  },
  {
    id: 24,
    name: "ยำเห็ดรวมเจ",
    halal: true,
    vegetarian: true,
    noMeat: true,
    imageUrl: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80",
    detail: "เห็ด 3 อย่างยำรสแซ่บ แคลอรี่ต่ำ",
    restaurants: [
      { name: "Healthy Bowl", star: 4, distance: 0.7 },
      { name: "Vegan Heaven", star: 4.5, distance: 2.4 }
    ]
  },
  {
    id: 25,
    name: "กะเพราโปรตีนเกษตร",
    halal: true,
    vegetarian: true,
    noMeat: true,
    imageUrl: "https://images.unsplash.com/photo-1626804475297-41607ea0d5eb?auto=format&fit=crop&w=600&q=80",
    detail: "โปรตีนเกษตรเนื้อหนึบ ผัดกะเพราหอมๆ",
    restaurants: [
      { name: "ร้านเจ", star: 4, distance: 1.0 },
      { name: "เจริญกรุงอาหารเจ", star: 4, distance: 3.1 }
    ]
  },
  {
    id: 26,
    name: "สมูทตี้อาซาอิโบลว์",
    halal: true,
    vegetarian: true,
    noMeat: true,
    imageUrl: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=600&q=80",
    detail: "ซูเปอร์ฟู้ดเต็มคำ ท็อปปิ้งผลไม้สดแน่นๆ",
    restaurants: [
      { name: "Fresh Juice Bar", star: 5, distance: 1.2 },
      { name: "Acai Story", star: 4.5, distance: 2.5 }
    ]
  },
  {
    id: 27,
    name: "ต้มจับฉ่ายเจ",
    halal: true,
    vegetarian: true,
    noMeat: true,
    imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80",
    detail: "ผักตุ๋นจนเปื่อย รสชาติกลมกล่อมทานง่าย",
    restaurants: [
      { name: "ร้านเจ", star: 3, distance: 1.0 },
      { name: "ข้าวแกงเจเจ๊หมวย", star: 4, distance: 1.5 }
    ]
  },
  {
    id: 28,
    name: "ปอเปี๊ยะทอดเจ",
    halal: true,
    vegetarian: true,
    noMeat: true,
    imageUrl: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80",
    detail: "ไส้วุ้นเส้นและผัก แป้งกรอบฟูจิ้มน้ำจิ้มบ๊วย",
    restaurants: [
      { name: "เจริญกรุงติ่มซำ", star: 4, distance: 2.8 },
      { name: "ติ่มซำวังหลัง", star: 4.5, distance: 4.0 }
    ]
  },
  {
    id: 29,
    name: "ควินัวสลัดอกไก่",
    halal: true,
    vegetarian: false,
    noMeat: false,
    imageUrl: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80",
    detail: "คาร์บดี โปรตีนสูง เหมาะกับคนคุมน้ำหนัก",
    restaurants: [
      { name: "Healthy Bowl", star: 5, distance: 0.7 },
      { name: "Fit Food", star: 4.5, distance: 1.8 }
    ]
  },
  {
    id: 30,
    name: "ลาบเต้าหู้",
    halal: true,
    vegetarian: true,
    noMeat: true,
    imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80",
    detail: "เต้าหู้ออร์แกนิกคลุกเครื่องลาบอีสาน",
    restaurants: [
      { name: "แซ่บอีหลี", star: 4, distance: 0.9 },
      { name: "ครัวสุขภาพ", star: 4, distance: 2.2 }
    ]
  },
  {
    id: 31,
    name: "แกงจืดเต้าหู้สาหร่ายเจ",
    halal: true,
    vegetarian: true,
    noMeat: true,
    imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80",
    detail: "น้ำซุปใส หอมกลิ่นสาหร่ายทะเล",
    restaurants: [
      { name: "ร้านเจ", star: 3, distance: 1.0 },
      { name: "เจ๊น้อยอาหารเจ", star: 4, distance: 1.4 }
    ]
  },
  {
    id: 32,
    name: "ข้าวกล้องผัดธัญพืช",
    halal: true,
    vegetarian: true,
    noMeat: true,
    imageUrl: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=600&q=80",
    detail: "อุดมไปด้วยกากใยอาหารจากธัญพืช 5 ชนิด",
    restaurants: [
      { name: "Healthy Bowl", star: 4, distance: 0.7 },
      { name: "Organic Farm", star: 4.5, distance: 3.5 }
    ]
  },
  {
    id: 33,
    name: "เบอร์เกอร์พืช (Plant-based)",
    halal: true,
    vegetarian: true,
    noMeat: true,
    imageUrl: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80",
    detail: "เนื้อเบอร์เกอร์จากพืช อร่อยเหมือนเนื้อจริง",
    restaurants: [
      { name: "Vegan Burger Co.", star: 5, distance: 2.0 },
      { name: "Plantiful", star: 4.5, distance: 3.2 }
    ]
  },
  {
    id: 34,
    name: "ซุปฟักทอง",
    halal: true,
    vegetarian: true,
    noMeat: true,
    imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80",
    detail: "ซุปครีมฟักทองเนื้อเนียน หอมมัน",
    restaurants: [
      { name: "Western Grill", star: 4, distance: 3.5 },
      { name: "Soup & Bread", star: 4, distance: 1.5 }
    ]
  },
  {
    id: 35,
    name: "สลัดโรลลุยสวน",
    halal: true,
    vegetarian: true,
    noMeat: true,
    imageUrl: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80",
    detail: "แป้งบางใส ผักแน่น จิ้มน้ำจิ้มซีฟู้ดเจ",
    restaurants: [
      { name: "Healthy Bowl", star: 4, distance: 0.7 },
      { name: "ลุยสวนคุณยาย", star: 4.5, distance: 1.1 }
    ]
  },
  {
    id: 36,
    name: "ฟักทองผัดไข่",
    halal: true,
    vegetarian: true,
    noMeat: true,
    imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80",
    detail: "ฟักทองหวานมัน ผัดไข่หอมๆ",
    restaurants: [
      { name: "ข้าวแกงแม่สม", star: 4, distance: 0.5 },
      { name: "ครัวคุณต๋อย", star: 4, distance: 1.9 }
    ]
  },
  {
    id: 37,
    name: "เส้นหมี่ผัดกระเฉดเจ",
    halal: true,
    vegetarian: true,
    noMeat: true,
    imageUrl: "https://images.unsplash.com/photo-1559314809-0d155014e29e?auto=format&fit=crop&w=600&q=80",
    detail: "ผักกระเฉดยอดอ่อน ผัดไฟแรงหอมๆ",
    restaurants: [
      { name: "ร้านเจ", star: 4, distance: 1.0 },
      { name: "เจ๊หน่อยตามสั่ง", star: 4, distance: 2.1 }
    ]
  },
  {
    id: 38,
    name: "น้ำเต้าหู้ทรงเครื่อง",
    halal: true,
    vegetarian: true,
    noMeat: true,
    imageUrl: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=600&q=80",
    detail: "น้ำเต้าหู้คั้นสด เครื่องแน่นเต็มถ้วย",
    restaurants: [
      { name: "เต้าหู้ตี๋น้อย", star: 4, distance: 1.3 },
      { name: "น้ำเต้าหู้เยาวราช", star: 4.5, distance: 4.5 }
    ]
  },
  {
    id: 39,
    name: "สลัดอะโวคาโดไข่ต้ม",
    halal: true,
    vegetarian: true,
    noMeat: true,
    imageUrl: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80",
    detail: "ไขมันดีจากอะโวคาโด ทานคู่ไข่ต้มยางมะตูม",
    restaurants: [
      { name: "Healthy Bowl", star: 5, distance: 0.7 },
      { name: "Green Space", star: 4.5, distance: 2.6 }
    ]
  },
  {
    id: 40,
    name: "แกงส้มชะอมไข่เจ",
    halal: true,
    vegetarian: true,
    noMeat: true,
    imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80",
    detail: "น้ำแกงส้มรสเด็ด ใช้ไข่เจียวเจจากเต้าหู้",
    restaurants: [
      { name: "ร้านเจ", star: 4, distance: 1.0 },
      { name: "มังสวิรัติร่มไม้", star: 4, distance: 3.3 }
    ]
  },

  // --- หมวดอาหารญี่ปุ่น & เกาหลี (41-60) ---
  {
    id: 41,
    name: "ซูชิเซ็ตพรีเมียม",
    halal: false,
    vegetarian: false,
    noMeat: false,
    imageUrl: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=600&q=80",
    detail: "วัตถุดิบพรีเมียม สดใหม่ส่งตรงจากทะเลญี่ปุ่น",
    restaurants: [
      { name: "Sushi Station", star: 5, distance: 2.5 },
      { name: "Sushiro", star: 4.5, distance: 5.2 }
    ]
  },
  {
    id: 42,
    name: "ราเมนทงคตสึ",
    halal: false,
    vegetarian: false,
    noMeat: false,
    imageUrl: "https://images.unsplash.com/photo-1559314809-0d155014e29e?auto=format&fit=crop&w=600&q=80",
    detail: "น้ำซุปกระดูกหมูเคี่ยวนาน 12 ชม. เข้มข้นสุดๆ",
    restaurants: [
      { name: "Tokyo Ramen", star: 5, distance: 1.8 },
      { name: "Ippudo", star: 4.5, distance: 4.1 }
    ]
  },
  {
    id: 43,
    name: "ข้าวหน้าปลาไหล",
    halal: false,
    vegetarian: false,
    noMeat: false,
    imageUrl: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=600&q=80",
    detail: "ปลาไหลย่างซีอิ๊วหอมๆ บนข้าวญี่ปุ่นร้อนๆ",
    restaurants: [
      { name: "Sushi Station", star: 4, distance: 2.5 },
      { name: "Unagi Express", star: 4.5, distance: 3.4 }
    ]
  },
  {
    id: 44,
    name: "แซลมอนซาซิมิ",
    halal: true,
    vegetarian: false,
    noMeat: false,
    imageUrl: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=600&q=80",
    detail: "แซลมอนนอร์เวย์เกรดพรีเมียม ลายไขมันสวย",
    restaurants: [
      { name: "Sushi Station", star: 5, distance: 2.5 },
      { name: "Maguro", star: 4.5, distance: 6.0 }
    ]
  },
  {
    id: 45,
    name: "ทาโกะยากิ",
    halal: true,
    vegetarian: false,
    noMeat: false,
    imageUrl: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=600&q=80",
    detail: "หมึกยักษ์ชิ้นโต แป้งกรอบนอกนุ่มใน",
    restaurants: [
      { name: "Osaka Street", star: 4, distance: 1.1 },
      { name: "Gindaco", star: 4.5, distance: 3.5 }
    ]
  },
  {
    id: 46,
    name: "ข้าวแกงกะหรี่หมูทอด",
    halal: false,
    vegetarian: false,
    noMeat: false,
    imageUrl: "https://images.unsplash.com/photo-1626804475297-41607ea0d5eb?auto=format&fit=crop&w=600&q=80",
    detail: "หมูทอดทงคัตสึชิ้นหนา แกงกะหรี่เข้มข้น",
    restaurants: [
      { name: "Katsu Curry Co.", star: 4, distance: 2.0 },
      { name: "CoCo Ichibanya", star: 4.5, distance: 4.2 }
    ]
  },
  {
    id: 47,
    name: "ไก่ทอดซอสเกาหลี",
    halal: true,
    vegetarian: false,
    noMeat: false,
    imageUrl: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=600&q=80",
    detail: "ไก่ทอดกรอบเคลือบซอสโคชูจัง เผ็ดหวานลงตัว",
    restaurants: [
      { name: "Seoul Chicken", star: 5, distance: 1.5 },
      { name: "Bonchon", star: 4.5, distance: 3.8 }
    ]
  },
  {
    id: 48,
    name: "ต๊อกบกกีชีส",
    halal: true,
    vegetarian: false,
    noMeat: false,
    imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80",
    detail: "แป้งต๊อกเหนียวนุ่ม ชีสยืดๆ ฟินสุดๆ",
    restaurants: [
      { name: "Seoul Chicken", star: 4, distance: 1.5 },
      { name: "K-Street Food", star: 4, distance: 2.2 }
    ]
  },
  {
    id: 49,
    name: "หมูย่างเกาหลี (ซัมกยอบซัล)",
    halal: false,
    vegetarian: false,
    noMeat: false,
    imageUrl: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
    detail: "หมูสามชั้นย่างเกรียมๆ ทานคู่กับผักและน้ำจิ้ม",
    restaurants: [
      { name: "K-BBQ", star: 5, distance: 2.8 },
      { name: "Saemaeul", star: 4.5, distance: 5.5 }
    ]
  },
  {
    id: 50,
    name: "บิบิมบับ (ข้าวยำเกาหลี)",
    halal: true,
    vegetarian: false,
    noMeat: false,
    imageUrl: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=600&q=80",
    detail: "ข้าวยำเครื่องแน่น เสิร์ฟในชามหินร้อน",
    restaurants: [
      { name: "Seoul Chicken", star: 4, distance: 1.5 },
      { name: "Bibim House", star: 4, distance: 2.7 }
    ]
  },
  {
    id: 51,
    name: "อุด้งเทมปุระ",
    halal: true,
    vegetarian: false,
    noMeat: false,
    imageUrl: "https://images.unsplash.com/photo-1559314809-0d155014e29e?auto=format&fit=crop&w=600&q=80",
    detail: "เส้นอุด้งเหนียวนุ่ม กุ้งเทมปุระกรอบๆ",
    restaurants: [
      { name: "Tokyo Ramen", star: 4, distance: 1.8 },
      { name: "Marugame Seimen", star: 4.5, distance: 4.0 }
    ]
  },
  {
    id: 52,
    name: "ไข่ตุ๋นญี่ปุ่น (ชะวันมุชิ)",
    halal: true,
    vegetarian: false,
    noMeat: false,
    imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80",
    detail: "ไข่ตุ๋นเนื้อเนียนนุ่ม เครื่องทะเลแน่น",
    restaurants: [
      { name: "Sushi Station", star: 3, distance: 2.5 },
      { name: "Zen Japanese", star: 4, distance: 3.2 }
    ]
  },
  {
    id: 53,
    name: "ชาบู ชาบู เซ็ตเนื้อ",
    halal: false,
    vegetarian: false,
    noMeat: false,
    imageUrl: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
    detail: "เนื้อสไลด์บางแกว่งในน้ำซุปร้อนๆ",
    restaurants: [
      { name: "Shabu King", star: 5, distance: 3.1 },
      { name: "Momo Paradise", star: 5, distance: 6.5 }
    ]
  },
  {
    id: 54,
    name: "เกี๊ยวซ่าหมู",
    halal: false,
    vegetarian: false,
    noMeat: false,
    imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80",
    detail: "ทอดกระทะด้านล่างกรอบ ด้านบนนุ่ม",
    restaurants: [
      { name: "Tokyo Ramen", star: 4, distance: 1.8 },
      { name: "Kinza Gyoza", star: 4.5, distance: 2.9 }
    ]
  },
  {
    id: 55,
    name: "โอโคโนมิยากิ (พิซซ่าญี่ปุ่น)",
    halal: false,
    vegetarian: false,
    noMeat: false,
    imageUrl: "https://images.unsplash.com/photo-1565299624-9a5f188fb64e?auto=format&fit=crop&w=600&q=80",
    detail: "เครื่องแน่น ซอสฉ่ำ โรยปลาแห้งหอมๆ",
    restaurants: [
      { name: "Osaka Street", star: 4, distance: 1.1 },
      { name: "Teppan Boy", star: 4, distance: 3.4 }
    ]
  },
  {
    id: 56,
    name: "จาจังมยอน",
    halal: false,
    vegetarian: false,
    noMeat: false,
    imageUrl: "https://images.unsplash.com/photo-1559314809-0d155014e29e?auto=format&fit=crop&w=600&q=80",
    detail: "บะหมี่ซอสดำเกาหลี รสชาติเข้มข้น",
    restaurants: [
      { name: "Seoul Chicken", star: 4, distance: 1.5 },
      { name: "Banjoo BBQ", star: 4.5, distance: 4.0 }
    ]
  },
  {
    id: 57,
    name: "ซุปกิมจิเต้าหู้อ่อน",
    halal: false,
    vegetarian: false,
    noMeat: false,
    imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80",
    detail: "ซุปเผ็ดร้อน เต้าหู้นุ่มละมุน",
    restaurants: [
      { name: "Seoul Chicken", star: 4, distance: 1.5 },
      { name: "Tofu House", star: 4.5, distance: 2.8 }
    ]
  },
  {
    id: 58,
    name: "คิมบับ",
    halal: true,
    vegetarian: false,
    noMeat: false,
    imageUrl: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=600&q=80",
    detail: "ข้าวห่อสาหร่ายสไตล์เกาหลี ไส้แน่นทานง่าย",
    restaurants: [
      { name: "Seoul Chicken", star: 3, distance: 1.5 },
      { name: "K-Roll", star: 4, distance: 2.1 }
    ]
  },
  {
    id: 59,
    name: "แซลมอนดองซีอิ๊วเกาหลี",
    halal: true,
    vegetarian: false,
    noMeat: false,
    imageUrl: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=600&q=80",
    detail: "แซลมอนชิ้นโตดองซีอิ๊วหอมๆ ทานกับข้าวสาหร่าย",
    restaurants: [
      { name: "K-BBQ", star: 5, distance: 2.8 },
      { name: "โคตรยำ", star: 4.5, distance: 3.5 }
    ]
  },
  {
    id: 60,
    name: "โซบะเย็น",
    halal: true,
    vegetarian: false,
    noMeat: false,
    imageUrl: "https://images.unsplash.com/photo-1559314809-0d155014e29e?auto=format&fit=crop&w=600&q=80",
    detail: "เส้นโซบะทำมือ เสิร์ฟเย็นชื่นใจ",
    restaurants: [
      { name: "Tokyo Ramen", star: 3, distance: 1.8 },
      { name: "Soba Factory", star: 4.5, distance: 4.4 }
    ]
  },

  // --- หมวดอาหารตะวันตก (61-80) ---
  {
    id: 61,
    name: "สเต็กเนื้อริบอาย",
    halal: true,
    vegetarian: false,
    noMeat: false,
    imageUrl: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
    detail: "เนื้อออสเตรเลียย่างความสุก Medium Rare",
    restaurants: [
      { name: "Western Grill", star: 5, distance: 3.5 },
      { name: "Arno's Butcher", star: 4.5, distance: 5.8 }
    ]
  },
  {
    id: 62,
    name: "สปาเก็ตตี้คาโบนาร่า",
    halal: false,
    vegetarian: false,
    noMeat: false,
    imageUrl: "https://images.unsplash.com/photo-1559314809-0d155014e29e?auto=format&fit=crop&w=600&q=80",
    detail: "ครีมซอสเข้มข้น เบคอนกรอบๆ และพาเมซานชีส",
    restaurants: [
      { name: "Italiano", star: 4, distance: 2.4 },
      { name: "Pasta Ama", star: 4.5, distance: 3.7 }
    ]
  },
  {
    id: 63,
    name: "พิซซ่ามาร์เกริต้า",
    halal: true,
    vegetarian: true,
    noMeat: true,
    imageUrl: "https://images.unsplash.com/photo-1565299624-9a5f188fb64e?auto=format&fit=crop&w=600&q=80",
    detail: "แป้งบางกรอบ มอสซาเรลล่าชีสและโหระพาอิตาลี",
    restaurants: [
      { name: "Italiano", star: 4, distance: 2.4 },
      { name: "Peppina", star: 5, distance: 4.5 }
    ]
  },
  {
    id: 64,
    name: "แฮมเบอร์เกอร์เนื้อ",
    halal: true,
    vegetarian: false,
    noMeat: false,
    imageUrl: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80",
    detail: "เนื้อบดฉ่ำๆ ชีสเยิ้มๆ ขนมปังโฮมเมด",
    restaurants: [
      { name: "Burger Bros", star: 5, distance: 1.6 },
      { name: "Shake Shack", star: 4.5, distance: 5.0 }
    ]
  },
  {
    id: 65,
    name: "ฟิชแอนด์ชิปส์",
    halal: true,
    vegetarian: false,
    noMeat: false,
    imageUrl: "https://images.unsplash.com/photo-1626804475297-41607ea0d5eb?auto=format&fit=crop&w=600&q=80",
    detail: "ปลาชุบแป้งเบียร์ทอดกรอบ เสิร์ฟพร้อมมันฝรั่งทอด",
    restaurants: [
      { name: "Western Grill", star: 4, distance: 3.5 },
      { name: "Fish & Chips BKK", star: 4.5, distance: 4.2 }
    ]
  },
  {
    id: 66,
    name: "พอร์คชอปสเต็ก",
    halal: false,
    vegetarian: false,
    noMeat: false,
    imageUrl: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
    detail: "สเต็กหมูชิ้นหนานุ่ม ราดซอสพริกไทยดำ",
    restaurants: [
      { name: "Western Grill", star: 4, distance: 3.5 },
      { name: "Santa Fe", star: 4, distance: 2.0 }
    ]
  },
  {
    id: 67,
    name: "ลาซานญ่าเนื้อ",
    halal: true,
    vegetarian: false,
    noMeat: false,
    imageUrl: "https://images.unsplash.com/photo-1565299624-9a5f188fb64e?auto=format&fit=crop&w=600&q=80",
    detail: "ชีสเยิ้มๆ ซอสเนื้อเข้มข้น อบมาร้อนๆ",
    restaurants: [
      { name: "Italiano", star: 4, distance: 2.4 },
      { name: "Mama Mia", star: 4.5, distance: 3.1 }
    ]
  },
  {
    id: 68,
    name: "สเต็กแซลมอน",
    halal: true,
    vegetarian: false,
    noMeat: false,
    imageUrl: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
    detail: "แซลมอนย่างเกลือ หนังกรอบ เนื้อฉ่ำ",
    restaurants: [
      { name: "Western Grill", star: 5, distance: 3.5 },
      { name: "Sizzler", star: 4, distance: 2.8 }
    ]
  },
  {
    id: 69,
    name: "ซีซาร์สลัดเบคอน",
    halal: false,
    vegetarian: false,
    noMeat: false,
    imageUrl: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80",
    detail: "ผักคอสกรอบ คลุกเคล้าน้ำสลัดซีซาร์",
    restaurants: [
      { name: "Italiano", star: 4, distance: 2.4 },
      { name: "The Salad Bar", star: 4, distance: 1.5 }
    ]
  },
  {
    id: 70,
    name: "สปาเก็ตตี้ขี้เมาทะเล",
    halal: true,
    vegetarian: false,
    noMeat: false,
    imageUrl: "https://images.unsplash.com/photo-1559314809-0d155014e29e?auto=format&fit=crop&w=600&q=80",
    detail: "ฟิวชั่นอิตาเลียน-ไทย รสชาติจัดจ้านถึงใจ",
    restaurants: [
      { name: "Italiano", star: 5, distance: 2.4 },
      { name: "บ้านพาสต้า", star: 4.5, distance: 3.0 }
    ]
  },
  {
    id: 71,
    name: "ซุปเห็ดทรัฟเฟิล",
    halal: true,
    vegetarian: true,
    noMeat: true,
    imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80",
    detail: "หอมกลิ่นทรัฟเฟิล เสิร์ฟพร้อมขนมปังกระเทียม",
    restaurants: [
      { name: "Western Grill", star: 5, distance: 3.5 },
      { name: "Truffle Bar", star: 4.5, distance: 4.8 }
    ]
  },
  {
    id: 72,
    name: "แมคแอนด์ชีส",
    halal: true,
    vegetarian: true,
    noMeat: true,
    imageUrl: "https://images.unsplash.com/photo-1559314809-0d155014e29e?auto=format&fit=crop&w=600&q=80",
    detail: "มักกะโรนีอบชีส 3 ชนิด หอมมันยืดดด",
    restaurants: [
      { name: "Burger Bros", star: 4, distance: 1.6 },
      { name: "Cheese Factory", star: 4.5, distance: 3.3 }
    ]
  },
  {
    id: 73,
    name: "พิซซ่าเปปเปอโรนี",
    halal: false,
    vegetarian: false,
    noMeat: false,
    imageUrl: "https://images.unsplash.com/photo-1565299624-9a5f188fb64e?auto=format&fit=crop&w=600&q=80",
    detail: "หน้าเปปเปอโรนีแบบจัดเต็ม แป้งหนานุ่ม",
    restaurants: [
      { name: "Italiano", star: 4, distance: 2.4 },
      { name: "Domino's Pizza", star: 4, distance: 1.2 }
    ]
  },
  {
    id: 74,
    name: "หอมทอด (Onion Rings)",
    halal: true,
    vegetarian: true,
    noMeat: true,
    imageUrl: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80",
    detail: "หอมทอดกรอบๆ ทานเล่นเพลินๆ",
    restaurants: [
      { name: "Burger Bros", star: 3, distance: 1.6 },
      { name: "Texas Chicken", star: 4, distance: 2.1 }
    ]
  },
  {
    id: 75,
    name: "สเต็กไก่สไปซี่",
    halal: true,
    vegetarian: false,
    noMeat: false,
    imageUrl: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
    detail: "เนื้อไก่ส่วนสะโพก หมักเครื่องเทศรสจัด",
    restaurants: [
      { name: "Western Grill", star: 4, distance: 3.5 },
      { name: "Eat Am Are", star: 4.5, distance: 2.5 }
    ]
  },
  {
    id: 76,
    name: "เฟรนช์ฟรายส์ชีส",
    halal: true,
    vegetarian: true,
    noMeat: true,
    imageUrl: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80",
    detail: "มันฝรั่งทอดกรอบ ราดชีสเยิ้มๆ",
    restaurants: [
      { name: "Burger Bros", star: 4, distance: 1.6 },
      { name: "Potato Corner", star: 4.5, distance: 1.9 }
    ]
  },
  {
    id: 77,
    name: "ไส้กรอกรวมเยอรมัน",
    halal: false,
    vegetarian: false,
    noMeat: false,
    imageUrl: "https://images.unsplash.com/photo-1626804475297-41607ea0d5eb?auto=format&fit=crop&w=600&q=80",
    detail: "ไส้กรอกพรีเมียม เสิร์ฟพร้อมซาวร์เคราท์",
    restaurants: [
      { name: "Western Grill", star: 4, distance: 3.5 },
      { name: "German Beer House", star: 4.5, distance: 5.2 }
    ]
  },
  {
    id: 78,
    name: "พาสต้าเส้นดำผัดหมึก",
    halal: true,
    vegetarian: false,
    noMeat: false,
    imageUrl: "https://images.unsplash.com/photo-1559314809-0d155014e29e?auto=format&fit=crop&w=600&q=80",
    detail: "เส้นพาสต้าหมึกดำ ผัดกระเทียมและหมึกสด",
    restaurants: [
      { name: "Italiano", star: 4, distance: 2.4 },
      { name: "Nero Pasta", star: 4.5, distance: 3.9 }
    ]
  },
  {
    id: 79,
    name: "คลับแซนด์วิช",
    halal: false,
    vegetarian: false,
    noMeat: false,
    imageUrl: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80",
    detail: "แซนด์วิชไส้แน่น แฮม เบคอน ไก่ และไข่",
    restaurants: [
      { name: "Burger Bros", star: 4, distance: 1.6 },
      { name: "Subway", star: 4, distance: 1.0 }
    ]
  },
  {
    id: 80,
    name: "ซี่โครงหมูบาร์บีคิว",
    halal: false,
    vegetarian: false,
    noMeat: false,
    imageUrl: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
    detail: "ซี่โครงหมูอบซอส BBQ เปื่อยร่อนจากกระดูก",
    restaurants: [
      { name: "Western Grill", star: 5, distance: 3.5 },
      { name: "Ribs & Wings", star: 4.5, distance: 4.1 }
    ]
  }
];

export default foods;