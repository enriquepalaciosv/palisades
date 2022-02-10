
import VueScrollTo from "vue-scrollto"
import { createApp } from "vue";
import App from "./App.vue";
import { Vue3Mq } from "vue3-mq";
import LottieAnimation from "lottie-vuejs/src/LottieAnimation.vue";
import './index.css'

const timelineApp = createApp(App);

timelineApp.use(VueScrollTo)
timelineApp.use(Vue3Mq)
timelineApp.use(LottieAnimation)

timelineApp.mount("#app");
