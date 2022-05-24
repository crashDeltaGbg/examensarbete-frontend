<script setup>
import useFetch from '@/composables/useFetch.js';
import { watch } from 'vue';

const { data, getData } = useFetch();

getData('posts', 'categories=4');

/* watch(data, (newValue) => {
  console.log(data.value[0]);
}) */

</script>

<template>
  <main>
    <h1>music</h1>
    <div v-if="data">
      <div class="song" v-for="song in data" :key="song.id">
        <h2>{{ song.acf.track_name }}</h2>
        <p>By: {{ song.acf.artist }}</p>
        <audio controls>
          <source :src="song.acf.song_file" type="audio/mpeg">
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