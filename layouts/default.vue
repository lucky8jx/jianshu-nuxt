<template>
  <div @click="pageClick"
        :class="modeClass">
    <website-header/>
    <nuxt/>
    <website-footer/>
  </div>
</template>

<script>
import 'font-awesome/css/font-awesome.min.css'

import WebsiteHeader from '../components/header/WebsiteHeader.vue'
import WebsiteFooter from '../components/WebsiteFooter.vue'

export default {
  components: {
    WebsiteHeader,
    WebsiteFooter
  },
  computed: {
    modeClass: function () {
      return {
        nightMode: this.$store.state.moonMode,
        fontMode: this.$store.state.fontMode
      }
    }
  },
  methods: {
    pageClick: function () {
      this.$store.commit('hideHotSearch')
    }
  }
}
</script>

<style>
.clearfix:before,
.clearfix:after {
  content: '';
  display: table;
}
.clearfix:after {
  clear: both;
}
.clearfix {
  zoom: 1;
}
.nightMode {
  background-color: #3f3f3f;
  color: #c8c8c8;
}
.fontMode {
  font-family: Georgia,Times New Roman,Times,Songti SC,serif;
}
body {
  color: #333;
  font-family: -apple-system,SF UI Text,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif;
}
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
