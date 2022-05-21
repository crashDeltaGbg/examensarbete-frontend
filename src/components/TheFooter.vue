<script setup>
const currentYear = new Date().getFullYear();
</script>

<template>
  <footer>
    <p class="retro-font">
      &copy; CrashDesigns 2022-{{ currentYear }}
    </p>
  </footer>
</template>

<style lang="scss">
@import '../assets/colors';

footer {
  background-color: $tertiary-color;
  border-radius: 0.5rem 0.5rem 0 0;
  margin: 0 0.5rem;

  p {
    text-align: center;
  }
}
</style>