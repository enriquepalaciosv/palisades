<script setup>
// eslint-disable-next-line no-undef
defineProps({
  index: { type: Number, default: 0 },
});
</script>

<template>
  <div class="back-top">
    <a v-scroll-to="'#tl-section-0'" href="#">GO BACK TO TOP</a>
  </div>
</template>

<style lang="scss" scoped>
.back-top {
  height: 300px;
  @apply bg-blue text-white flex justify-center items-center;
}
</style>
