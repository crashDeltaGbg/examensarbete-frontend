<script setup>
import { ref, watch } from 'vue';
import useFetch from '@/composables/useFetch.js';

const { data, getData } = useFetch();
const contacts = ref([]);

getData('posts', 'categories=23');

watch(data, (newValue) => {
  let objects = [];
  for (let i = 0; i < data.value.length; i++) {
    const object = data.value[i];
    const name = object.acf.lastname.toLowerCase() + object.acf.firstname.toLowerCase();
    const newObject = {
      name: name,
      info: {
        id: object.id,
        firstname: object.acf.firstname,
        lastname: object.acf.lastname,
        phone: object.acf.phone,
        email: object.acf.email,
        picture: object.acf.picture,
        dateOfBirth: object.acf.dateofbirth
      }
    }
      objects.push(newObject);
    }
    function compare(a,b) {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    }
    objects.sort( compare );
    contacts.value = objects;
  }
)

</script>

<template>
  <main>
    <h1>contact</h1>
    <div v-if="contacts">
      <div v-for="contact in contacts" :key="contact.info.id" class="contact-card box-shadow">
        <h2 class="contact-card-heading">{{ contact.info.firstname }} {{ contact.info.lastname }}</h2>
        <p class="contact-email"><a :href="`mailto:${contact.info.email}`">&#128231; {{ contact.info.firstname }}</a></p>
        <p v-if="contact.info.phone" class="contact-phone"><a :href="`tel:${contact.info.phone}`">&#128222; {{ contact.info.firstname }}</a></p>
        <img class="contact-picture" v-if="contact.info.picture" :src="contact.info.picture"
          :alt="`${contact.info.firstname} ${contact.info.lastname}`" />
      </div>
    </div>
  </main>
</template>

<style lang="scss">
@import "../assets/colors";

div.contact-card {
  background-color: $secondary-color;
  border-radius: 0.5rem;
  display: grid;
  grid-template-areas:
    "contact-card-heading contact-picture"
    "contact-email        contact-picture"
    "contact-phone        contact-picture";
  grid-template-columns: 6fr 5fr;
  margin-bottom: 1rem;
  padding: 0.5rem;
  width: 100%;

  .contact-card-heading {
    grid-area: contact-card-heading;
  }

  .contact-picture {
    grid-area: contact-picture;
  }

  .contact-phone {
    grid-area: contact-phone;
  }

  .contact-email {
    grid-area: contact-email;
  }

  a {
    color: $primary-color;
    text-decoration: none;
  }

  img {
    align-self: center;
    aspect-ratio: 1/1;
    border-radius: 50%;
    display: block;
    justify-self: center;
    max-height: 150px;
    max-width: 80%;
  }
}
</style>