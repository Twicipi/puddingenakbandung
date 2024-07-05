<script setup>
import NavBar from '../components/NavBar.vue'
import HerosSection from '../views/HeroSection.vue'
import AboutView from './AboutView.vue';
import ContactView from './ContactView.vue';
import ProductsViewVue from './ProductsView.vue';
</script>

<template>
  <NavBar/>
 <HerosSection/>
  <AboutView class="fade-in-up"/>
  <ProductsViewVue class="fade-in-up"/>
  <ContactView class="fade-in-up"/>
</template>

<style scoped>


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
</style>
