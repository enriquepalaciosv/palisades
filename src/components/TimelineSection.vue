<script setup>
// eslint-disable-next-line no-undef
defineProps({
  index: { type: Number, default: 0 },
});
</script>

<template>
  <section :id="`tl-section-${index}`" class="tl-section">
    <h1>Section {{ index }}</h1>
  </section>
</template>

<style lang="scss" scoped>
.tl-section {
  @apply bg-orange text-white;
  border: 5px solid white;
  height: 100vh;
}
</style>
