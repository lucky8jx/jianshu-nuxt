export const state = () => ({
  bannerImage: []
})

export const mutations = {
  receiveData: function (state, data) {
    state.bannerImage = data.bannerImage
  }
}
