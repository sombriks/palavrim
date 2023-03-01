<template>
  <div><span>{{props.digit}}</span></div>
</template>

<script setup>
const props = defineProps(["digit"])

</script>

<style scoped>
div {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>