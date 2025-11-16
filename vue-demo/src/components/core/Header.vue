<template>
  <header
    class="relative w-full flex items-center justify-between py-4 px-[80px] max-md:px-4 z-1 bg-background-white max-md:border-r max-md:border-l max-md:border-black fade-in"
  >
    <a href="/home#" class="flex items-center z-20">
      <v-icon
        name="hi-lightning-bolt"
        scale="1.5"
        class="text-blue h-7 w-7"
      ></v-icon>
      <p class="text-header-lg font-bold">
        <span class="text-blue">Cars</span>
        <span class="text-dark">Spot</span>
      </p>
    </a>

    <div class="flex gap-6">
      <slot></slot>
    </div>

    <div class="relative z-20">
      <AppButton text="Zadzwoń do nas" variant="raised"></AppButton>
    </div>
  </header>
</template>

<script lang="ts">
import { OhVueIcon } from "oh-vue-icons";
import { defineComponent } from "vue";
import AppButton from "./../global/Button.vue";

export default defineComponent({
  name: "AppHeader",
  components: {
    "v-icon": OhVueIcon,
    AppButton,
  },
});
</script>

<style lang="scss" scoped></style>
