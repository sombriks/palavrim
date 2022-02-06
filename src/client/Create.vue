<script setup>
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();

const word = ref("");
const criar = (_) => router.push(`/play/${word.value}`);
</script>
<template>
  <h1>Dê uma palavra para desafiar os outros</h1>
  <input type="text" v-model="word" />
  <button @click="criar">Criar</button>
</template>
