<script setup>
import { ref } from 'vue';
import useFetch from '@/composables/useFetch.js';

const { data, getData } = useFetch();

getData('pages', 'contact');

</script>

<template>
  <main>
    <h1>This is a contact page</h1>
    <p><a :href="`tel:${data.value?.acf.phone}`">Call me</a></p>
    <p><a :href="`mailto:${data.value?.acf.email}`">E-mail me</a></p>
  </main>
</template>
