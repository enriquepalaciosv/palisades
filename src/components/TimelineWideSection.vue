<script setup>
import Content from "./Content.vue";
import gsap from "gsap";
import { reactive } from "vue";
import VueScrollTo from "vue-scrollto";
// eslint-disable-next-line no-undef
const props = defineProps({
  item: { type: Object, default: () => {} },
});

const state = reactive({
  fullWidth: false,
});

const toggle = (id) => {
  state.fullWidth = !state.fullWidth;
  if (state.fullWidth) {
    gsap.to(`.left-section-${id}`, { opacity: 0 });
    gsap.to(`.left-section-${id}`, { flex: 0 });
    gsap.to(`.left-section-${id}`, { display: "none" });
  } else {
    gsap.to(`.left-section-${id}`, { display: "flex" });
    gsap.to(`.left-section-${id}`, { opacity: 1 });
    gsap.to(`.left-section-${id}`, { flex: 1 });
  }
  VueScrollTo.scrollTo(`#tl-section-${props.item.id}`, 1000, {});
};
</script>

<template>
  <section :id="`tl-section-${item.id}`" class="tl-section">
    <div class="text-image-container">
      <div class="left" :class="`left-section-${item.id}`">
        <Content :content="item" :content-index="item.id" />
      </div>
      <div class="right" :class="`tl-section-${item.id}`">
        <button class="toggler" @click="toggle(item.id)">
          <img src="../assets/images/fullscreen.svg" alt="expand/collapse" />
        </button>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.tl-section {
  width: 100%;
  height: 100vh;
  .text-image-container {
    @apply flex;
    .left {
      @apply flex-1 flex justify-center items-center;
    }
    .right {
      @apply flex-1;
      height: 100vh;
      position: relative;
      &.tl-section-7 {
        background-image: url("../assets/images/section-7.png");
        background-size: cover;
        background-position: center;
      }
      &.tl-section-11 {
        background-image: url("../assets/images/section-11.png");
        background-size: cover;
        background-position: center;
      }
      &.tl-section-12 {
        background-image: url("../assets/images/section-12.png");
        background-size: cover;
        background-position: center;
      }
      &.tl-section-13 {
        background-image: url("../assets/images/section-13.png");
        background-size: cover;
        background-position: center;
      }
      &.tl-section-15 {
        background-image: url("../assets/images/section-15.png");
        background-size: cover;
        background-position: center;
      }
      .toggler {
        position: absolute;
        bottom: 20px;
        left: 32px;
      }
    }
  }
}
</style>
