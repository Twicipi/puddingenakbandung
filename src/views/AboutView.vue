<template>
  <div id="about" class="about">
    <div class="about-content">
      <h1>
        <i><span class="highlight">Pudding</span></i> Lembut, Manisnya
        <i> <span class="highlight">Menggugah Selera</span></i>
      </h1>
      <p>
        Tersaji dengan tekstur yang lembut, pudding ini menggugah selera dengan
        manis yang memikat. Tiap gigitannya menawarkan pengalaman yang
        memanjakan lidah, sempurna untuk menikmati akan cita rasa manis yang tak
        terlupakan.
      </p>
    </div>
    <div class="images">
      <div class="card">
        <picture>
          <img
            src="../assets/img/foto-orang/foto-ibu-satu.jpeg"
            alt="Pudding 1"
            width="300"
            height="200"
          />
        </picture>
      </div>
      <div class="card">
        <picture>
          <img
            src="../assets/img/foto-orang/foto-ibu-dua.jpeg"
            alt="Pudding 2"
            width="300"
            height="200"
          />
        </picture>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { gsap } from "gsap";

onMounted(() => {
  const timeline = gsap.timeline();

  timeline
    .from(".about", { duration: 1, opacity: 0 })
    .from(".about-content h1", { duration: 1, y: -50, opacity: 0 })
    .from(".about-content p", { duration: 1, y: -50, opacity: 0 }, "-=0.5")
    .from(".card", { duration: 1, y: 50, opacity: 0, stagger: 0.3 }, "-=0.5");
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap");

.about {
  height: 80vh;
  background-color: rgb(255, 255, 255);
  margin: 0 auto;
  padding: 40px;
  text-align: justify;
}

.about-content {
  width: 800px;
  display: flex;
  flex-direction: column;
  margin: 0 auto; /* Menyelaraskan konten ke tengah */
}

.highlight {
  color: white;
  background-color: #4b4242; /* Warna latar belakang highlight */
  padding: 0 15px; /* Padding agar highlight tidak terlalu lebar */
  border-radius: 5px; /* Corner radius untuk highlight */
}

.about-content h1 {
  font-family: "Libre-Baskerville";
  font-size: 3em;
  font-weight: bold;
  margin-bottom: 20px;
}

.about-content p {
  font-family: "Montserrat";
  font-size: 1.5em;
  line-height: 1.2;
  margin-bottom: 20px;
}

.images {
  display: flex;
  justify-content: space-around;
  margin-top: 40px;
  flex-wrap: wrap; /* Membungkus elemen gambar agar responsif */
}

.card {
  width: 300px;
  border-radius: 8px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  margin: 10px; /* Menambahkan margin agar gambar tidak terlalu rapat */
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.card img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 10px;
}

/* Media Queries untuk layar kecil (ponsel) */
@media (max-width: 600px) {
  .about {
    height: auto; /* Mengubah tinggi menjadi otomatis untuk layar kecil */
  }

  .about-content {
    width: 100%; /* Mengubah lebar konten agar sesuai dengan layar kecil */
    padding: 20px; /* Menambahkan padding agar konten tidak terlalu dekat dengan tepi */
  }

  .about-content h1 {
    font-size: 1.5em; /* Mengubah ukuran font agar sesuai dengan layar kecil */
  }

  .about-content p {
    font-size: 0.9em; /* Mengubah ukuran font agar sesuai dengan layar kecil */
  }

  .card {
    width: 90%; /* Mengubah lebar kartu agar sesuai dengan layar kecil */
  }
}

/* Media Queries untuk layar sedang (tablet) */
@media (min-width: 601px) and (max-width: 1024px) {
  .about {
    height: auto; /* Mengubah tinggi menjadi otomatis untuk layar sedang */
  }

  .about-content {
    width: 90%; /* Mengubah lebar konten agar sesuai dengan layar sedang */
  }

  .about-content h1 {
    font-size: 2em; /* Mengubah ukuran font agar sesuai dengan layar sedang */
  }

  .about-content p {
    font-size: 0.95em; /* Mengubah ukuran font agar sesuai dengan layar sedang */
  }

  .card {
    width: 45%; /* Mengubah lebar kartu agar sesuai dengan layar sedang */
  }
}
</style>
