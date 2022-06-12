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
  function compare(a, b) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  }
  objects.sort(compare);
  contacts.value = objects;
}
)

</script>

<template>
  <main>
    <h1>contact</h1>
    <div v-if="contacts" id="contact-cards-container">
      <div v-for="contact in contacts" :key="contact.info.id" class="contact-card box-shadow">
        <h2 class="contact-card-heading">{{ contact.info.firstname }} {{ contact.info.lastname }}</h2>
        <p class="contact-email"><a :href="`mailto:${contact.info.email}`">&#128231; {{ contact.info.firstname }}</a>
        </p>
        <p v-if="contact.info.phone" class="contact-phone"><a :href="`tel:${contact.info.phone}`">&#128222; {{
            contact.info.firstname
        }}</a></p>
        <img class="contact-picture" v-if="contact.info.picture" :src="contact.info.picture"
          :alt="`${contact.info.firstname} ${contact.info.lastname}`" />
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@import "../assets/colors";

div#contact-cards-container {
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 768px) {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: 1fr 1fr 1fr;
  }

  div.contact-card {
    background-color: $secondary-color;
    border: 0.25rem solid $tertiary-color;
    border-radius: 0.5rem;
    display: grid;
    grid-template-areas:
      "contact-card-heading contact-picture"
      "contact-email        contact-picture"
      "contact-phone        contact-picture";
    grid-template-columns: 6fr 5fr;
    margin-bottom: 2rem;
    max-width: 425px;
    padding: 0.5rem;
    width: 100%;

    @media only screen and (min-width: 425px) {
      div.contact-card {
        grid-template-areas:
          "contact-card-heading contact-card-heading"
          "contact-email        contact-picture"
          "contact-phone        contact-picture";
        max-width: 60%;
      }
    }

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
      border-radius: 30% 70% 20% 80% / 70% 40% 60% 30% ;
      display: block;
      justify-self: center;
      max-height: 150px;
      max-width: 80%;
    }
  }
}

/* @media only screen and (min-width: 425px) {
  div#contact-card-container {
    flex-wrap: wrap;
  }

  div.contact-card {
    max-width: 50%;
  }
} */
</style>