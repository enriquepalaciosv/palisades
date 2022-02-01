<script setup>
import Content from "./Content.vue";
// eslint-disable-next-line no-undef
defineProps({
  index: { type: Number, default: 0 },
});
</script>

<template>
  <section :id="`tl-section-${index}`" class="tl-section">
    <Content />
  </section>
</template>

<style lang="scss" scoped>
.tl-section {
  height: 100vh;
}
</style>
