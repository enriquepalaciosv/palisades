<script setup>
import VueScrollTo from "vue-scrollto";
import Dot from "./Dot.vue";
// eslint-disable-next-line no-undef
defineProps({
  items: { type: Array, default: () => [] },
  active: { type: Number, default: 0 },
});

const goTo = (index) => {
  VueScrollTo.scrollTo(`#tl-section-${index}`, 1000, {});
};
</script>

<template>
  <div class="navigation">
    <ul>
      <li
        v-for="(item, index) in items"
        :key="index"
        class="item"
        @click="goTo(index + 1)"
      >
        <span v-if="active === index" class="text">
          {{ index === 0 ? "START" : item.year }}
        </span>
        <img v-if="index === 0" src="../assets/images/bar.svg" alt="bar" />
        <Dot v-if="index > 0" :active="active === index" />
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.navigation {
  @apply font-condensed text-orange text-[12px];
  position: fixed;
  top: 10%;
  left: 0;
  max-height: 100vh;
  display: flex;
  justify-content: center;
  z-index: 3;
  display: none;
  @media screen and (min-width: 1200px) {
    display: block;
  }
  @media screen and (min-width: 1400px) {
    width: 120px;
  }

  .item {
    .text {
      margin-bottom: 4px;
    }
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px;
    cursor: pointer;
    min-height: 20px;
  }
}
</style>
