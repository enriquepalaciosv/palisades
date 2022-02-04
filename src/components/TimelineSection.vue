<script setup>
import Content from "./Content.vue";
// eslint-disable-next-line no-undef
defineProps({
  index: { type: Number, default: 0 },
  item: { type: Object, default: () => {} },
});
</script>

<template>
  <section :id="`tl-section-${index}`" class="tl-section">
    <Content :content="item" :content-index="index" />
  </section>
</template>

<style lang="scss" scoped>
.tl-section {
  height: 100vh;
  @apply flex justify-center items-center;
}
</style>
