<template>
  <div>
    <GuessDigit></GuessDigit>
    <GuessDigit></GuessDigit>
    <GuessDigit></GuessDigit>
    <GuessDigit></GuessDigit>
    <GuessDigit></GuessDigit>
    <GuessDigit></GuessDigit>
  </div>
</template>

<script setup>
import GuessDigit from '@/components/GuessDigit.vue'
</script>

<style scoped>
div {
  display: flex;
  flex-direction: row;
}
</style>
