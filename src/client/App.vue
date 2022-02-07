<script setup>
import { ref } from "vue";
import { checkMyself, syncGames } from "./config/db.js";
import { saveUser, getGames } from "./config/api.js";

checkMyself().then(saveUser).then(getGames).then(syncGames);
</script>

<template>
  <router-view></router-view>
</template>
