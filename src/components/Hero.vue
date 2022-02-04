<script setup>
/* eslint-disable no-undef */
import { onMounted } from "vue";
import gsap from "gsap";
import VueScrollTo from "vue-scrollto";

defineProps({});
import arrowImage from "../assets/images/arrow.svg";
const goNext = () => {
  VueScrollTo.scrollTo("#tl-section-1", 1000, {});
};

let tl = gsap.timeline();

onMounted(() => {
  gsap.fromTo(
    "#tl-section-0",
    {
      backgroundSize: "110%",
      backgroundPositionX: "2%",
    },
    {
      backgroundSize: "100%",
      backgroundPositionX: "0%",
      duration: 7,
    }
  );

  tl.fromTo(
    ".main-headline",
    { opacity: 0 },
    { opacity: 1, delay: 1, duration: 1 }
  );
  tl.fromTo(".secondary-headline", { opacity: 0 }, { opacity: 1 });
  tl.fromTo(".text", { opacity: 0 }, { opacity: 1 });
  tl.fromTo(".arrow", { opacity: 0 }, { opacity: 1 });
});
</script>

<template>
  <section id="tl-section-0" class="tl-section">
    <p class="main-headline">Milestones</p>
    <p class="secondary-headline">PALISADES TAHOE</p>
    <p class="text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam.
    </p>
    <img class="arrow" :src="arrowImage" alt="arrow" @click="goNext()" />
  </section>
</template>

<style lang="scss" scoped>
.tl-section {
  @apply text-white;
  height: 100vh;
  background-image: url("../assets/images/hero.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .main-headline {
    @apply font-headline text-orange text-[175px];
    letter-spacing: -1px;
    line-height: 212px;
  }

  .secondary-headline {
    @apply font-wide font-bold text-white text-[28px];
    letter-spacing: 3.92px;
    line-height: 30px;
  }

  .text {
    @apply font-text text-white text-[18px];
    letter-spacing: 0.56px;
    line-height: 28px;
    max-width: 596px;
    text-align: center;
    margin-top: 40px;
  }

  .arrow {
    margin-top: 56px;
    cursor: pointer;
  }
}
</style>
