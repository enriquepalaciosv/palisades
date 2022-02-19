<script setup>
import { onMounted, reactive } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { navigation } from "../data.js";

import Hero from "./Hero.vue";
import TimelineSection from "./TimelineSection.vue";
import BackToTop from "./BackToTop.vue";
import Navigation from "./Navigation.vue";
import ImageSequence from "./ImageSequence.vue";

const state = reactive({
  active: -1,
  currentImage: new URL(`../assets/images/section-1.png`, import.meta.url),
  nextImage: new URL(`../assets/images/section-2.png`, import.meta.url),
  caption: "",
  author: "",
  expandable: false,
});

const playTransition = (image) => {
  // Reveal next image
  const next = new URL(`../assets/images/${image}`, import.meta.url);
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

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.create({
    trigger: ".right-content",
    endTrigger: `.back-top`,
    end: "top 100%",
    markers: false,
    pin: true,
  });
  // Sections wont' require transition because they're not pinned
  // const notAnimated = [1, 7, 11, 12, 13];
  const notAnimated = [];

  navigation.forEach((item, index) => {
    const section = index + 1;
    const shouldAnimate = !notAnimated.find((na) => section === na);
    ScrollTrigger.create({
      trigger: `#tl-section-${section}`,
      start: "top 80%",
      markers: false,
      onEnter: () => {
        state.active = index;
        if (shouldAnimate) {
          playTransition(`section-${section}.png`);
        }
        state.caption = item.caption;
        state.author = item.author;
        state.expandable = item.expandable;
      },
      onLeaveBack: () => {
        state.active = index - 1;
        if (shouldAnimate) {
          playTransition(`section-${section - 1}.png`);
        }
        state.caption = navigation[index - 1].caption;
        state.author = navigation[index - 1].author;
        state.expandable = navigation[index - 1].expandable;
      },
    });
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
