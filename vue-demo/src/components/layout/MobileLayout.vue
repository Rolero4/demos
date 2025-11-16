<template>
  <div
    class="flex flex-col relative min-h-screen mx-auto bg-background-white w-full"
  >
    <div class="sticky top-0 right-0 left-0 flex flex-col z-30">
      <AppHeader></AppHeader>
      <AppMobileMenu>
        <AppNavigation></AppNavigation>
      </AppMobileMenu>
    </div>
    <slot></slot>
    <AppFooter></AppFooter>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppFooter from "../core/Footer.vue";
import AppHeader from "../core/Header.vue";
import AppMobileMenu from "../core/MobileMenu.vue";
import AppNavigation from "../core/Navigation.vue";

export default defineComponent({
  name: "AppMobileLayout",
  components: {
    AppHeader,
    AppFooter,
    AppMobileMenu,
    AppNavigation,
  },
});
</script>

<style lang="scss" scoped></style>
