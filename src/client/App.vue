<script setup>
import { ref } from "vue";
import { checkMyself } from "./db.js";
import { saveUser } from "./api.js";

checkMyself().then(saveUser);
</script>

<template>
  <router-view></router-view>
</template>
