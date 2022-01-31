
import VueScrollTo from "vue-scrollto"
import { createApp } from "vue";
import App from "./App.vue";
import './index.css'

const timelineApp = createApp(App);
timelineApp.use(VueScrollTo)
timelineApp.mount("#app");
