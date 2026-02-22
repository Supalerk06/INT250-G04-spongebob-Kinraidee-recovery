<template>
  <v-container>
    <v-card max-width="400" elevation="4" rounded="lg">
      
      <v-img
        height="200"
        src="https://images.unsplash.com/photo-1626804475297-41609ea263eb"
        cover
      ></v-img>

      <v-card-title class="text-h5 font-weight-bold">
        ข้าวกะเพราหมูสับไข่ดาว
      </v-card-title>

      <v-card-text>
        <v-row align="center" class="mx-0 mt-2">
          <v-rating
            :model-value="4.5"
            color="amber"
            density="compact"
            half-increments
            readonly
          ></v-rating>
          <div class="text-grey ms-4">
            4.5 (120 รีวิว)
          </div>
        </v-row>
      </v-card-text>

      <v-divider class="mx-4 mb-2"></v-divider>

      <v-card-actions>
        <v-btn
          color="deep-orange"
          variant="flat"
          block
          prepend-icon="mdi-cart"
        >
          สั่งอาหารเลย
        </v-btn>
      </v-card-actions>

    </v-card>
  </v-container>
</template>

<script setup>
// สังเกตว่าในส่วน Script แทบไม่ต้องเขียน Logic อะไรเลย 
// เพราะ Component ของ Material UI จัดการโครงสร้างให้เราหมดแล้ว!
</script>