<script setup>
/* eslint-disable no-undef */
import { onMounted } from "vue";
import gsap from "gsap";
import VueScrollTo from "vue-scrollto";
import { useMq } from "vue3-mq";
import LottieAnimation from "lottie-vuejs/src/LottieAnimation.vue";

defineProps({});

const goNext = () => {
  VueScrollTo.scrollTo("#tl-section-1", 1000, {});
};

let tl = gsap.timeline();
const mq = useMq();
const smallScreens = ["xs", "sm", "md"];
onMounted(() => {
  if (!smallScreens.find((sc) => sc === mq.current)) {
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
  }
  tl.to(".animation", { display: "none", delay: 3 });

  tl.fromTo(
    [".main-headline", ".secondary-headline", ".hero-text", ".arrow"],
    { display: "none" },
    { display: "block" }
  );
});
</script>

<template>
  <section id="tl-section-0" class="tl-section">
    <div class="animation">
      <lottie-animation path="palisades_animation.json" />
    </div>

    <p class="main-headline">Milestones</p>
    <p class="secondary-headline">PALISADES TAHOE</p>
    <p class="hero-text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam.
    </p>
    <img
      class="arrow"
      src="https://svamm-icros.vercel.app/assets/images/arrow.svg"
      alt="arrow"
      @click="goNext()"
    />
  </section>
</template>

<style lang="scss" scoped>
.tl-section {
  @apply text-white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url("https://svamm-icros.vercel.app/assets/images/hero.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: -600px center;
  @media screen and (min-width: 1024px) {
    background-position: center;
  }
  .animation {
    width: 50%;
  }
  .main-headline {
    @apply font-headline text-orange text-[50px] tracking-[-0.29px] leading-[61px] lg:text-[175px] lg:tracking-[-1px] lg:leading-[212px];
  }

  .secondary-headline {
    @apply font-wide text-center text-white mt-[30px] text-[18px] leading-[30px] tracking-[2.52px] font-medium  lg:text-[28px] lg:leading-[30px] lg:tracking-[3.92px] lg:font-bold;
  }

  .hero-text {
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
