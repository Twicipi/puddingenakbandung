<script setup>
</script>

<template>
  <div id="menu" class="menu">
    <h1>Menu Kita</h1>
    <hr>
    <p class="tagline">Pudding lembut dan enak, cocok untuk jadi makanan penutup kamu!</p>
    <div class="images">
      <div class="card">
        <img src="../assets/img/menus/pudingkecil.jpeg" alt="Pudding 1">
        <p>Pudding gula merah mini dengan vla vanilla.</p>
      </div>
      <div class="card">
        <img src="../assets/img/menus/pudingbesar.jpeg" alt="Pudding 2">
        <p class="description-2">Pudding gula merah ukuran besar, cocok untuk sharing.</p>
      </div>
      <div class="card">
        <img src="../assets/img/fotopudinggyukaku.jpeg" alt="Pudding 3">
        <p class="description-3">Mini soft pudding dengan vanilla premium, saus caramel dengan opsi kacang atau regal</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap");

.menu {
  margin-top: 20px;
  height: 100vh;
  background: linear-gradient(135deg, #3c3535, #4b4242, #706565);
  margin: 0 auto;
  padding: 40px;
  text-align: justify;
}

.menu h1 {
  color: white;
  font-family: "Libre-Baskerville";
  font-size: 3em;
  text-align: center;
  font-weight: bold;
  margin-bottom: 20px;
}

.menu p {
  text-align: center;
  font-family: "Montserrat";
  line-height: 1.6;
  margin-bottom: 20px;
}

.tagline {
  margin-top: 10px;
  color: white;
}

.images {
  display: flex;
  justify-content: space-around;
  margin-top: 40px;
  flex-wrap: wrap; /* Membungkus elemen gambar agar responsif */
}

.card {
  width: 300px;
  padding: 20px;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
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

.card p {
  font-family: "Montserrat";
  font-size: 1em;
}

.description-2 {
  margin-top: 150px;
}

.description-3 {
  margin-top: 85px;
}

/* Media Queries untuk layar kecil (ponsel) */
@media (max-width: 600px) {
  .menu {
    height: auto; /* Mengubah tinggi menjadi otomatis untuk layar kecil */
    padding: 20px; /* Mengurangi padding agar sesuai dengan layar kecil */
  }

  .menu h1 {
    font-size: 2em; /* Mengubah ukuran font agar sesuai dengan layar kecil */
  }

  .menu p {
    font-size: 0.9em; /* Mengubah ukuran font agar sesuai dengan layar kecil */
  }

  .card {
    width: 90%; /* Mengubah lebar kartu agar sesuai dengan layar kecil */
  }

  .description-2, .description-3 {
    margin-top: 10px; /* Mengurangi margin atas untuk deskripsi */
  }
}

/* Media Queries untuk layar sedang (tablet) */
@media (min-width: 601px) and (max-width: 1024px) {
  .menu {
    height: auto; /* Mengubah tinggi menjadi otomatis untuk layar sedang */
    padding: 30px; /* Mengurangi padding agar sesuai dengan layar sedang */
  }

  .menu h1 {
    font-size: 2.5em; /* Mengubah ukuran font agar sesuai dengan layar sedang */
  }

  .menu p {
    font-size: 1em; /* Menyesuaikan ukuran font agar sesuai dengan layar sedang */
  }

  .card {
    width: 45%; /* Mengubah lebar kartu agar sesuai dengan layar sedang */
  }

  .description-2, .description-3 {
    margin-top: 20px; /* Mengurangi margin atas untuk deskripsi */
  }
}
</style>
