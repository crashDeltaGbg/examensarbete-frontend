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

<style lang="scss" scoped>
@import '../assets/colors';

footer {
  background-color: $quarternary-color;
  border-radius: 0.5rem 0.5rem 0 0;
  margin: 0 0.5rem;

  p {
    color: $quinary-color;
    text-align: center;
  }
}
</style>