<script setup>
import { onMounted, reactive } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  navigation,
  firstBundle,
  firstWide,
  secondBundle,
  wideBundle,
  lastSingle,
  lastWide,
} from "../data.js";

import Hero from "./Hero.vue";
import TimelineSection from "./TimelineSection.vue";
import TimelineWideSection from "./TimelineWideSection.vue";
import BackToTop from "./BackToTop.vue";
import Navigation from "./Navigation.vue";
import firstImage from "../assets/images/section-1.png";

const state = reactive({
  active: -1,
  currentImage: new URL(`../assets/images/section-1.png`, import.meta.url),
  nextImage: new URL(`../assets/images/section-2.png`, import.meta.url),
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
    endTrigger: `#tl-section-7`,
    end: "top 100%",
    markers: false,
    pin: true,
  });
  // Sections wont' require transition because they're not pinned
  const notAnimated = [1, 7, 11, 12, 13];

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
      },
      onLeaveBack: () => {
        state.active = index - 1;
        if (shouldAnimate) {
          playTransition(`section-${section - 1}.png`);
        }
      },
    });
  });

  const pingScroll = () => {
    ScrollTrigger.create({
      trigger: ".right-content-2",
      endTrigger: `#tl-section-10`,
      end: "top 0%",
      markers: false,
      pin: true,
    });
  };

  ScrollTrigger.create({
    trigger: "#tl-section-8",
    start: "top 0%",
    onEnter: () => {
      pingScroll();
    },
    markers: false,
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
      <TimelineSection v-for="(item, i) in firstBundle" :key="i" :item="item" />
    </div>
    <div class="right-content">
      <img :src="state.currentImage || firstImage" alt="current" />
      <img :src="state.nextImage" alt="next" class="img2" />
    </div>
  </div>
  <TimelineWideSection :item="firstWide" />
  <div class="main-container">
    <div class="left-content-2">
      <TimelineSection
        v-for="(item, i) in secondBundle"
        :key="i"
        :item="item"
      />
    </div>
    <div class="right-content-2">
      <img :src="state.currentImage" alt="current" />
      <img :src="state.nextImage" alt="next" class="img2" />
    </div>
  </div>
  <TimelineWideSection v-for="(item, i) in wideBundle" :key="i" :item="item" />
  <div class="main-container">
    <div class="left-content-3">
      <TimelineSection :item="lastSingle" />
    </div>
    <div class="right-content-3">
      <img :src="state.currentImage || firstImage" alt="current" />
      <img :src="state.nextImage" alt="next" class="img2" />
    </div>
  </div>
  <TimelineWideSection :item="lastWide" />
  <BackToTop />
</template>

<style lang="scss" scoped>
.main-container {
  position: relative;

  display: flex;
  .left-content,
  .left-content-2,
  .left-content-3,
  .right-content,
  .right-content-2,
  .right-content-3 {
    flex: 1;
  }
  .right-content,
  .right-content-2,
  .right-content-3 {
    height: 100vh;
    position: relative;

    img {
      position: absolute;
      top: 0;
      right: 0;
      width: 100%;
      height: 100vh;
      object-fit: cover;
    }

    .img2 {
      opacity: 0;
      -webkit-transition: opacity 500ms ease-in-out;
      -moz-transition: opacity 500ms ease-in-out;
      -ms-transition: opacity 500ms ease-in-out;
      -o-transition: opacity 500ms ease-in-out;
      transition: opacity 500ms ease-in-out;
    }
  }
}
</style>
