<script setup>
import { ref, onMounted } from "vue";
import { checkMyself } from "../config/db.js";
import { getGamesFromUser, saveUser } from "../config/api.js";
import GameCard from "../components/GameCard.vue";

const me = ref({});
const myGames = ref([]);
const loaded = ref(false);

onMounted(async () => {
  me.value = await checkMyself();
  await saveUser(me.value);
  const ret = await getGamesFromUser({ data: { uid: me.value.uid } });
  myGames.value = ret.data;
  loaded.value = true;
});
</script>
<template>
  <div :class="$style.content">
    <div v-if="!myGames.length && loaded">
      <h1>Você ainda não criou nenhuma palavra</h1>
    </div>
    <GameCard :class="$style.box" v-for="mg in myGames" :mg="mg"></GameCard>
  </div>
</template>
<style module>
.content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}
</style>
