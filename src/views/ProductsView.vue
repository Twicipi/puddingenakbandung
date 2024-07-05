<template>
  <div id="menu" class="menu">
    <h1 class="animated-title">Menu Kita</h1>
    <hr class="animated-hr">
    <p class="tagline">Pudding lembut dan enak, cocok untuk jadi makanan penutup kamu!</p>
    <div class="images">
      <div class="card" ref="card1">
        <img src="../assets/img/menus/pudingkecil.jpeg" alt="Pudding 1">
        <p>Pudding gula merah mini dengan vla vanilla.</p>
      </div>
      <div class="card" ref="card2">
        <img src="../assets/img/menus/pudingbesar.jpeg" alt="Pudding 2">
        <p class="description-2">Pudding gula merah ukuran besar, cocok untuk sharing.</p>
      </div>
      <div class="card" ref="card3">
        <img src="../assets/img/fotopudinggyukaku.jpeg" alt="Pudding 3">
        <p class="description-3">Mini soft pudding dengan vanilla premium, saus caramel dengan opsi kacang atau regal.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import gsap from 'gsap';
import { onMounted, onBeforeUnmount } from 'vue';

const handleIntersection = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: el.dataset.index * 0.3,
        onComplete: () => {
          observer.unobserve(el); // Stop observing once animation is triggered and completed
          el.classList.add('animated'); // Add a class to mark this element as animated
        },
      });
    }
  });
};

const handleTitleIntersection = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const tl = gsap.timeline();
      tl.from('.animated-title', { x: -200, opacity: 0, duration: 1 })
        .from('.animated-hr', { width: 0, duration: 1 }, '-=0.5');
      observer.unobserve(entry.target); // Stop observing once animation is triggered and completed
    }
  });
};

let observer;
let titleObserver;

const setupObservers = () => {
  observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.1
  });

  document.querySelectorAll('.card').forEach((el, index) => {
    if (!el.classList.contains('animated')) {
      el.dataset.index = index; // Assign index for delay purposes
      observer.observe(el);
    }
  });

  titleObserver = new IntersectionObserver(handleTitleIntersection, {
    threshold: 0.1
  });

  titleObserver.observe(document.querySelector('.animated-title'));
};

onMounted(() => {
  setupObservers();
});

onBeforeUnmount(() => {
  if (observer) {
    document.querySelectorAll('.card').forEach(el => {
      observer.unobserve(el);
    });
  }
  if (titleObserver) {
    titleObserver.disconnect();
  }
});
</script>

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
  opacity: 0; /* Initial opacity */
  transform: translateY(100px); /* Initial transform */
}

.card.animated {
  opacity: 1 !important; /* Ensure animated cards stay visible */
  transform: translateY(0) !important; /* Ensure animated cards stay in place */
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
