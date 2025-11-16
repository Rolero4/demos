<template>
  <div
    class="flex flex-col relative min-h-screen mx-auto bg-background-white items-center"
  >
    <div class="w-full max-w-[1440px]">
      <div class="sticky top-0 right-0 left-0 z-1">
        <AppHeader>
          <AppLines />
          <AppNavigation></AppNavigation>
        </AppHeader>
      </div>
    </div>

    <main class="h-full w-full">
      <slot></slot>
    </main>
    <AppFooter></AppFooter>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppFooter from "../core/Footer.vue";
import AppHeader from "../core/Header.vue";
import AppNavigation from "../core/Navigation.vue";
import AppLines from "../core/Lines.vue";

export default defineComponent({
  name: "AppDesktopLayout",
  components: {
    AppHeader,
    AppFooter,
    AppNavigation,
    AppLines,
  },
});
</script>

<style lang="scss" scoped></style>
