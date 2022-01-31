<script setup>
import { onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import Hero from "./Hero.vue";
import TimelineSection from "./TimelineSection.vue";
import BackToTop from "./BackToTop.vue";
// eslint-disable-next-line no-undef
defineProps({
  index: { type: Number, default: 0 },
});
const items = [
  {
    title: "9,000 years ago",
  },
  {
    title: "1939",
  },
  {
    title: "1943",
  },
  {
    title: "1944",
  },
  {
    title: "1945",
  },
];

onMounted(() => {
  ScrollTrigger.create({
    trigger: ".right-content",
    endTrigger: `#tl-section-${items.length - 1}`,
    markers: false,
    pin: true,
  });
});
</script>

<template>
  <Hero />
  <div class="main-container">
    <div class="left-content">
      <TimelineSection v-for="(item, i) in items" :key="i" :index="i + 1" />
    </div>
    <div class="right-content" />
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
    background-image: url("../assets/images/section-1-0.png");
    background-size: cover;
    background-repeat: no-repeat;

    height: 100vh;
  }
}
</style>
