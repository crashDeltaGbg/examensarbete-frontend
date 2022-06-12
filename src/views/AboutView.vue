<script setup>
import useFetch from '@/composables/useFetch.js';

const { data, getData } = useFetch();

getData('pages', 'slug=about-me');
</script>

<template>
  <main>
    <section class="box-shadow">
      <h1>{{ data[0]?.acf.title || 'Hang on&hellip;' }}</h1>
      <div v-html="data[0]?.acf.text"></div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
@import '../assets/colors';
section {
  background-color: $secondary-color;
  border: 0.25rem solid $tertiary-color;
  border-radius: 0.5rem;
  padding: 1rem;

  p {
    line-height: 1.5rem;
  }
}
</style>
