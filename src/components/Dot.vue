<script setup>
// eslint-disable-next-line no-undef
defineProps({
  active: { type: Boolean, default: false },
});
</script>

<template>
  <svg
    width="4px"
    height="4px"
    viewBox="0 0 4 4"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
  >
    <title>Oval/Inactive</title>
    <g
      id="Timeline"
      stroke="none"
      stroke-width="1"
      fill="none"
      fill-rule="evenodd"
    >
      <g
        id="Palisades_Timeline_R2"
        transform="translate(-58.000000, -2197.000000)"
        :fill="active ? '#FF5E00' : '#D2D1DA'"
      >
        <g
          id="Nav/Left/Timeline/Full-Copy"
          transform="translate(0.000000, 2157.000000)"
        >
          <circle id="Oval/Inactive" cx="60" cy="42" r="2"></circle>
        </g>
      </g>
    </g>
  </svg>
</template>
