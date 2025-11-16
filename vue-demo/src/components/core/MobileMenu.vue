<template>
  <div
    class="cursor-pointer flex flex-col gap-2 border border-t-0 bg-background-white border-black w-full rounded-b-lg items-center justify-center z-10"
    @click="toggle"
  >
    <div
      :class="containerClass"
      class="overflow-hidden transition-all duration-300 ease-in-out flex gap-6 w-full justify-center"
    >
      <slot></slot>
    </div>

    <v-icon :name="isExpanded ? 'bi-chevron-up' : 'bi-chevron-down'" />
  </div>
</template>

<script lang="ts">
import { OhVueIcon } from "oh-vue-icons";
import { computed, defineComponent, ref } from "vue";

export default defineComponent({
  name: "AppMobileHeader",
  components: {
    "v-icon": OhVueIcon,
  },
  setup() {
    const isExpanded = ref(false);

    const toggle = (): void => {
      isExpanded.value = !isExpanded.value;
    };

    const containerClass = computed(() => {
      return isExpanded.value ? "" : "hidden";
    });

    return {
      isExpanded,
      toggle,
      containerClass,
    };
  },
});
</script>

<style lang="scss" scoped></style>
