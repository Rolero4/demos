<template>
  <div class="w-full max-w-[1264px] flex justify-center z-5">
    <swiper
      :slides-per-view="isMobile ? 1 : 2"
      :space-between="64"
      :modules="modules"
      :pagination="true"
      class="swiper-container"
    >
      <swiper-slide
        v-for="(image, index) in images"
        :key="index"
        class="swiper-slide"
      >
        <div class="max-md:w-full">
          <img
            :src="require(`@/assets/images/${image}`)"
            :alt="image"
            class="w-full object-cover h-[400px] max-md:h-auto"
          />
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script lang="ts">
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import { defineComponent, PropType } from "vue";
import { useProvidedScreenSize } from "../../store/isMobileStore";

export default defineComponent({
  name: "AppSwiper",
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    images: {
      type: Array as PropType<string[]>,
      required: true,
    },
  },

  setup() {
    const { isMobile } = useProvidedScreenSize();

    return {
      isMobile,
      modules: [Pagination],
    };
  },
});
</script>

<style lang="scss" scoped>
.swiper-container {
  @apply w-full;
}

.swiper-slide {
  @apply w-full object-cover;
}
</style>
