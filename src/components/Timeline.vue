<script setup>
import { onMounted, reactive, getCurrentInstance } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { navigation } from "../data.js";

import Hero from "./Hero.vue";
import TimelineSection from "./TimelineSection.vue";
import BackToTop from "./BackToTop.vue";
import Navigation from "./Navigation.vue";
import ImageSequence from "./ImageSequence.vue";

const internalInstance = getCurrentInstance();
const emitter = internalInstance.appContext.config.globalProperties.emitter;

const state = reactive({
  active: -1,
  currentImage: "https://svamm-icros.vercel.app/assets/images/section-1.png",
  nextImage: "https://svamm-icros.vercel.app/assets/images/section-2.png",
  caption: "",
  author: "",
  expandable: false,
  expandedimage: "",
});

const playTransition = (image) => {
  // Reveal next image
  // const next = new URL(`../assets/images/${image}`, import.meta.url);
  const next = image;
  state.nextImage = next;
  gsap.to(".img2", {
    opacity: 1,
    onComplete: () => {
      // Reset: next becomes current
      setTimeout(() => {
        state.currentImage = next;
        gsap.to(".img2", { opacity: 0 });
      }, 500);
    },
  });
};

const resetSubItems = () => {
  setTimeout(() => {
    emitter.emit("palisades:reset-sub-items");
  }, 1000);
};

const preloadImages = () => {
  for (let i = 1; i < navigation.length; i++) {
    const img = new Image();
    img.src = `https://svamm-icros.vercel.app/assets/images/section-${i}.png`;
  }
};
onMounted(() => {
  preloadImages();
  gsap.registerPlugin(ScrollTrigger);

  // Overlap hero animation
  ScrollTrigger.create({
    trigger: "#tl-section-0",
    start: "top top",
    pin: true,
    pinSpacing: false,
  });

  // Unpin pictures when hitting footer
  ScrollTrigger.create({
    trigger: ".right-content",
    endTrigger: `.back-top`,
    end: "top 100%",
    markers: false,
    pin: true,
  });

  // Sections won't require transition
  const notAnimated = [1];

  navigation.forEach((item, index) => {
    const section = index + 1;
    const nextItem = navigation[index];
    const previousItem = navigation[index - 1];
    const shouldAnimate = !notAnimated.find((na) => section === na);
    ScrollTrigger.create({
      trigger: `#tl-section-${section}`,
      start: "top 80%",
      markers: false,
      onEnter: () => {
        state.active = index;
        if (shouldAnimate) {
          playTransition(nextItem.defaultImage);
          resetSubItems();
        }
        state.caption = item.caption;
        state.author = item.author;
        state.expandable = item.expandable;
        state.expandedimage = item.expandedImage;
      },
      onLeaveBack: () => {
        state.active = index - 1;
        if (shouldAnimate) {
          playTransition(previousItem.defaultImage);
          resetSubItems();
        }
        if (navigation[index - 1]) {
          state.caption = navigation[index - 1].caption;
          state.author = navigation[index - 1].author;
          state.expandable = navigation[index - 1].expandable;
          state.expandedimage = navigation[index - 1].expandedImage;
        }
      },
    });
  });

  emitter.on("palisades:change-image", (imageName) => {
    playTransition(imageName);
  });
});
</script>

<template>
  <Hero />
  <Navigation
    v-if="state.active > -1"
    :items="navigation"
    :active="state.active"
  />
  <div class="main-container">
    <div class="left-content">
      <TimelineSection v-for="(item, i) in navigation" :key="i" :item="item" />
    </div>
    <ImageSequence
      :current="state.currentImage"
      :next="state.nextImage"
      :caption="state.caption"
      :author="state.author"
      :expandable="state.expandable"
      :expandedimage="state.expandedimage"
    />
  </div>

  <BackToTop />
</template>

<style lang="scss" scoped>
.main-container {
  position: relative;
  display: flex;

  .left-content,
  .left-content-2,
  .left-content-3 {
    flex: 1;
  }
}
</style>
