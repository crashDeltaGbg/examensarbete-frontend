<script setup>
import { RouterLink } from 'vue-router';
import { ref } from 'vue';

const hideNavigation = ref(true);

const toggleNavigation = () => {
  hideNavigation.value = !hideNavigation.value;
  // console.log(hideNavigation.value);
}

</script>

<template>
  <header>
    <div>
      <h1>yxelflod.se</h1>
    </div>
    <nav v-if="hideNavigation" class="retro-font" @click="toggleNavigation()">menu</nav>
    <nav v-else class="retro-font">
      <RouterLink @click="toggleNavigation()" to="/">Home</RouterLink>
      <RouterLink @click="toggleNavigation()" to="/music">Music</RouterLink>
      <RouterLink @click="toggleNavigation()" to="/visuals">Visuals</RouterLink>
      <RouterLink @click="toggleNavigation()" to="/about">About</RouterLink>
      <RouterLink @click="toggleNavigation()" to="/contact">Contact</RouterLink>
    </nav>
  </header>
</template>

<style lang="scss">
header {
  @import '../assets/colors';

  background-color: $secondary-color;

  div {
    h1 {
      font-size: 2.8rem;
      text-align: center;
    }
  }


  nav {
    background-color: $tertiary-color;
    border-radius: 0.5rem;
    color: $secondary-color;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    line-height: 2em;
    margin: 0.5rem;
    padding: 0.5rem 1rem;
    position: sticky;
    text-align: right;
    text-transform: lowercase;
    top: 0;
    z-index: 5;

    a:link,
    a:visited,
    a:hover,
    a:active {
      color: $secondary-color;
      text-decoration: none;
    }
  }
}
</style>