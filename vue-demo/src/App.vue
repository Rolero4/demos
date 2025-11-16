<template>
  <AppLayout>
    <div class="flex flex-col justify-center">
      <section id="landing" class="fade-in">
        <AppLandingSection></AppLandingSection>
      </section>
      <section id="gallery" class="fade-in">
        <AppGallerySection></AppGallerySection>
      </section>
      <section id="faq" class="fade-in">
        <AppFaqSection></AppFaqSection>
      </section>
    </div>
  </AppLayout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppLayout from "./components/layout/Layout.vue";
import AppFaqSection from "./components/core/FaqSection.vue";
import AppGallerySection from "./components/core/GallerySection.vue";
import AppLandingSection from "./components/core/LandingSection.vue";
import { provideScreenSize } from "./store/isMobileStore";

export default defineComponent({
  name: "App",
  components: {
    AppLayout,
    AppFaqSection,
    AppGallerySection,
    AppLandingSection,
  },

  setup() {
    provideScreenSize();
  },
});
</script>

<style lang="scss">
html,
body {
  height: 100%;
  scroll-behavior: smooth;
}

body {
  font-family: Bebas Neue;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}

img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
}

input,
button,
textarea,
select {
  font: inherit;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
}

#root,
#__next {
  isolation: isolate;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

* {
  margin: 0;
}

html,
body {
  height: 100%;
}
body {
  margin: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

html,
body {
  height: 100%;
}
body {
  margin: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
