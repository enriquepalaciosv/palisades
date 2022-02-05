<script setup>
import { onMounted, ref, reactive } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { firstBundle, navigation } from "../data.js";

import Hero from "./Hero.vue";
import TimelineSection from "./TimelineSection.vue";
import BackToTop from "./BackToTop.vue";
import Navigation from "./Navigation.vue";

const state = reactive({
  active: 0,
  currentImage: new URL(`../assets/images/section-1.png`, import.meta.url),
  nextImage: new URL(`../assets/images/section-2.png`, import.meta.url),
});

const sectionClass = ref("");
const setSectionClass = (newValue) => (sectionClass.value = newValue);

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
    markers: false,
    pin: true,
  });

  firstBundle.forEach((item, index) => {
    const section = index + 1;
    ScrollTrigger.create({
      trigger: `#tl-section-${section}`,
      start: "top 80%",
      markers: false,
      onEnter: () => {
        setSectionClass(`section-${section}`);
        state.active = index;

        if (section > 1) {
          playTransition(`section-${section}.png`);
        }
      },
      onEnterBack: () => {},
      onLeave: () => {},
      onLeaveBack: () => {
        setSectionClass(`section-${section - 1}`);
        state.active = index - 1;
        if (section > 1) {
          playTransition(`section-${section - 1}.png`);
        }
      },
    });
  });
});
</script>

<template>
  <Hero />
  <div class="main-container">
    <div class="left-content">
      <Navigation :items="navigation" :active="state.active" />
      <TimelineSection
        v-for="(item, i) in firstBundle"
        :key="i"
        :index="i + 1"
        :item="item"
      />
    </div>
    <div class="right-content">
      <img :src="state.currentImage" alt="current" />
      <img :src="state.nextImage" alt="next" class="img2" />
    </div>
  </div>
  <BackToTop />
</template>

<style lang="scss" scoped>
.main-container {
  position: relative;

  display: flex;
  .left-content,
  .right-content {
    flex: 1;
  }
  .right-content {
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("section-1.png");
    height: 100vh;

    @for $i from 1 through 30 {
      &.section-#{$i} {
        background-image: url("../assets/images/section-"+#{$i}+".png");
      }
    }

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
