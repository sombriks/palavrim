<script setup>
import { defineProps } from "vue";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();

const { mg } = defineProps(["mg"]);
</script>
<template>
  <div :class="$style.box">
    <div>
      <router-link :to="`/play/${mg.uid}`">{{ mg.word }}</router-link>
    </div>
    <div :class="[$style.actions]">
      <div :class="$style.action">
        <router-link :to="`/game-status/${mg.uid}`">
          <span>🗠</span>
        </router-link>
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
  color: purple;
  font-size: 2em;
}
.action {
  align-items: center;
}
.action:visited {
  color: darkslateblue;
}
</style>
