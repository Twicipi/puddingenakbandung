<script setup>
import CardInstagram from '@/components/CardInstagram.vue';
import CardWhatsapp from '@/components/CardWhatsapp.vue';
</script>

<template>
  <div class="contact" id="contact">
    <h1>Contact Us</h1>
    <hr class="gep" />
    <div class="social-media">
      <CardInstagram />
      <CardWhatsapp />
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap");

.contact {
  font-family: "Montserrat";
  color: white;
  background-color: #3c3736;
  height: 50vh;
  padding: 20px; /* Menambahkan padding untuk memastikan konten tidak terlalu dekat dengan tepi */
  text-align: center; /* Menyelaraskan teks ke tengah */
}

hr {
  margin: 0 auto; /* Menyelaraskan garis horizontal ke tengah */
  width: 50%; /* Mengurangi lebar garis horizontal */
}

h1 {
  margin-bottom: 20px;
}

.social-media {
  display: flex;
  justify-content: center;
  gap: 20px; /* Menambahkan jarak antar elemen */
}

/* Media Queries untuk layar kecil (ponsel) */
@media (max-width: 600px) {
  .contact {
    height: auto; /* Mengubah tinggi menjadi otomatis untuk layar kecil */
  }

  .social-media {
    flex-direction: column; /* Mengubah tata letak menjadi kolom */
    align-items: center; /* Menyelaraskan item ke tengah */
  }
}

/* Media Queries untuk layar sedang (tablet) */
@media (min-width: 601px) and (max-width: 1024px) {
  .contact {
    height: auto; /* Mengubah tinggi menjadi otomatis untuk layar sedang */
  }

  .social-media {
    flex-direction: column; /* Mengubah tata letak menjadi kolom */
    align-items: center; /* Menyelaraskan item ke tengah */
  }
}
</style>
