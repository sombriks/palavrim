<template>
  <div class="guess-digit">
    <span>{{props.guess.guess[props.index]}}</span>
  </div>
</template>

<script setup>
import {computed} from "vue";

const props = defineProps(["guess", "index"])

const bg = computed(() => {
  const status = props.guess.status[props.index]
  if(status.exactMatch) return "lightgreen"
  if(status.letterPresent) return "lightyellow"
  if(status.letterNotPresent) return "lightsalmon"
  return "white"
})
</script>

<style scoped>
.guess-digit {
  --guess-size: 3em;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid cadetblue;
  border-radius: 0.3em;
  margin: 0.2em;
  max-width: var(--guess-size);
  min-width: var(--guess-size);
  max-height: var(--guess-size);
  min-height: var(--guess-size);
  background-color: v-bind(bg);
}
</style>
