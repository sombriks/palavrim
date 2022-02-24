<script setup>
import { ref, reactive, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

import { getGame, getResults, saveResult, saveUser } from "../config/api.js";

const router = useRouter();
const route = useRoute();

const game = ref({});

onMounted( async () => {
  game.value = await getGame(route.params.uid)
});
</script>
<template></template>
<style module></style>
