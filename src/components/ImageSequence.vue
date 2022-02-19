<script setup>
// eslint-disable-next-line no-undef
const props = defineProps({
  current: { type: String, default: "" },
  next: { type: String, default: "" },
  position: { type: String, default: "" },
  caption: { type: String, default: "" },
  author: { type: String, default: "" },
  expandable: { type: Boolean, default: false },
});
</script>

<template>
  <div :class="`right-content${position ? '-' + position : ''}`">
    <img :src="props.current" alt="current" class="animated-image" />
    <img :src="props.next" alt="next" class="img2 animated-image" />
    <div class="caption-container" :class="{ expandable: props.expandable }">
      <button v-if="props.expandable" class="toggler">
        <img src="../assets/images/fullscreen.svg" alt="expand/collapse" />
      </button>
      <div class="text-container">
        <p class="photo-caption">{{ props.caption }}</p>
        <p class="photo-author">{{ props.author }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
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
  padding: 0 0 20px 80px;
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
