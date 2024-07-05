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

  <footer class="footer">

      <p>&copy; 2024 Jigglers Dessert. All rights reserved.</p>

  </footer>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap");

.contact {
  font-family: "Montserrat";
  color: white;
  background-color: #3c3736;
  height: 50vh;
  padding: 20px;
  text-align: center;
}

hr {
  margin: 0 auto;
  width: 50%;
}

h1 {
  margin-bottom: 20px;
}

.social-media {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.footer {
  background-color: #2a2726;
  color: white;
  padding: 20px 0;
  text-align: center;
  font-family: "Montserrat";
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.footer-social-media {
  margin-bottom: 10px;
}

.social-icon {
  margin: 0 10px;
}

.social-icon img {
  width: 30px;
  height: 30px;
}

.footer p {
  margin: 0;
}

/* Media Queries untuk layar kecil (ponsel) */
@media (max-width: 600px) {
  .contact {
    height: auto;
  }

  .social-media {
    flex-direction: column;
    align-items: center;
  }

  .footer-content {
    flex-direction: column;
  }

  .social-icon {
    margin: 5px;
  }
}

/* Media Queries untuk layar sedang (tablet) */
@media (min-width: 601px) and (max-width: 1024px) {
  .contact {
    height: auto;
  }

  .social-media {
    flex-direction: column;
    align-items: center;
  }

  .footer-content {
    flex-direction: row;
    justify-content: space-between;
  }

  .footer-social-media {
    margin-bottom: 0;
  }

  .social-icon {
    margin: 10px;
  }
}
</style>
