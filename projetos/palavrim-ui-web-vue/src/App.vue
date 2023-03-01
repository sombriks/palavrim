<template>
  <header>
    <h1>palavrim</h1>
  </header>
  <main>
    <GuessPanel>
      <GuessLine>
        <GuessDigit></GuessDigit>
        <GuessDigit></GuessDigit>
      </GuessLine>
    </GuessPanel>
    <GameKeyboard></GameKeyboard>
    <StatsDialog></StatsDialog>
    <HelpDialog></HelpDialog>
  </main>
  <footer>
    <i>
      &copy; sombriks {{ date }}
    </i>
  </footer>
</template>

<script setup>
import {ref} from "vue";
import GuessPanel from "@/components/GuessPanel.vue";
import GuessLine from "@/components/GuessLine.vue";
import GameKeyboard from "@/components/GameKeyboard.vue";
import StatsDialog from "@/components/StatsDialog.vue";
import HelpDialog from "@/components/HelpDialog.vue";
import GuessDigit from "@/components/GuessDigit.vue";

const date = ref(new Date().getFullYear())
</script>

<style scoped>
header, main, footer {
  display: flex;
  justify-content: center;
  align-content: center;
}
</style>
