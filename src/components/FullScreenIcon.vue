<script setup>
// eslint-disable-next-line no-undef
defineProps({});
</script>

<template>
  <svg
    width="58px"
    height="58px"
    viewBox="0 0 58 58"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
  >
    <title>Icon/Fullscreen</title>
    <defs>
      <circle id="path-1" cx="20" cy="20" r="20"></circle>
      <filter
        x="-40.0%"
        y="-27.5%"
        width="180.0%"
        height="180.0%"
        filterUnits="objectBoundingBox"
        id="filter-2"
      >
        <feOffset
          dx="0"
          dy="5"
          in="SourceAlpha"
          result="shadowOffsetOuter1"
        ></feOffset>
        <feMorphology
          radius="2"
          operator="erode"
          in="SourceAlpha"
          result="shadowInner"
        ></feMorphology>
        <feOffset
          dx="0"
          dy="5"
          in="shadowInner"
          result="shadowInner"
        ></feOffset>
        <feComposite
          in="shadowOffsetOuter1"
          in2="shadowInner"
          operator="out"
          result="shadowOffsetOuter1"
        ></feComposite>
        <feGaussianBlur
          stdDeviation="4.5"
          in="shadowOffsetOuter1"
          result="shadowBlurOuter1"
        ></feGaussianBlur>
        <feColorMatrix
          values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.3 0"
          type="matrix"
          in="shadowBlurOuter1"
        ></feColorMatrix>
      </filter>
    </defs>
    <g
      id="Timeline"
      stroke="none"
      stroke-width="1"
      fill="none"
      fill-rule="evenodd"
    >
      <g
        id="Palisades_Timeline_R2"
        transform="translate(-754.000000, -16386.000000)"
      >
        <g id="1991" transform="translate(120.000000, 15440.000000)">
          <g id="Image/Start" transform="translate(612.000000, 0.000000)">
            <g
              id="Icon/Fullscreen"
              transform="translate(51.000000, 980.000000) rotate(-180.000000) translate(-51.000000, -980.000000) translate(31.000000, 960.000000)"
            >
              <g id="Oval">
                <use
                  fill="black"
                  fill-opacity="1"
                  filter="url(#filter-2)"
                  xlink:href="#path-1"
                ></use>
                <circle
                  stroke="#FFFFFF"
                  stroke-width="2"
                  stroke-linejoin="square"
                  cx="20"
                  cy="20"
                  r="19"
                ></circle>
              </g>
              <path
                d="M28,28 L26,28 L26,22 L20,22 L20,20 L28,20 L28,28 Z"
                id="firstArrow"
                fill="#FFFFFF"
                transform="translate(24.000000, 24.000000) rotate(-270.000000) translate(-24.000000, -24.000000) "
              ></path>
              <path
                d="M20,20 L18,20 L18,14 L12,14 L12,12 L20,12 L20,20 Z"
                id="secondArrow"
                fill="#FFFFFF"
                transform="translate(16.000000, 16.000000) rotate(-90.000000) translate(-16.000000, -16.000000) "
              ></path>
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
</template>
