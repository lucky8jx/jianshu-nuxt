<template lang="html">
  <div class="banner"
        @mouseenter="toggleBannerBtnOn"
        @mouseleave="toggleBannerBtnOff">
    <div class="banner-btn angle-left"
          v-show="bannerBtnFlag"
          @click="turnLeft">
      <i class="fa fa-angle-left"></i>
    </div>
    <div class="banner-btn angle-right"
          v-show="bannerBtnFlag"
          @click="turnRight">
      <i class="fa fa-angle-right"></i>
    </div>
    <ul class="banner-one">
      <transition-group name="banner-one" mode="out-in">
      <li v-for="(item, index) in bannerImage"
          :key="index"
          v-show="index === count">
        <a href="#">
          <img :src="item.image" :alt="item.title">
        </a>
      </li>
    </transition-group>
    </ul>
    <ul class="banner-two">
      <li>
        <ul>
          <transition-group name="banner-two" mode="out-in">
          <li v-for="(item, index) in bannerImage"
              :key="index"
              v-show="index === bannerBarCount">
            <a href="#">
              <img :src="item.image"
                    :alt="item.title">
            </a>
          </li>
        </transition-group>
        </ul>
      </li>
      <li>
        <ul>
          <transition-group name="banner-three" mode="out-in">
          <li v-for="(item, index) in bannerImage"
              :key="index"
              v-show="index === bannerBarTopCount">
            <a href="#">
              <img :src="item.image"
                    :alt="item.title">
            </a>
          </li>
        </transition-group>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: () => ({
    bannerInterval: null,
    count: 0,
    bannerBarCount: 1,
    bannerBarTopCount: 2,
    bannerBtnFlag: false
  }),
  computed: {
    bannerImage: function () {
      return this.$store.state.banner.bannerImage
    }
  },
  methods: {
    toggleBannerBtnOn: function () {
      this.bannerBtnFlag = !this.bannerBtnFlag
      clearInterval(this.bannerInterval)
    },
    toggleBannerBtnOff: function () {
      this.bannerBtnFlag = !this.bannerBtnFlag
      this.setBannerInterval()
    },
    turnLeft: function () {
      let length = this.$store.state.banner.bannerImage.length
      this.count = this.count < 1 ? length - 1 : this.count - 1
      this.bannerBarCount = this.bannerBarCount < 1 ? length - 1 : this.bannerBarCount - 1
      this.bannerBarTopCount = this.bannerBarTopCount < 1 ? length - 1 : this.bannerBarTopCount - 1
    },
    turnRight: function () {
      let length = this.$store.state.banner.bannerImage.length
      this.count = this.count > length - 2 ? 0 : this.count + 1
      this.bannerBarCount = this.bannerBarCount > length - 2 ? 0 : this.bannerBarCount + 1
      this.bannerBarTopCount = this.bannerBarTopCount > length - 2 ? 0 : this.bannerBarTopCount + 1
    },
    setBannerInterval: function () {
      let that = this
      let length = that.$store.state.banner.bannerImage.length
      // let halfLength = length / 2
      // that.bannerBarData = that.getBannerBarData()
      that.bannerInterval = setInterval(function () {
        if (that.count < length - 1) {
          that.count += 1
        } else {
          that.count = 0
        }
        if (that.bannerBarCount < length - 1) {
          that.bannerBarCount += 1
        } else {
          that.bannerBarCount = 0
        }
        if (that.bannerBarTopCount < length - 1) {
          that.bannerBarTopCount += 1
        } else {
          that.bannerBarTopCount = 0
        }
      }, 7000)
    }
  },
  created: function () {
    this.setBannerInterval()
  },
  destroyed: function () {
    clearInterval(this.bannerInterval)
  }
}
</script>

<style lang="css">

.banner {
  position: relative;
  display: flex;
  width: 100%;
  height: 270px;
}
.banner-btn {
  position: absolute;
  top: 40%;
  padding: 15px;
  cursor: pointer;
  color: #fff;
  background-color: rgba(0,0,0,.4);
}
.angle-left {
  left: 0;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
}
.angle-right {
  right: 0;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
}
.banner  ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
.banner > .banner-one {
  width: 66.66%;
  overflow: hidden;
  /* background-color: red; */
}
.banner-one img {
  width: 100%;
  height: 270px;
}

.banner > .banner-two {
  width: 33.33%;
}
.banner-two {
  overflow: hidden;
}
.banner-two img {
  width: 100%;
  height: 135px;
}
.banner-two > li {
  width: 100%;
  height: 135px;
}

.banner-one-enter-active {
  transition: all .5s ease;
}
.banner-one-leave-active {
  transition: all .5s ease;
}
.banner-one-enter,
.banner-one-leave-to {
  opacity: 0;
}

.banner-two-enter-active {
  transition: all .5s ease;
}
.banner-two-leave-active {
  transition: all .5s ease;
}
.banner-two-enter,
.banner-two-leave-to {
  opacity: 0;
}
.banner-two-enter {
  transform: translateY(130px);
}
.banner-two-leave-to {
  transform: translateY(-130px);
}


.banner-three-enter-active {
  transition: all .5s ease;
}
.banner-three-leave-active {
  transition: all .5s ease;
}
.banner-three-enter,
.banner-three-leave-to {

  opacity: 0;
}
.banner-three-enter {
  transform: translateY(130px);
}
.banner-three-leave-to {
  transform: translateY(-130px);
}
</style>
