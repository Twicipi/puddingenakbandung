<script setup>
import NavBar from '../components/NavBar.vue'
import AboutView from './AboutView.vue';
import ContactView from './ContactView.vue';
import ProductsViewVue from './ProductsView.vue';
</script>

<template>
  <NavBar/>
  <div class="hero">
    <div class="pudding-pict">
      <img src="../assets/img/fotopudinggyukaku.jpeg" alt="foto-pudding">
    </div>
    <div class="tagline">
      <div class="tagline-content">
        <h1>Lezatnya <span class="highlight">Pudding Terbaik</span> di Bandung</h1>
        <p>Rasakan kelezatan tiada tanding dari pudding terbaik di Bandung! Nikmati setiap gigitan lembut yang memanjakan lidah Anda dengan tekstur yang sempurna dan paduan rasa yang menggoda. Dibuat dengan teliti menggunakan bahan-bahan pilihan, setiap sajian pudding ini adalah perpaduan harmonis antara tradisi cita rasa dan sentuhan modern. Segera cicipi dan temukan kenikmatan yang tak terlupakan di setiap potongannya!</p>
      </div>
    </div>
  </div>
  <AboutView class="fade-in-up"/>
  <ProductsViewVue class="fade-in-up"/>
  <ContactView class="fade-in-up"/>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

.hero {
  display: flex;
  width: 100%;
  margin: 0 auto; 
  margin-bottom: 80px;
}

.pudding-pict {
  display: flex;
  flex: 1;
  justify-content: flex-start; /* Memposisikan gambar di sisi kiri */
  align-items: center;
  overflow: hidden; /* Memastikan gambar tidak keluar dari container */
}

.pudding-pict img {
  flex: 1;
  max-width: 100%;
  height: auto;
  object-fit: cover; /* Memastikan gambar memenuhi container tanpa merubah proporsinya */
}

.tagline {
  flex: 1; /* Mengambil ruang yang tersedia */
  background-color: white;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left;
}

.tagline-content {
  width: 580px;
}

.tagline-content h1 {
  font-family: 'Libre-Baskerville';
  font-weight: bold;
  font-size: 4em;
  position: relative; /* Untuk pengaturan latar belakang */
}

.tagline-content h1 .highlight {
  color: white;
  background-color: #4b4242; /* Warna latar belakang highlight */
  padding: 0 15px; /* Padding agar highlight tidak terlalu lebar */
  border-radius: 5px; /* Corner radius untuk highlight */
}

.tagline-content p {
  font-size: 1em;
  font-family: 'Montserrat';
}

/* Animasi Fade In Up */
.fade-in-up {
  opacity: 0;
  animation: fadeInUp 2.5s forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Media Queries untuk layar kecil (ponsel) */
@media (max-width: 600px) {
  .hero {
    flex-direction: column; /* Mengubah layout menjadi kolom */
  }

  .pudding-pict {
    justify-content: center; /* Memposisikan gambar di tengah */
  }

  .tagline-content {
    width: 90%; /* Mengubah lebar tagline-content agar sesuai dengan layar kecil */
  }

  .tagline-content h1 {
    font-size: 2em; /* Mengubah ukuran font agar sesuai dengan layar kecil */
  }

  .tagline-content p {
    font-size: 0.9em; /* Mengubah ukuran font agar sesuai dengan layar kecil */
  }
}

/* Media Queries untuk layar sedang (tablet) */
@media (min-width: 601px) and (max-width: 1024px) {
  .hero {
    flex-direction: column; /* Mengubah layout menjadi kolom */
  }

  .pudding-pict {
    justify-content: center; /* Memposisikan gambar di tengah */
  }

  .tagline-content {
    width: 80%; /* Mengubah lebar tagline-content agar sesuai dengan layar sedang */
  }

  .tagline-content h1 {
    font-size: 3em; /* Mengubah ukuran font agar sesuai dengan layar sedang */
  }

  .tagline-content p {
    font-size: 1em; /* Mengubah ukuran font agar sesuai dengan layar sedang */
  }
}
</style>
