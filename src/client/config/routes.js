import Create from "../pages/Create.vue";
import Play from "../pages/Play.vue";
import MyGames from "../pages/MyGames.vue";
import RecentGames from "../pages/RecentGames.vue";
import GameStatus from "../pages/GameStatus.vue";

export const routes = [
  { path: "/", component: Create },
  { path: "/create", component: Create },
  { path: "/play/:game", component: Play },
  { path: "/my-games", component: MyGames },
  { path: "/recent-games", component: RecentGames },
  { path: "/game-status/:uid", component: GameStatus },
];
