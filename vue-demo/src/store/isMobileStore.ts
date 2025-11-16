import { inject, onMounted, onUnmounted, provide, ref, Ref } from "vue";

// Define the type for the screen size object
interface ScreenSize {
  isMobile: Ref<boolean>;
}

export function useScreenSize(): ScreenSize {
  const isMobile = ref(window.innerWidth < 768);

  const checkScreenSize = (): void => {
    isMobile.value = window.innerWidth < 768;
  };

  onMounted(() => {
    window.addEventListener("resize", checkScreenSize);
  });

  onUnmounted(() => {
    window.removeEventListener("resize", checkScreenSize);
  });

  return {
    isMobile,
  };
}

export function provideScreenSize(): void {
  const screenSize = useScreenSize();
  provide("screenSize", screenSize);
}

export function useProvidedScreenSize(): ScreenSize {
  const screenSize = inject<ScreenSize>("screenSize");

  if (!screenSize) {
    throw new Error("useProvidedScreenSize must be used within a provider");
  }

  return screenSize;
}
