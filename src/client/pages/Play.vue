<script setup>
import { ref, reactive, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

import Keyboard from "../components/Keyboard.vue";
import GuessLine from "../components/GuessLine.vue";
import LineResult from "../components/LineResult.vue";

import { letterMode } from "../components/LetterMode.js";

import { checkMyself } from "../config/db.js";

import { getGame, getResults, saveResult, saveUser } from "../config/api.js";

const router = useRouter();
const route = useRoute();

const game = ref({ word: "" });
const results = ref([]);
const aWord = ref("");
const user = ref({});
const victory = ref(false);

onMounted(async () => {
  user.value = await checkMyself();
  await saveUser(user.value);
  const ret = await getGame(route.params.game);
  game.value = ret.data;
  const ret2 = await getResults({
    game_uid: game.value.uid,
    user_uid: user.value.uid,
  });
  results.value = ret2.data;
  victory.value = results.value.filter((r) => r.is_correct).length > 0;
});

const myGuess = async (guess) => {
  if (guess.length < game.value.word.length) {
    console.log("too small");
    return;
  } else if (guess.length > game.value.word.length) {
    guess = guess.split("");
    while (guess.length > game.value.word.length) {
      guess.pop();
    }
    guess = guess.join("");
  }
  const ret = await saveResult({
    guess,
    user_uid: user.value.uid,
    game_uid: game.value.uid,
    is_correct: guess == game.value.word,
  });
  results.value.push(ret.data);
  aWord.value = "";
  victory.value = results.value.filter((r) => r.is_correct).length > 0;
};

const newLetter = (letter) => {
  aWord.value += letter;
};

const apaga = () => {
  const w = aWord.value.split("");
  w.pop();
  aWord.value = w.join("");
};

const makeShare = () => {
  const letters = game.value.word.split("").map((e) => e.toUpperCase());
  const modes = [];
  results.value.map((result) => {
    const guesses = result.guess.split("").map((e) => e.toUpperCase());
    modes.push(letterMode(letters, guesses));
  });
  const msg = `
Adivinhei a palavra!
${modes
  .map((row) =>
    row
      .map((letter) => {
        if (letter == "match") return "🟩";
        else if (letter == "doubles") return "🟦";
        else if (letter == "exists") return "🟧";
        else return "⬛";
      })
      .join("")
  )
  .join("\n")}
Tente em ${window.location.href}
  `;
  navigator.clipboard.writeText(msg);
  alert("texto copiado para clipboard!");
};
</script>
<template>
  <div :class="$style.section">
    <div :class="$style.margin">
      <LineResult
        :game="game"
        v-for="res in results"
        :result="res"
      ></LineResult>
      <div v-if="!results.length">
        Tente uma palavra com {{ game.word.length }} letras
      </div>
    </div>
  </div>
  <div :class="[$style.section, $style.col]" v-if="victory">
    <h1>Sucesso!</h1>
    <div>
      <button :class="$style.share" @click="makeShare()">
        Compartilhar 🔗
      </button>
    </div>
  </div>
  <div v-if="!victory" :class="$style.section">
    <GuessLine
      :enabled="!victory"
      v-if="game.word"
      v-model="aWord"
      :word="game.word"
      @enter-guess="myGuess"
    ></GuessLine>
  </div>
  <div :class="$style.section">
    <Keyboard
      :enabled="!victory"
      v-model="aWord"
      :game="game"
      :results="results"
      @new-letter="newLetter"
      @erase="apaga"
      @enter="myGuess(aWord)"
    ></Keyboard>
  </div>
</template>
<style module>
.section {
  display: flex;
  justify-content: center;
}
.section,
.margin {
  margin: 0.2em;
}
.col {
  flex-direction: column;
  align-items: center;
}

.share {
  border: solid 0.25em;
  color: green;
  border-color: green;
  background-color: lightgreen;

  border-radius: 3px;
  border-radius: 0.5em;
  min-width: 2.5em;
  min-height: 3em;
  margin: 0.05em;
  text-align: center;
  vertical-align: middle;
  font-family: "Courier New", Courier, monospace;
  font-weight: bolder;
  justify-content: center;
  text-align: center;
}
</style>
