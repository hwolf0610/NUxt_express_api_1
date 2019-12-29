<template>
  <article>
    <section>
      <h1>Page Header</h1>
      <div class="container links">
         <ul>
          <li v-for="breed in breeds" :key="breed">
            <p class="breed button--green">{{breed}}</p>
          </li>
        </ul>
      </div>
    </section>
  </article>
</template>

<script>
import axios from "axios";

export default {
  asyncData({ params }, callback) {
    axios.get("https://dog.ceo/api/breeds/list").then(res => {
      callback(null, { breeds: res.data.message });
    });
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
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
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