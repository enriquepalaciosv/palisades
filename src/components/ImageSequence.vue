<script setup>
import { reactive } from "vue";
import gsap from "gsap";
import FullScreenIcon from "./FullScreenIcon.vue";
// eslint-disable-next-line no-undef
const props = defineProps({
  current: { type: String, default: "" },
  next: { type: String, default: "" },
  position: { type: String, default: "" },
  caption: { type: String, default: "" },
  author: { type: String, default: "" },
  expandable: { type: Boolean, default: false },
  expandedimage: { type: String, default: "" },
});

const state = reactive({
  open: false,
});

const toggle = () => {
  state.open = !state.open;
  gsap.to(".popup", {
    display: state.open ? "flex" : "none",
    opacity: state.open ? 1 : 0,
    zIndex: state.open ? 100 : 0,
  });

  if (state.open) {
    gsap.to("#firstArrow", { rotate: -90, y: 10, x: 2 });
    gsap.to("#secondArrow", { rotate: 90, y: -1, x: 8 });
  } else {
    gsap.to("#firstArrow", { rotate: 90, y: -1, x: 8 });
    gsap.to("#secondArrow", { rotate: -90, y: 10, x: 2 });
  }
};
</script>

<template>
  <div :class="`right-content${position ? '-' + position : ''}`">
    <img :src="props.current" alt="current" class="animated-image" />
    <img :src="props.next" alt="next" class="img2 animated-image" />
    <div
      class="caption-container"
      :class="{ expandable: props.expandable, hascaption: props.caption }"
    >
      <button v-if="props.expandable" class="toggler" @click="toggle()">
        <!-- <img
          src="https://svamm-icros.vercel.app/assets/images/fullscreen.svg"
          alt="expand/collapse"
        /> -->
        <FullScreenIcon />
      </button>
      <div class="text-container">
        <p v-if="props.caption" class="photo-caption">
          {{ props.caption }}
        </p>
        <p v-if="props.author" class="photo-author">
          {{ props.author.toUpperCase() }}
        </p>
      </div>
    </div>
  </div>
  <div class="popup">
    <img
      :src="props.expandedimage"
      alt="full width picture"
      class="fullwidthimg"
    />
    <div class="caption-container" :class="{ hascaption: props.caption }">
      <div class="full-width-button-and-caption">
        <button class="toggler" @click="toggle()">
          <FullScreenIcon />
        </button>
        <div class="text-container">
          <p v-if="props.caption" class="photo-caption">
            {{ props.caption }}
          </p>
          <p v-if="props.author" class="photo-author">
            {{ props.author.toUpperCase() }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.popup {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: none;
  opacity: 0;

  .fullwidthimg {
    width: 100%;
  }
}

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
  display: none;
  @media screen and (min-width: 1200px) {
    display: flex;
  }

  .animated-image {
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

.caption-container {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: flex-end;
  color: white;
  padding: 0 0 20px 20px;

  &.hascaption {
    background: linear-gradient(
      180deg,
      rgba(9, 9, 9, 0) 0%,
      rgba(0, 0, 0, 0.5) 80%,
      rgb(0, 0, 0) 100%
    );
  }

  &.expandable {
    padding: 0 0 20px 20px;
  }

  .text-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    padding-bottom: 4px;
    max-width: 600px;

    .photo-caption {
      @apply font-caption font-medium text-[14px] tracking-[0.88px] leading-[18px];
    }
    .photo-author {
      @apply font-condensed text-[12px] tracking-[0px] leading-[16px] mt-[10px];
    }
  }

  .full-width-button-and-caption {
    display: flex;
    position: absolute;
    left: 51.1%;
  }
}
</style>
