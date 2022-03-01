<script setup>
import { ref, computed, onMounted } from "vue";
import { checkMyself } from "../config/db.js";
import { saveUser, getRecentGames } from "../config/api.js";

const recentGames = ref([]);

const letters = word => {
  return word.split("").map(l => '🟪').join("");
}

onMounted(async () => {
  console.log("sync user");
  const result = await checkMyself().then(saveUser).then(getRecentGames);
  recentGames.value = result.data;
});
</script>
<template>
  <div :class="$style.box">
    <div :class="$style.item" v-for="g in recentGames">
      <router-link :to="`/play/${g.uid}`"> {{letters(g.word)}} </router-link>
      <div>{{g.guesses}} tentativas</div>
    </div>
  </div>
</template>
<style module>
.box {
  display: flex;
  flex-wrap: wrap;
}
.item {
  display: flex;
  flex-direction: column;
  margin: 0.5em;
  padding: 0.5em;;
  min-width: 5.5em;
  min-height: 5.5em;
  justify-content: space-around;
  align-items: center;
  border: solid 0.25em purple;
  border-radius: 0.5em;
  color: purple;
  background-color: lightpink;
}
</style>
