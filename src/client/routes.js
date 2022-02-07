import Create from "./Create.vue";
import Play from "./Play.vue";

export const routes = [
  { path: "/", component: Create },
  { path: "/create", component: Create },
  { path: "/play/:game", component: Play },
];
