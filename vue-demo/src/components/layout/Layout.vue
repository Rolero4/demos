<template>
  <AppMobileLayout v-if="isMobile">
    <slot></slot>
  </AppMobileLayout>
  <AppDesktopLayout v-else>
    <slot></slot>
  </AppDesktopLayout>
</template>

<script lang="ts">
import AppDesktopLayout from "@/components/layout/DesktopLayout.vue";
import AppMobileLayout from "@/components/layout/MobileLayout.vue";
import { defineComponent } from "vue";
import { useProvidedScreenSize } from "../../store/isMobileStore";

export default defineComponent({
  name: "AppLayout",
  components: {
    AppMobileLayout,
    AppDesktopLayout,
  },
  setup() {
    const { isMobile } = useProvidedScreenSize();
    return { isMobile };
  },
});
</script>

<style lang="scss" scoped></style>
