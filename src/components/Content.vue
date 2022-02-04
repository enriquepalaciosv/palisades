<script setup>
/* eslint-disable no-undef */
import { reactive } from "vue";
import Divider from "./Divider.vue";
import VueScrollTo from "vue-scrollto";
import data from "../data";
// eslint-disable-next-line no-undef
const props = defineProps({
  content: { type: Object, default: () => {} },
  contentIndex: { type: Number, default: 0 },
});

const goTo = (index) => {
  VueScrollTo.scrollTo(`#tl-section-${index}`, 1000, {});
};

const state = reactive({
  active: 0,
});

const next = data[props.contentIndex];
</script>

<template>
  <div class="container">
    <h1 class="headline">{{ content.title }}</h1>
    <transition name="slide-fade">
      <div v-if="state.active === 0" class="accordion-0">
        <Divider v-if="content.description" />
        <p class="text">
          {{ content.description }}
        </p>
        <Divider v-if="content.description" />
      </div>
    </transition>
    <div v-for="(item, index) in content.items" :key="index + 1">
      <div class="interactive-item">
        <div class="sub-headline">{{ item.itemTitle }}</div>
        <button
          v-if="state.active !== index + 1"
          class="cta"
          @click="state.active = index + 1"
        >
          <img src="../assets/images/cross.svg" alt="cross" />
        </button>
        <button
          v-if="state.active === index + 1"
          class="cta active"
          @click="state.active = 0"
        >
          <img src="../assets/images/minus.svg" alt="close" />
        </button>
      </div>
      <transition name="slide-fade">
        <div v-if="state.active === index + 1" class="pb-8 accordion-1">
          {{ item.itemDescription }}
        </div>
      </transition>
      <Divider />
    </div>
    <div v-if="next" class="year-button" @click="goTo(contentIndex + 1)">
      <img src="../assets/images/year-button.svg" alt="next year" />
      <span class="year">{{ next.year }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(20px);
  opacity: 0;
}

.container {
  @apply flex flex-col max-w-[486px] text-blue;
  .headline {
    @apply font-headline font-light text-[60px] mb-10 leading-[64px] tracking-[0px];
  }
  .text {
    @apply font-text text-[14px] leading-[24px] tracking-[0.5px] my-6;
  }
  .interactive-item {
    @apply flex items-center justify-between flex-nowrap;
  }

  .sub-headline {
    @apply font-headline font-light text-[28px] leading-[34px] tracking-[0.54px] my-6 flex;
  }

  .cta {
    @apply bg-orange text-white w-[78px] h-[35px] rounded-[25px] flex justify-center items-center drop-shadow-xl;
    &.active {
      @apply bg-white;
    }
  }
  .year-button {
    @apply font-condensed text-gray text-[14px] leading-[14px] tracking-[0.88px];
    margin-top: 40px;
    position: relative;
    width: 78px;
    cursor: pointer;
    .year {
      position: absolute;
      top: 45%;
      left: 33%;
    }
  }
}
</style>
