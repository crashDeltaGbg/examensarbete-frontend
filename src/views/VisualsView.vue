<template>
  <main>
    <section class="box-shadow">
      <h1>Visuals with javascript</h1>
      <p>
        These are visuals I've made during a course on Domestika called <a 
          href="https://www.domestika.org/en/courses/2729-creative-coding-making-visuals-with-javascript"
          target="_blank">'Creative
          Coding: Making Visuals with JavaScript'</a>. I've been using a library called <a
          href="https://github.com/mattdesl/canvas-sketch" target="_blank">canvas-sketch</a>.
      </p>
      <ul>
        <li><a href="https://www.yxelflod.se/visuals/animatedlogo/" target="_blank">Animated Logo</a></li>
        <li><a href="https://www.yxelflod.se/visuals/circles/" target="_blank">Circles and Lines</a></li>
        <li><a href="https://www.yxelflod.se/visuals/noise/" target="_blank">Noise with Controls</a></li>
      </ul>
    </section>
    <section class="box-shadow">
      <h1>Art by Divs</h1>
      <p>
        These are artwork made by positioning divs into a grid system.
      </p>
      <ul>
        <li><a href="https://www.yxelflod.se/art/668divs/" target="_blank">Mickey Mouse</a></li>
        <li><a href="https://www.yxelflod.se/art/mushroom/" target="_blank">Mushroom</a></li>
      </ul>
    </section>
  </main>
</template>

<style lang="scss" scoped>
@import '../assets/colors';

section {
  background-color: $secondary-color;
  border: 0.25rem solid $tertiary-color;
  border-radius: 0.5rem;
  margin-bottom: 2rem;
  padding: 1rem;

  a:link {
    color: $quinary-color;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  a:visited {
    color: $senary-color;
  }

  p {
    line-height: 1.5rem;
  }

  ul {
    line-height: 1.5rem;
    list-style-type: none;
    padding-inline-start: 1rem;
  }
}
</style>