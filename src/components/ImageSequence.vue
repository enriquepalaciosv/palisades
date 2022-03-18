<script setup>
import { reactive } from "vue";
import gsap from "gsap";
// eslint-disable-next-line no-undef
const props = defineProps({
  current: { type: String, default: "" },
  next: { type: String, default: "" },
  position: { type: String, default: "" },
  caption: { type: String, default: "" },
  author: { type: String, default: "" },
  expandable: { type: Boolean, default: false },
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
};
</script>

<template>
  <div :class="`right-content${position ? '-' + position : ''}`">
    <img :src="props.current" alt="current" class="animated-image" />
    <img :src="props.next" alt="next" class="img2 animated-image" />
    <div class="caption-container" :class="{ expandable: props.expandable }">
      <button v-if="props.expandable" class="toggler" @click="toggle()">
        <img
          src="https://svamm-icros.vercel.app/assets/images/fullscreen.svg"
          alt="expand/collapse"
        />
      </button>
      <div class="text-container">
        <p v-if="props.caption" class="photo-caption">
          {{ props.caption.toUpperCase() }}
        </p>
        <p v-if="props.author" class="photo-author">{{ props.author }}</p>
      </div>
    </div>
  </div>
  <div class="popup">
    <img :src="props.current" alt="full width picture" class="fullwidthimg" />
    <div class="caption-container">
      <button class="toggler" @click="toggle()">
        <img
          src="https://svamm-icros.vercel.app/assets/images/fullscreen.svg"
          alt="expand/collapse"
        />
      </button>
      <div class="text-container">
        <p v-if="props.caption" class="photo-caption">
          {{ props.caption.toUpperCase() }}
        </p>
        <p v-if="props.author" class="photo-author">{{ props.author }}</p>
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
  background: linear-gradient(
    180deg,
    rgba(9, 9, 9, 0) 0%,
    rgba(0, 0, 0, 0.5) 80%,
    rgb(0, 0, 0) 100%
  );

  &.expandable {
    padding: 0 0 20px 20px;
  }

  .text-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    padding-bottom: 4px;

    .photo-caption {
      @apply font-condensed font-medium text-[14px] tracking-[0.88px] leading-[14px];
    }
    .photo-author {
      @apply font-caption text-[12px] tracking-[0px] leading-[16px] mt-[10px];
    }
  }
}
</style>
