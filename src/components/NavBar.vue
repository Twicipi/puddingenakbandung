<script setup>
import { ref } from 'vue';
import { useRouter } from "vue-router";

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
</script>

<template>
  <header>
    <nav>
      <div class="logo">
        <img src="../assets/img/logo.jpeg" alt="Logo">
      </div>
      <div class="hamburger" @click="toggleMenu">
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

.hamburger {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 21px;
  cursor: pointer;
}

.hamburger span {
  background: black;
  height: 3px;
  width: 100%;
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
  .hamburger {
    display: flex;
  }

  ul {
    position: absolute;
    top: 60px;
    right: 0;
    flex-direction: column;
    background: white;
    width: 100%;
    text-align: center;
    display: none;
    opacity: 0;
    transition: opacity 0.5s ease;
  }

  ul.fade.open {
    display: flex;
    opacity: 1;
  }

  ul.fade:not(.open) {
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
