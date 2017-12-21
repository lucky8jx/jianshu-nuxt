<template>
  <div class="hot-search" @click.stop="toggleOn">
    <div class="header clearfix">
      <span>热门搜索</span>
      <a href="#" @click.stop.prevent="refreshHotSearch">
        <i class="fa fa-refresh"></i>
        换一批
      </a>
    </div>
    <ul class="content">
      <li v-for="(item, index) in hotSearch" :key="index">
        <a href="#">{{item}}</a>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    data: function () {
      return {
        hotSearch: this.$store.state.hotSearchData.slice(0, 9),
        end: 9
      }
    },
    computed: {
      hotSearchData: {
        get: function () {
          return this.$store.state.hotSearchData.slice(0, 9)
        },
        set: function (newValue) {
          this.hotSearch = newValue
        }
      }

    },
    methods: {
      refreshHotSearch: function () {
        let that = this
        let length = that.$store.state.hotSearchData.length
        let begin = that.end
        let end
        if (begin === 0) {
          end = 9
        } else {
          end = begin + 8
        }
        that.hotSearchData = that.$store.state.hotSearchData.slice(begin, end)
        if (end - length > 0) {
          that.end = 0
        } else {
          that.end = end
        }
      },
      toggleOn: function () {
        this.$store.commit('showHotSearch')
      }
    }
  }
</script>
<style media="screen">
.nightMode .hot-search {
  background-color: #3f3f3f;
}
.nightMode .hot-search > .content a {
  color: #969696;
  border-color: #545454;
}
.hot-search {
  position: absolute;
  top: 56px;
  left: 10px;
  /* z-index: 1; */
  display: none;
  width: 250px;
  padding: 20px;
  margin: 0;
  opacity: 0;
  color: #969696;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
}
.hot-search:before,
.hot-search:after {
  content: '';
  position: absolute;
  top: -5px;
  left: 27px;
  width: 10px;
  height: 10px;
  background-color: inherit;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
}
.hot-search::before {
  z-index: -1;
  box-shadow: 0 0 8px rgba(0, 0, 0, .2);
}
.hot-search.toggleOn {
  display: block;
  opacity: 1;
}
.hot-search > .header > span {
  float: left;
}
.hot-search > .header > a {
  float: right;
  color: #969696;
  text-decoration: none;
  transition: all 0.1s ease-in;
}
.hot-search > .header > a:hover {
  color: #808080;
}
.hot-search > .content {
  margin: 5px 0;
  padding: 5px 0 0;
}
.hot-search > .content > li {
  display: inline-block;
  padding: 5px 0;
  margin: 5px 10px 5px 0;
}
.hot-search > .content  a {
  padding: 2px 6px;
  color: #787878;
  text-decoration: none;
  border: 1px solid #ddd;
  border-radius: 3px;
}
</style>
