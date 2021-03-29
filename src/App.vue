<template>
  <div>
    <button @click="getRandomRecipes">FIND RECIPES</button>
    <recipe-results />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import RecipeResults from "./components/RecipeResults";

export default {
  components: {
    RecipeResults,
  },
  methods: {
    ...mapActions(["getRandomRecipes"]),
  },
};
</script>

<style>
</style>