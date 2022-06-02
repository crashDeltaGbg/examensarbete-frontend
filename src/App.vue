<script setup>
/* import { ref } from 'vue'; */
import { RouterView } from 'vue-router';
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';

</script>

<template>
  <TheHeader />

  <RouterView />

  <TheFooter />
</template>

<style lang="scss">
@import '@/assets/base.scss';
</style>
