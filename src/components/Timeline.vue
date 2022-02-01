<script setup>
import { onMounted, ref } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import items from "../data.js";

import Hero from "./Hero.vue";
import TimelineSection from "./TimelineSection.vue";
import BackToTop from "./BackToTop.vue";

const sectionClass = ref("");
const setSectionClass = (newValue) => (sectionClass.value = newValue);

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.create({
    trigger: ".right-content",
    endTrigger: `#tl-section-${items.length - 1}`,
    markers: false,
    pin: true,
  });

  items.forEach((item, index) => {
    const section = index + 1;
    ScrollTrigger.create({
      trigger: `#tl-section-${section}`,
      markers: false,
      onEnter: () => {
        setSectionClass(`section-${section}`);
      },
      onEnterBack: () => {},
      onLeave: () => {},
      onLeaveBack: () => {
        setSectionClass(`section-${section - 1}`);
      },
    });
  });
});
</script>

<template>
  <Hero />
  <div class="main-container">
    <div class="left-content">
      <TimelineSection v-for="(item, i) in items" :key="i" :index="i + 1" />
    </div>
    <div class="right-content" :class="sectionClass" />
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
        background-image: url("section-"+#{$i}+".png");
      }
    }
  }
}
</style>
