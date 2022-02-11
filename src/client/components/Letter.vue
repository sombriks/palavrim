<script setup>
import { defineProps } from "vue";
const { letter } = defineProps({
  letter: Object,
});
</script>
<template>
  <div :class="$style.letter"></div>
</template>
<style module>
.letter {
  min-width: 3em;
  min-height: 3em;
  margin: 1em;
  border: solid 0.5em grey;
  border-radius: 1em;
}
</style>
