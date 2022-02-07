<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();

const word = ref("");

onMounted(() => {
  word.value = route.params.game;
});
</script>
<template>
  play {{ word }}
  <br />
  <router-link to="/create">Criar</router-link>
</template>
