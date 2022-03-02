<script setup>
/* eslint-disable no-undef */
import { reactive, getCurrentInstance, onMounted } from "vue";
import Divider from "./Divider.vue";
import VueScrollTo from "vue-scrollto";
import { navigation } from "../data";

const internalInstance = getCurrentInstance();
const emitter = internalInstance.appContext.config.globalProperties.emitter;

// eslint-disable-next-line no-undef
const props = defineProps({
  content: { type: Object, default: () => {} },
  contentIndex: { type: Number, default: 0 },
});

const state = reactive({
  active: props.content.id === 10 ? 3 : 0,
});

const goTo = (index) => {
  VueScrollTo.scrollTo(`#tl-section-${index}`, 1000, {});
};

const next = navigation[props.contentIndex];

const changeActive = (item, index) => {
  state.active = index + 1;
  emitter.emit("palisades:change-image", item.itemImage);
};

const reset = () => {
  state.active = 0;
  emitter.emit("palisades:change-image", `section-${props.content.id}.png`);
};

onMounted(() => {
  if (props.content.id !== 10) {
    emitter.on("palisades:reset-sub-items", () => {
      state.active = 0;
    });
  }
});
</script>

<template>
  <div class="container" :class="`container-${props.contentIndex}`">
    <span class="mobile-indicator">{{
      contentIndex === 1 ? "START" : content.year
    }}</span>
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
          @click="changeActive(item, index)"
        >
          <img src="../assets/images/cross.svg" alt="cross" />
        </button>
        <button
          v-if="state.active === index + 1"
          class="cta active"
          @click="reset()"
        >
          <img src="../assets/images/minus.svg" alt="close" />
        </button>
      </div>
      <transition name="slide-fade">
        <div
          v-if="state.active === index + 1"
          class="item-description pb-8 accordion-1"
        >
          {{ item.itemDescription }}
          <div
            v-if="item.itemTitle === '2001. Shane McConkey Conquers the World'"
            style="margin-top: 14px"
          >
            To learn more about Shane & the freeski movement check out our
            <a
              target="_blank"
              class="text-orange"
              href="https://blog.palisadestahoe.com/legends-of-tahoe/land-of-freeski/"
              >"Land of Freeski" story here.</a
            >
          </div>
        </div>
      </transition>
      <Divider />
    </div>
    <div class="year-navigation-container">
      <div v-if="next" class="year-button" @click="goTo(contentIndex + 1)">
        <img src="../assets/images/year-button.svg" alt="next year" />
        <span class="year">{{ next.year }}</span>
      </div>
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
  @apply flex flex-col max-w-[486px] text-blue px-[16px] lg:py-[40px];

  .mobile-indicator {
    @apply text-orange font-condensed font-bold text-[12px] tracking-[0.75px] leading-[12px] mt-[50px] mb-[30px] lg:my-0 block lg:hidden;
  }

  .headline {
    @apply font-headline font-light text-[28px] mb-10 leading-[32px] tracking-[0px] lg:text-[60px] lg:mb-10 lg:leading-[64px];
  }
  .text {
    @apply font-text text-[14px] leading-[24px] tracking-[0.5px] my-6;
  }
  .interactive-item {
    @apply flex items-center justify-between flex-nowrap;
  }

  .sub-headline {
    @apply font-headline font-light text-[16px] leading-[28px] tracking-[0px] lg:text-[28px] lg:leading-[34px] lg:tracking-[0.54px] my-6 flex;
  }
  .item-description {
    @apply font-text text-[14px] tracking-[-0.2px] leading-[24px] lg:tracking-[0.5px];
  }

  .cta {
    @apply bg-orange text-white min-w-[55px] max-w-[55px] h-[25px] lg:min-w-[78px] lg:max-w-[78px] lg:h-[35px] rounded-[25px] flex justify-center items-center drop-shadow-xl;
    &.active {
      @apply bg-white;
    }
  }
  .year-navigation-container {
    @apply flex justify-center lg:justify-start;
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
}
</style>
