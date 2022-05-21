<script setup>
import useFetch from '@/composables/useFetch.js';

const { data, getData } = useFetch();

getData('pages', 'frontpage');

</script>

<template>
  <main>
    <h1>{{ data.value?.acf.title || 'Welcome!' }}</h1>
    <p>{{ data.value?.acf.text }}</p>
  </main>
</template>
