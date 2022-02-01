<script setup>
import Divider from "./Divider.vue";
// eslint-disable-next-line no-undef
defineProps({
  headline: { type: String, default: "" },
});
</script>

<template>
  <div class="container">
    <h1 class="headline">9,000 Years Ago: The Area's First Inhabitants</h1>
    <Divider />
    <p class="text">
      An indigenous Native American people, the Washoe Tribe inhabited lands
      around Lake Tahoe dating back thousands of years. They hunted, gathered,
      and traveled on hand-hewn snowshoes in the winter months. Their tribe name
      comes from the Washoe word, Wašiw, meaning “people from here.” The Washoe
      first called Lake Tahoe “Da ow ga,” the Washoe word for “lake,” which is
      thought to be the source for the name Lake Tahoe. Da ow aga is central to
      the tribe's identity and is still considered the tribe's most sacred
      place.
    </p>
    <div>
      <Divider />
      <div class="interactive-item">
        <div class="sub-headline">1844. Western Migration</div>
        <button class="cta">
          <img src="../assets/images/cross.svg" alt="cross" />
        </button>
      </div>
      <Divider />
    </div>
  </div>
</template>

<style lang="scss" scoped>
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
  }
}
</style>
