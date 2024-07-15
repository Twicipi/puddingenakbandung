<script setup>
import CardInstagram from "@/components/CardInstagram.vue";
import CardWhatsapp from "@/components/CardWhatsapp.vue";
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
  background-image: url("../assets/img/fotopudingpaket.jpeg");
  height: 50vh;
  padding: 20px;
  text-align: center;
  position: relative; /* Relative positioning to enable pseudo-element */
}

.contact::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Dark overlay */
  z-index: 1; /* Ensure overlay is above the background image */
}

hr.gep {
  margin: 0 auto;
  width: 50%;
  position: relative;
  z-index: 2; /* Ensure hr is above the overlay */
}

h1 {
  margin-bottom: 20px;
  position: relative; /* Ensure h1 is above the overlay */
  z-index: 2; /* Ensure h1 is above the overlay */
}

.social-media {
  display: flex;
  justify-content: center;
  gap: 20px;
  position: relative; /* Ensure it's positioned relative for z-index to work */
  z-index: 2; /* Ensure content is above the overlay */
}

.footer {
  background-color: #2a2726;
  color: white;
  padding: 10px 0;
  text-align: center;
  font-family: "Montserrat";
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
