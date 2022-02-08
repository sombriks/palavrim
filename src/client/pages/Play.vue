<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

import { getGame } from "../config/api.js";

const router = useRouter();
const route = useRoute();

const word = ref("");
const game = ref({});

onMounted(async () => {
  const ret = await getGame(route.params.game);
  game.value = ret.data;
  word.value = game.value.word;
});
</script>
<template>
  play {{ word }}
  <br />
  <router-link to="/create">Criar</router-link>
</template>
