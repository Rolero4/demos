<template>
  <footer class="w-full bg-black flex justify-center border-t border-white">
    <div
      class="w-[1440px] bg-black flex justify-between px-[80px] py-6 max-md:px-4"
    >
      <p class="text-white text-paragraph-md font-bold font-condensed">
        Cars Spot
      </p>
      <button
        class="text-white underline text-paragraph-md font-condensed hover:scale-[1.05]"
      >
        Polityka prywatności
      </button>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppFooter",
});
</script>

<style lang="scss" scoped></style>
