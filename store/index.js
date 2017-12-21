// import axios from 'axios'

export const state = () => ({
  showMenu: false,
  showHotSearch: false,
  showModeSet: false,
  moonMode: false,
  fontMode: false,
  hotSearchData: []
  // bannerImage: []
})

export const mutations = {
  toggleMenu (state) {
    state.showMenu = !state.showMenu
  },
  showHotSearch (state) {
    state.showHotSearch = true
  },
  hideHotSearch (state) {
    state.showHotSearch = false
  },
  receiveData (state, data) {
    state.hotSearchData = data.hotSearch
    // state.bannerImage = data.bannerImage
  },
  toggleModeSet (state) {
    state.showModeSet = !state.showModeSet
  },
  toggleMoonMode (state) {
    state.moonMode = !state.moonMode
  },
  toggleFontMode (state) {
    state.fontMode = !state.fontMode
  }
}

// export const actions = {
//   fetchHotSearch ({ commit }) {
//     axios.get('http://g.cn/')
//       .then(function (response) {
//         if (response.statusText === 'OK') {
//           commit('receiveHotSearchData', response.data)
//         }
//       })
//       .catch(function (error) {
//         console.log(error)
//       })
//   }
// }
