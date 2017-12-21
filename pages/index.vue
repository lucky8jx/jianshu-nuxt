<template>
  <section class="container">
    <banner/>
    <div>
      <h1 class="title">
        first-nuxt
      </h1>
      <h2 class="subtitle">
        Nuxt.js project
      </h2>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">Documentation</a>
        <a href="https://github.com/nuxt/nuxt.js" target="_blank" class="button--grey">GitHub</a>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
import Logo from '~/components/Logo.vue'
import Banner from '~/components/Banner'

export default {
  components: {
    Logo,
    Banner
  },
  layout: 'default',
  async fetch ({store, params}) {
    let { data } = await axios.get('/api/hotSearch')
    // console.log(data)
    store.commit('receiveData', data)
    store.commit('banner/receiveData', data)
  }
}
</script>

<style>
.container {
  width: 760px;
  margin: 56px auto 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* text-align: center; */
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
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
