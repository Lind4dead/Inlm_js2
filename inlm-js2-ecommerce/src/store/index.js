import { createStore } from 'vuex'
import products from './modules/products'
import product from './modules/product'
import cart from './modules/cart'
import orders from './modules/orders'
import viewOfProducts from './modules/viewOfProducts'
import users from './modules/users'

export default createStore({
  state: {
    error: false
  },
  getters: {
    error: state => state.error
  },
  mutations: {
    CHANGE_ERROR: (state, error) => {
      state.error = !error
    }
  },
  actions: {
    changeError: ({commit}, error) => {
      commit('CHANGE_ERROR', error)
    }
  },
  modules: {
    products,
    product,
    cart,
    viewOfProducts,
    orders,
    users
  }
})
