<template>
  <div>
    <GuessDigit v-for="n in props.match.word.length" :key="n"></GuessDigit>
  </div>
</template>

<script setup>
import GuessDigit from '@/components/GuessDigit.vue'

const props = defineProps(["match"])
</script>

<style scoped>
div {
  display: flex;
  flex-direction: row;
}
</style>
