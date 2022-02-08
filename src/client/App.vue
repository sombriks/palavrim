<script setup>
import { checkMyself, syncGames } from "./config/db.js";
import { saveUser, getGamesFromUser } from "./config/api.js";

checkMyself().then(saveUser).then(getGamesFromUser).then(syncGames);
</script>

<template>
  <router-view></router-view>
</template>
