<script setup>
import { onMounted, ref, reactive } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import items from "../data.js";

import Hero from "./Hero.vue";
import TimelineSection from "./TimelineSection.vue";
import BackToTop from "./BackToTop.vue";
import Navigation from "./Navigation.vue";

const state = reactive({
  active: 0,
});

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
      start: "top 80%",
      markers: false,
      onEnter: () => {
        setSectionClass(`section-${section}`);
        state.active = index;
      },
      onEnterBack: () => {},
      onLeave: () => {},
      onLeaveBack: () => {
        setSectionClass(`section-${section - 1}`);
        state.active = index - 1;
      },
    });
  });
});
</script>

<template>
  <Hero />
  <div class="main-container">
    <div class="left-content">
      <Navigation :items="items" :active="state.active" />
      <TimelineSection
        v-for="(item, i) in items"
        :key="i"
        :index="i + 1"
        :item="item"
      />
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
        background-image: url("../assets/images/section-"+#{$i}+".png");
      }
    }
  }
}
</style>
