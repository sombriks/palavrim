<template>
  <div>
    <GuessDigit v-for="(d, i) in props.guess.status"
                :key="i" :guess="props.guess" :index="i"></GuessDigit>
  </div>
</template>

<script setup>
import GuessDigit from '@/components/GuessDigit.vue'

const props = defineProps(["guess"])
</script>

<style scoped>
div {
  display: flex;
  flex-direction: row;
}
</style>
