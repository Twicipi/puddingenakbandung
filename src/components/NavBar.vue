<script setup>
import { ref, onUpdated } from 'vue';
import { useRouter } from "vue-router";
import gsap from 'gsap';

const router = useRouter();
const isMenuOpen = ref(false);

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
    isMenuOpen.value = false; // Close menu after clicking
  }
};

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

onUpdated(() => {
  const menu = document.querySelector('ul');
  if (isMenuOpen.value) {
    gsap.fromTo(menu, { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 0.4 });
  }
});
</script>

<template>
  <header>
    <nav>
      <div class="logo">
        <img src="../assets/img/logopudding.jpeg" alt="Logo">
      </div>
      <div class="burger" @click="toggleMenu">
        <input type="checkbox" :checked="isMenuOpen" />
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul :class="{ open: isMenuOpen, fade: true }">
        <li><a @click="scrollToSection('hero')" class="nav-link">Home</a></li>
        <li><a @click="scrollToSection('about')" class="nav-link">About</a></li>
        <li><a @click="scrollToSection('menu')" class="nav-link">Menu</a></li>
        <li><a @click="scrollToSection('contact')" class="nav-link">Contact</a></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

header {
  z-index: 9999;
  background: white;
  font-family: "Montserrat", sans-serif;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 20px;
}

.logo img {
  border-radius: 40px;
  height: 40px;
  width: auto;
}

.burger {
  position: relative;
  width: 40px;
  height: 30px;
  background: transparent;
  cursor: pointer;
  display: none; /* Hide by default */
}

.burger input {
  display: none;
}

.burger span {
  display: block;
  position: absolute;
  height: 4px;
  width: 100%;
  background: black;
  border-radius: 9px;
  opacity: 1;
  left: 0;
  transform: rotate(0deg);
  transition: .25s ease-in-out;
}

.burger span:nth-of-type(1) {
  top: 0px;
  transform-origin: left center;
}

.burger span:nth-of-type(2) {
  top: 50%;
  transform: translateY(-50%);
  transform-origin: left center;
}

.burger span:nth-of-type(3) {
  top: 100%;
  transform-origin: left center;
  transform: translateY(-50%);
}

.burger input:checked ~ span:nth-of-type(1) {
  top: 0;
  left: 5px;
  transform: rotate(405deg);
}

.burger input:checked ~ span:nth-of-type(2) {
  width: 0%;
  opacity: 0;
}

.burger input:checked ~ span:nth-of-type(3) {
  top: 28px;
  left: 5px;
  transform: rotate(-405deg);
}

ul {
  list-style-type: none;
  display: flex;
  margin: 0;
  padding: 0;
}

li {
  margin-right: 20px;
}

.nav-link {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

.nav-link:hover {
  color: rgb(82, 82, 82);
}

@media (max-width: 768px) {
  .burger {
    display: block;
  }

  ul {
    position: absolute;
    top: 60px;
    right: 0;
    flex-direction: column;
    background: white;
    width: 100%;
    text-align: center;
    max-height: 0;
    overflow: hidden;
    opacity: 0;
    transition: max-height 1.5s ease, opacity 0.5s ease;
  }

  ul.fade.open {
    max-height: 500px; /* Adjust this value as needed */
    opacity: 1;
  }

  ul.fade:not(.open) {
    max-height: 0;
    opacity: 0;
  }

  li {
    margin: 10px 0;
  }

  .nav-link {
    color: black;
    padding: 10px 0;
  }
}
</style>
  