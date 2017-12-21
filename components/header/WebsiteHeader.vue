<template>
  <header>
    <nav class='nav clearfix'>
      <a class='logo nav-item' href='/'>简书</a>
      <div class='menu-btn' @click="toggle">
        <i class='fa fa-bars fa-2x'></i>
      </div>
      <home-search :class="toggleMenuClass"/>
      <sign-bar/>
    </nav>
  </header>
</template>

<script>
import { mapMutations } from 'vuex'

import HomeSearch from './HomeSearch.vue'
import SignBar from './SignBar'
export default {
  components: {
    HomeSearch,
    SignBar
  },
  computed: {
    toggleMenuClass () {
      return this.$store.state.showMenu ? 'toggleOn' : ''
    }
  },
  methods: {
    ...mapMutations({
      toggle: 'toggleMenu'
    })
  }
}
</script>
<style>
.nav {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: 56px;
  background-color: #fff;
  border-bottom: 1px solid #f0f0f0;
}
.nightMode .nav {
  border-color: #2f2f2f;
  background-color: #3f3f3f;
}
.nav > .nav-item:not(.home-search) {
  float: left;
  height: 56px;
  margin-left: 15px;
}
.nav > .menu-btn {
  box-sizing: boder-box;
  float: left;
  display: none;
  width: 45px;
  height: 44px;
  padding: 5px 0;
  margin: 6px 0;
  color: #bbb;
  text-align: center;
  background-color: #e0e0e0;
  border: 1px solid #e0e0e0;
  border-radius:5px;
  transition: all 0.2s ease-in;
}
.nav > .menu-btn:hover {
  background-color: #fff;
}
.nav  ul {
  list-style: none;
}
.nav > .nav-item:last-child {
  float: right;
}
.logo {
  display: block;
  height: 56px;
  width: 50px;
  padding: 14px 30px 15px 30px;
  margin-right: 30px;
  font-size: 0;
  background: url(//cdn2.jianshu.io/assets/web/logo-58fd04f6f0de908401aa561cda6a0688.png) no-repeat center center;
  background-size: 50px 20px;
}

@media (max-width: 768px) and (min-width: 320px) {
  .nav > .menu-btn {
    display: block;
  }
}
</style>
