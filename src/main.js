import { createApp } from "vue";
import App from "./App.vue";
import './main.css'

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { AiAcclaim } from "oh-vue-icons/icons";
import { BiStopCircle } from "oh-vue-icons/icons";
import { FaArrowsAltV } from "oh-vue-icons/icons";
import { MdStopcircleSharp } from "oh-vue-icons/icons";
addIcons(AiAcclaim, MdStopcircleSharp, FaArrowsAltV);

const app = createApp(App);
app.component("v-icon", OhVueIcon);
app.mount("#app");