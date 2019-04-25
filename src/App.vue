<template>
  <div id="app">
    <img src="./assets/logo.png">
    <Navigation/>
    <router-view/>
  </div>
</template>

<script>
import Navigation from "@/components/layout/Navigation";

export default {
  name: "App",
  components: {
    Navigation
  }
};
</script>

<style>
</style>
