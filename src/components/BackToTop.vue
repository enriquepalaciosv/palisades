<script setup>
// eslint-disable-next-line no-undef
defineProps({
  index: { type: Number, default: 0 },
});
</script>

<template>
  <div class="back-top">
    <a v-scroll-to="'#tl-section-0'" href="#">Back To Top</a>
    <img
      v-scroll-to="'#tl-section-0'"
      src="../assets/images/back.svg"
      alt="back button"
      class="back-button"
    />
  </div>
</template>

<style lang="scss" scoped>
.back-top {
  height: 300px;
  @apply bg-blue text-blue font-headline font-light text-[60px] flex flex-col justify-center items-center h-[486px];

  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(239, 237, 242, 1) 50%,
    rgba(239, 237, 242, 1) 100%
  );
  .back-button {
    @apply mt-[48px];
    cursor: pointer;
  }
}
</style>
