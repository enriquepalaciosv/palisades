<script setup>
// eslint-disable-next-line no-undef
defineProps({
  index: { type: Number, default: 0 },
});
</script>

<template>
  <div class="back-top">
    <h1>GO BACK TO TOP</h1>
  </div>
</template>

<style lang="scss" scoped>
.back-top {
  height: 300px;
  @apply bg-gray text-white;
}
</style>
