<script setup>
import useFetch from '@/composables/useFetch.js';
import { watch } from 'vue';

const { data: tracks, getData } = useFetch();

getData('posts', 'categories=24');

/* watch(data, (newValue) => {
  console.log(data.value[0]);
}) */

</script>

<template>
  <main>
    <h1>music</h1>
    <div v-if="tracks">
      <div class="song" v-for="track in tracks" :key="track.id">
        <h2>{{ track.acf.trackname }}</h2>
        <p>By: {{ track.acf.artist }}</p>
        <audio controls>
          <source :src="track.acf.songfile" type="audio/mpeg">
        </audio>
      </div>
    </div>
  </main>
</template>

<style lang="scss">
@import '../assets/colors';
div.song {
  h2 {
    margin: 0;
  }

  audio[controls] {
    display: block;
  }
}
</style>