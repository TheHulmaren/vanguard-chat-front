import { createApp } from "vue";
import App from "./App.vue";

import "@/css/output.css";
import router from "@/router";

import Axios from "axios";

const app = createApp(App);
app.config.globalProperties.$axios = Axios;
app.use(router);
app.mount("#app");
