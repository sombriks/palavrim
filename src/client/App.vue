<script setup>
import { ref } from "vue";
const name = ref("world!!");
const env = process.env.NODE_ENV;
</script>

<template>
  <h1>Hellooo {{ name }}</h1>
  <p>Hi aqui é {{ env }}</p>
</template>
