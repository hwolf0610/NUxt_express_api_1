<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">Nuxt_1</h1>
      <h2 class="subtitle">My divine Nuxt.js project</h2>
      <div class="links">
        <nuxt-link to="table" class="button--green">Go to blog Table</nuxt-link>
        <nuxt-link to="Articles" class="button--green">Go to blog articles(JSON)</nuxt-link>
        <nuxt-link to="getmessage_online" class="button--green">Go to blog articles(online)</nuxt-link>
        <nuxt-link to="helloworldStore" class="button--green">
          Go to Show Store page
          <h2>Counter:{{this.$store.state.helloWorld.counter }}</h2>
          <h2>Counter:{{this.$store.state.helloWorld.string1 }}</h2>
        </nuxt-link>

        <a href="https://nuxtjs.org/" target="_blank" class="button--green">Documentation</a>
        <a href="https://github.com/nuxt/nuxt.js" target="_blank" class="button--grey">GitHub</a>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";

export default {
  components: {
    Logo
  }
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
