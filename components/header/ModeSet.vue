<template lang="html">
<transition name="mode-set">
  <ul class="mode-set"
      @click='toggleModeSet'
      v-show="$store.state.showModeSet">
    <li class="clearfix">
      <div class="moon">
        <i class="fa fa-moon-o fa-lg"
            :class="moonNight"></i>
        <span>夜间模式</span>
      </div>
      <div class="switch moon-switch">
        <a href="#"
            :class="moonSwitchActiveOn"
            @click.prevent="toggleMoonMode">开</a>
        <a href="#"
            :class="moonSwitchActiveOff"
            @click.prevent="toggleMoonMode">关</a>
      </div>
    </li>
    <li class="font-set">
      <div class="switch">
        <a href="#"
          :class="fontSwitchActiveOn"
          @click.prevent="toggleFontMode">宋体</a>
        <a href="#"
          :class="fontSwitchActiveOff"
          @click.prevent="toggleFontMode">黑体</a>
      </div>
      <div class="switch">
        <a href="#">简</a>
        <a href="#" class="active">繁</a>
      </div>
    </li>
  </ul>
</transition>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  computed: {
    moonSwitchActiveOn: function () {
      if (this.$store.state.moonMode) {
        return 'active'
      }
      return ''
    },
    moonSwitchActiveOff: function () {
      if (!this.$store.state.moonMode) {
        return 'active'
      }
      return ''
    },
    fontSwitchActiveOn: function () {
      if (this.$store.state.fontMode) {
        return 'active'
      }
      return ''
    },
    fontSwitchActiveOff: function () {
      if (!this.$store.state.fontMode) {
        return 'active'
      }
      return ''
    },
    moonNight: function () {
      if (this.$store.state.moonMode) {
        return 'night'
      }
      return ''
    }
  },
  methods: {
    ...mapMutations({
      toggleModeSet: 'toggleModeSet',
      toggleMoonMode: 'toggleMoonMode',
      toggleFontMode: 'toggleFontMode'
    })
  }
}
</script>

<style lang="css">
.mode-set-enter-active {
  transition: all .3s ease;
}
.mode-set-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.mode-set-enter,
.mode-set-leave-to {
  transform: translateX(10px);
  opacity: 0;
}

.nightMode .mode-set {
  background-color: #3f3f3f;
}
.mode-set {
  position: absolute;
  left: -165px;
  top: 56px;
  width: 235px;
  padding: 15px;
  margin: 0;
  color: #969696;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .2);
  border-radius: 4px;
}
.mode-set:before,
.mode-set:after {
  content: '';
  position: absolute;
  top: -5px;
  right: 30px;
  width: 10px;
  height: 10px;
  background-color: inherit;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
}
.mode-set:before {
  z-index: -1;
  box-shadow: 0 0 8px rgba(0, 0, 0, .2);
}
.mode-set > li:first-child {
  padding: 0 0 15px;
  border-bottom: 1px solid #eee;
}
.nightMode .mode-set > li:first-child {
  border-color: #2f2f2f;
}
.mode-set > li:first-child > div {
  display: block;
  float: right;
}
.mode-set > li:first-child > .moon {
  float: left;
}
.mode-set a {
  color: inherit;
  text-decoration: none;
}
.moon {
  margin-top: 10px;
}
.moon > .night {
  color: #c5c514;
}
.moon > span {
  padding-left: 5px;
}
.switch > a {
  display: inline-block;
  padding: 10px 15px;
  border: 1px solid #e5e5e5;
}
.switch > a.active {
  color: #fff;
  background-color: #6dacf4;
  border-color: #6dacf4;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, .1);
}

.nightMode .switch > a {
  color: #c8c8c8;
  border-color: #2f2f2f;
}
.nightMode .switch > a.active {
  color: #dcdcdc;
  background-color: #3f7cc1;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, .2);
}
.switch > a:first-child {
  border-right: none;
  border-radius: 20px 0 0 20px;
}
.switch > a:last-child {
  border-left: none;
  border-radius: 0 20px 20px 0;
}
.font-set > .switch:first-child {
  margin: 20px 0 15px;
}
.font-set > .switch:last-child {
  margin: 10px 0;
}
.font-set > .switch > a {
  width: 50%;
  text-align: center;
}

</style>
