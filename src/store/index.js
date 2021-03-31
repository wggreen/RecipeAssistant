import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const apiURL = `https://api.spoonacular.com/recipes/random?number=3&apiKey=${process.env.VUE_APP_SPOONACULAR_KEY}`;

export default new Vuex.Store({
  state: {
    ingredients: [],
    diets: [],
    mealType: null,
    searchResults: [],
  },
  mutations: {
    addIngredient(state, payload) {
      state.ingredients = [...state.ingredients, payload];
    },
    removeIngredient(state, payload) {
      state.ingredients = state.ingredients.filter(i => {
        return i !== payload;
      });
    },
    addDiet(state, payload) {
      state.diets = [...state.diets, payload];
    },
    removeDiet(state, payload) {
      state.diets = state.diets.filter(d => {
        return d !== payload;
      });
    },
    setMealType(state, payload) {
      state.mealType = payload;
    },
    setSearchResults(state, payload) {
      state.searchResults = payload;
    }
  },
  actions: {
    async getRandomRecipes({ getters, commit }) {
      const res = await fetch(getters.recipeURL);
      const data = await res.json();
      commit("setSearchResults", data.recipes);
    }
  },
  getters: {
    recipeURL({ ingredients, diets, mealType }) {
      const tags = [...ingredients, ...diets, mealType].join(",").toLowerCase();
      return `${apiURL}&tags=${tags}`;
    }
  },
  modules: {}
});