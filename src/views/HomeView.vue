<script setup>
import NavBar from '../components/NavBar.vue'
import HeroSection from '../views/HeroSection.vue'
import AboutView from './AboutView.vue';
import ContactView from './ContactView.vue';
import ProductsView from './ProductsView.vue';
</script>

<template>
  <NavBar/>
  <HeroSection/>
  <AboutView v-scroll-animation class="fade-in-up"/>
  <ProductsView/>
  <ContactView v-scroll-animation class="fade-in-up"/>
</template>

<style scoped>
/* Animasi Fade In Up */
.fade-in-up {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 3s ease, transform 5s ease;
}

.fade-in-up.animate {
  opacity: 1;
  transform: translateY(0);
}
</style>
