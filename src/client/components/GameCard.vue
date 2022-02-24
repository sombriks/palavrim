<script setup>
import { defineProps } from "vue";
const { mg } = defineProps(["mg"]);
</script>
<template>
  <div :class="$style.box">
    <div>
      <router-link :to="`/play/${mg.uid}`">{{ mg.word }}</router-link>
    </div>
    <div :class="[$style.actions]">
      <div :class="$style.action">
        <span class="icofont-chart-bar-graph"></span>
      </div>
      <div :class="$style.action">
        <span class="icofont-share"></span>
      </div>
    </div>
  </div>
</template>
<style module>
.box {
  display: flex;
  flex-direction: column;
  margin: 0.5em;
  min-width: 5.5em;
  min-height: 5.5em;
  justify-content: space-around;
  align-items: center;
  border: solid 0.25em purple;
  border-radius: 0.5em;
  color: purple;
  background-color: lightpink;
}
.actions {
  display: flex;
  justify-content: space-around;
  align-items: center;
  justify-content: space-around;
  flex-wrap: nowrap;
  width: 100%;
}
.action {
  align-items: center;
}
</style>
