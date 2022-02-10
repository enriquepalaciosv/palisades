
import VueScrollTo from "vue-scrollto"
import { createApp } from "vue";
import App from "./App.vue";
import './index.css'
import { Vue3Mq } from "vue3-mq";

const timelineApp = createApp(App);

timelineApp.use(VueScrollTo)
timelineApp.use(Vue3Mq)

timelineApp.mount("#app");
