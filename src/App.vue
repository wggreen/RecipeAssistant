<template></template>

<script>
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions(["getRandomRecipes"]),
  },
};
</script>

<style>
</style>