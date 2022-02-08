import Create from "../pages/Create.vue";
import Play from "../pages/Play.vue";

export const routes = [
  { path: "/", component: Create },
  { path: "/create", component: Create },
  { path: "/play/:game", component: Play },
];
