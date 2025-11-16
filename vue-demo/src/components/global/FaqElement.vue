<template>
  <div class="flex flex-col gap-y-4">
    <h2 class="text-white text-header-lg font-bebas w-full -tracking-[0.03rem]">
      {{ header }}
    </h2>
    <p
      class="text-white text-justify font-condensed text-paragraph-sm leading-[21px]"
    >
      <span v-if="isExpanded">
        {{ text }}
      </span>
      <span v-else> {{ trucateText(text) }} [...] </span>
    </p>
    <button
      @click="toggle"
      class="flex flex-col gap-2 text-white font-condensed w-[80px]"
    >
      <div class="flex gap-3 items-center">
        <span>{{ isExpanded ? "Zwiń" : "Rozwiń" }}</span>
        <v-icon :name="isExpanded ? 'hi-arrow-up' : 'hi-arrow-down'" />
      </div>
      <hr />
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "AppFaqElement",
  props: {
    header: {
      type: String,
      default: "",
    },
    text: {
      type: String,
      default: "",
    },
  },
  setup() {
    const isExpanded = ref(false);
    const maxLength = 180;

    const toggle = (): void => {
      isExpanded.value = !isExpanded.value;
    };

    const trucateText = (text: string): string => {
      return text.slice(0, maxLength);
    };

    return {
      isExpanded,
      trucateText,
      toggle,
    };
  },
});
</script>

<style lang="scss" scoped></style>
