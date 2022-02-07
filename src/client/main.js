import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";

import App from "./App.vue";
import { routes } from "./config/routes.js";

console.log(process.env.API_BASE_URL);

const app = createApp(App);

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
app.use(router);

const div = document.createElement("div");
document.body.appendChild(div);
app.mount(div);
