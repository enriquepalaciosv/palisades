<script setup>
import Content from "./Content.vue";
// eslint-disable-next-line no-undef
defineProps({
  item: { type: Object, default: () => {} },
});
</script>

<template>
  <section :id="`tl-section-${item.id}`" class="tl-section">
    <Content :content="item" :content-index="item.id" />
  </section>
</template>

<style lang="scss" scoped>
.tl-section {
  height: 100vh;
  @apply flex justify-center lg:items-center;
}
</style>
