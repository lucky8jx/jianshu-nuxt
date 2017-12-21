<template>
<div class='nav-item sign-bar clearfix'>
  <a href='#' class='fa fa-cog fa-lg' @click.prevent='toggleModeSet'></a>
  <a href='#'>登入</a>
  <a href='#'>注册</a>
  <mode-set/>
  <a href='#'><i class='fa fa-pencil'></i>写文章</a>
</div>
</template>
<script>
  import { mapMutations } from 'vuex'
  import ModeSet from './ModeSet.vue'
  export default {
    components: {
      ModeSet
    },
    computed: {

    },
    methods: {
      ...mapMutations({
        toggleModeSet: 'toggleModeSet'
      })
    }
  }
</script>
<style>
.sign-bar {
  position: relative;
  height: 56px;
  padding: 10px 0;
  box-sizing: border-box;
}
.sign-bar > a {
  float: left;
  display: block;
  padding: 5px 15px;
  margin: 0 10px;
  color: #969696;
  text-decoration: none;
}
.sign-bar > a:first-child {
  padding: 10px 15px;
  margin-right: 0;
}
.sign-bar > a:nth-of-type(2) {
  margin-left: 0;
}
.sign-bar > a:nth-of-type(3) {
  color: #ea6f5a;
  border: 1px solid rgba(236, 97, 73, .7);
  border-radius: 20px;
}
.sign-bar > a:nth-of-type(3):hover {
  border: 1px solid rgba(236, 97, 73, 1);
}
.sign-bar > a:last-child {
  padding: 6px 15px;
  color: #fff;
  background-color: #ea6f5a;
  border-radius: 20px;
}
.sign-bar > a:last-child:hover {
  background-color: #ea6f40;
}
.sign-bar > a:last-child > i {
  margin-right: 5px;
}
</style>
