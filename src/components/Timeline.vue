<script setup>
import { onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import items from "../data.js";
gsap.registerPlugin(ScrollTrigger);
import Hero from "./Hero.vue";
import TimelineSection from "./TimelineSection.vue";
import BackToTop from "./BackToTop.vue";

// eslint-disable-next-line no-undef
defineProps({
  index: { type: Number, default: 0 },
});

onMounted(() => {
  ScrollTrigger.create({
    trigger: ".right-content",
    endTrigger: `#tl-section-${items.length - 1}`,
    markers: false,
    pin: true,
  });

  items.forEach((item, index) => {
    ScrollTrigger.create({
      trigger: `#tl-section-${index + 1}`,
      markers: true,
      onEnter: () => {
        // console.log(`Now in section #${index + 1}`);
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
    <div
      class="right-content"
      :style="'background-image: url(src/assets/images/section-1.png)'"
    />
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
    @apply bg-blue-500;
    // background-image: url("../assets/images/section-1.png");
    background-size: cover;
    background-repeat: no-repeat;

    height: 100vh;
  }
}
</style>
