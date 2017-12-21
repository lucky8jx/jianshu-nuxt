<template>
<ul class='nav-item home-search'>
  <li class='home active'>
    <a href='/'>
      <i class='fa fa-home fa-lg'></i>
      <span>首页</span>
    </a>
  </li>
  <li class='downloadApp'>
    <a href='#'>
      <i class='fa fa-arrow-circle-o-down fa-lg'></i>
      <span>下载App</span>
    </a>
  </li>
  <li class='search'>
    <input type='text' placeholder='搜索' @click.stop='toggleOn'/>
    <a href='#' class='fa fa-search'></a>
    <hot-search :class='toggleHotSearchClass'/>
  </li>
</ul>
</template>
<script>
  import HotSearch from './HotSearch.vue'

  export default {
    components: {
      HotSearch
    },
    computed: {
      toggleHotSearchClass () {
        return this.$store.state.showHotSearch ? 'toggleOn' : ''
      }
    },
    methods: {
      toggleOn: function () {
        this.$store.commit('showHotSearch')
        // this.$store.dispatch('fetchHotSearch')
      }
    }
  }
</script>
<style>
.home-search > li {
  float: left;
  margin-left: 10px;
}
.home-search > li:not(.search) > a {
  display: block;
  padding: 17px 10px;
  color: inherit;
  text-decoration: none;
}
.home-search > li.active > a {
  color: #ea6f5a;
  background: none;
}
.home-search > li:not(.search) {
  transition: all 0.3s ease-in;
}
.home-search > li:not(.search):hover {
  background-color: #f0f0f0;
}
.home-search > li.active:hover {
  background: none;
}
.search {
  position: relative;
  padding: 8px 10px;
}
.search > input {
  display: block;
  height: 40px;
  width: 150px;
  padding: 0 20px;
  border: none;
  border-radius: 20px;
  background-color: #f0f0f0;
  transition: all 0.3s ease-in;
}
.search > input:focus {
  outline: none;
  width: 200px;
}
.nightMode .search > input {
  background-color: #4f4f4f;
  color: inherit;
}
.search > a {
  position: absolute;
  right: 15px;
  top:14px;
  display: block;
  padding: 5px;
  color: #969696;
  text-decoration: none;
  border-radius: 50%;
  transition: all 0.3s ease-in;
}
.search > input:focus + a {
  color: #fff;
  background-color: #969696;
}
@media (min-width: 1439px) {
  .home > a > i,
  .downloadApp> a > i {
    display: inline-block
  }
}
@media (max-width: 1439px) and (min-width: 1081px) {
  .home > a > i,
  .downloadApp > a > i {
    display: none;
  }
}
@media (max-width: 1080px) and (min-width: 768px) {
  .home > a > span,
  .downloadApp > a > span {
    display: none;
    }
}
@media (min-width: 768px) {
  .home-search {
    float: left;
  }
}
@media (max-width: 768px) and (min-width: 320px) {
  .home-search {
    position: absolute;
    top: 56px;
    width: 100%;
    height: 0;
    display: block;
    opacity: 0;
    padding-left: 0;
    margin: 0;
    transition: all 0.2s ease-in;
  }
  .nav > .home-search.toggleOn {
    height: inherit;
    opacity: 1;
    transition: all 0.2s ease-in;
  }
  .home-search > li {
    position: relative;
    height: inherit;
    float: none;
    text-align: center;
    margin-left: 0;
    background-color: #fff;
    border-bottom: 1px solid #f0f0f0;
  }
  .home-search > li > input {
    width: 100%;
  }
  .home > a > i,
  .downloadApp > a > i {
    display: none;
  }
  .search > input:focus {
    width: 100%;
  }
  .hot-search {
    opacity: 0 !important;
  }
}
</style>
