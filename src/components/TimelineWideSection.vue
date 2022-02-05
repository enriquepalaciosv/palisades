<script setup>
import Content from "./Content.vue";
// eslint-disable-next-line no-undef
defineProps({
  item: { type: Object, default: () => {} },
});
</script>

<template>
  <section :id="`tl-section-${item.id}`" class="tl-section">
    <div class="text-image-container">
      <div class="left">
        <Content :content="item" :content-index="item.id" />
      </div>
      <div class="right">right</div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.tl-section {
  width: 100%;
  height: 100vh;
  .text-image-container {
    @apply flex;
    .left {
      @apply flex-1 flex justify-center items-center;
    }
    .right {
      @apply flex-1 flex bg-orange;
      height: 100vh;
    }
  }
}
</style>
