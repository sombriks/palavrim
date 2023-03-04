<template>
  <GuessLine v-for="(guess, i) in props.match.guesses"
             :key="i" :guess="guess"></GuessLine>
</template>

<script setup>
import GuessLine from '@/components/GuessLine.vue'

const props = defineProps(["match"])
</script>

<style scoped></style>
