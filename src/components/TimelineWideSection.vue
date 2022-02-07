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

const toggle = () => {
  state.fullWidth = !state.fullWidth;
  if (state.fullWidth) {
    gsap.to(".left", { opacity: 0 });
    gsap.to(".left", { flex: 0 });
    gsap.to(".left", { display: "none" });
  } else {
    gsap.to(".left", { display: "flex" });
    gsap.to(".left", { opacity: 1 });
    gsap.to(".left", { flex: 1 });
  }
  VueScrollTo.scrollTo(`#tl-section-${props.item.id}`, 1000, {});
};
</script>

<template>
  <section :id="`tl-section-${item.id}`" class="tl-section">
    <div class="text-image-container">
      <div class="left">
        <Content :content="item" :content-index="item.id" />
      </div>
      <div class="right" :class="`tl-section-${item.id}`">
        <button class="toggler" @click="toggle()">
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
      .toggler {
        position: absolute;
        bottom: 20px;
        left: 32px;
      }
    }
  }
}
</style>
