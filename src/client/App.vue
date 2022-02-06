<script setup>
import { ref } from "vue";
const name = ref("world!!");
const env = process.env.NODE_ENV;
</script>

<template>
  <router-view></router-view>
</template>
