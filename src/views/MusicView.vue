<script setup>
import useFetch from '@/composables/useFetch.js';

const { data: tracks, getData } = useFetch();

getData('posts', 'categories=24');

</script>

<template>
  <main>
    <h1>music</h1>
    <div v-if="tracks" id="tracks">
      <div class="track" v-for="track in tracks" :key="track.id">
        <h2 class="track-name">{{ track.acf.trackname }}</h2>
        <p class="artist">By: {{ track.acf.artist }}</p>
        <audio controls class="player">
          <source :src="track.acf.songfile" type="audio/mpeg">
        </audio>
        <img class="album-cover" v-if="track.acf.albumcover" :src="track.acf.albumcover" alt="album cover" />
        <img class="album-cover" v-else src="../assets/12_inch_vinyl.svg" alt="12 inch vinyl" />
      </div>
    </div>
  </main>
</template>

<style lang="scss">
@import '../assets/colors';

div#tracks {
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 768px) {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: 1fr 1fr 1fr;
  }

  div.track {
  
    background-color: rgba($secondary-color, 0.25);
    border-radius: 0.5rem;
    display: grid;
    grid-gap: 0.5rem;
    grid-template-areas:
      'album-cover  track-name'
      'artist       artist'
      'player       player';
    grid-template-columns: 20% auto;
    margin-bottom: 1rem;
    padding: 0.5rem;
  
    @media only screen and (min-width: 376px) {
      grid-template-areas:
      'album-cover  track-name'
      'album-cover  artist'
      'player       player';
    }
  
    @media only screen and (min-width: 426px) {
      grid-template-areas:
        'track-name   album-cover'
        'artist       album-cover'
        'player       album-cover';
      grid-template-columns: 2fr 1fr;
    }
  
    audio.player {
      display: block;
      grid-area: player;
      max-width: 100%;
    }
  
    h2.track-name {
      grid-area: track-name;
      margin: 0;
    }
  
    img.album-cover {
      aspect-ratio: 1/1;
      grid-area: album-cover;
      width: 100%;
    }
  
    p.artist {
      grid-area: artist;
    }
  }
}

</style>