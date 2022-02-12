<script setup>
import { checkMyself, syncGames } from "./config/db.js";
import { saveUser, getGamesFromUser } from "./config/api.js";

checkMyself().then(saveUser).then(getGamesFromUser).then(syncGames);
</script>

<template>
  <div :class="$style.shell">
    <div :class="$style.content">
      <h1>palavrim</h1>
      <router-view></router-view>
    </div>
  </div>
</template>

<style module>
.shell {
  display: flex;
  justify-content: center;
  /* flex-direction: column; */
}
.content {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
</style>
