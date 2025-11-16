<template>
  <button class="btn" :class="buttonClass" @click="handleClick">
    {{ text }}
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ButtonVariant } from "../../model/misc.model";

export default defineComponent({
  name: "AppButton",
  props: {
    variant: {
      type: String as () => ButtonVariant,
      default: "raised",
    },
    text: {
      type: String,
      default: "",
    },
  },
  computed: {
    buttonClass(): string {
      switch (this.variant) {
        case "outline":
          return "btn-outline";
        case "raised":
          return "btn-raised";
        default:
          return "";
      }
    },
  },
  methods: {
    handleClick(event: Event) {
      this.$emit("click", event);
    },
  },
});
</script>

<style lang="scss" scoped>
.btn {
  @apply px-[15px] rounded-lg py-[10px] text-base font-semibold transition-colors font-flex cursor-pointer;

  &-raised {
    @apply bg-blue text-white shadow-md hover:bg-navy;
  }

  &-outline {
    @apply bg-transparent border-2 border-blue text-blue hover:bg-blue hover:text-white;
  }
}
</style>
