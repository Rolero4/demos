<template>
  <div
    class="flex flex-col w-full py-[88px] max-md:py-6 mb-8 max-w-[1440px] px-[80px] mx-auto max-md:px-4"
  >
    <h4
      class="font-condensed font-[400] text-[21.5px] leading-[32.5px] text-blue"
    >
      Prezentacja firmy
    </h4>
    <h3 class="font-bebas font-[400] text-[40px] leading-[48px] text-dark">
      ZOBACZ NASZĄ GALERIĘ ZDJĘĆ
    </h3>
    <div class="flex w-full gap-4 mt-7 mb-[88px] max-md:mb-10">
      <button
        class="btn"
        :class="vehicleState === 'car' ? 'btn-active' : ''"
        @click="selectVehicle('car')"
      >
        Samochody osobowe
      </button>
      <button
        class="btn"
        :class="vehicleState === 'van' ? 'btn-active' : ''"
        @click="selectVehicle('van')"
      >
        Samochody dostawcze
      </button>
    </div>
    <div class="flex w-full justify-center">
      <AppSwiper :images="selectedImages"></AppSwiper>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { VehicleType } from "../../model/misc.model";
import AppSwiper from "../global/Swiper.vue";

type GallerySectionData = {
  vanImages: string[];
  carImages: string[];
  vehicleState: VehicleType;
};

export default defineComponent({
  name: "AppGallerySection",
  components: {
    AppSwiper,
  },
  data(): GallerySectionData {
    return {
      vanImages: [
        "van.jpg",
        "van.jpg",
        "van.jpg",
        "van.jpg",
        "van.jpg",
        "van.jpg",
        "van.jpg",
      ],
      carImages: [
        "car1.jpg",
        "car2.jpg",
        "car3.jpg",
        "car1.jpg",
        "car2.jpg",
        "car3.jpg",
      ],
      vehicleState: "car" as VehicleType,
    };
  },
  computed: {
    selectedImages(): string[] {
      return this.vehicleState === "car" ? this.carImages : this.vanImages;
    },
  },
  methods: {
    selectVehicle(vehicle: VehicleType): void {
      this.vehicleState = vehicle;
    },
  },
});
</script>

<style lang="scss" scoped>
.btn {
  @apply text-dark transition-all font-flex font-[600] text-[15px] leading-[22.5px] -tracking-[0.02rem];
  &-active {
    @apply text-blue underline;
  }
}
</style>
