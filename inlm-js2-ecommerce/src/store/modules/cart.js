// import axios from 'axios'

export default ({
  state: {
    cart: [],
    addedToCart: false,
  },
  getters: {
    cart: state => state.cart,
    cartQuantity: state => {
      let items = 0
      state.cart.forEach(item => {
        items += item.quantity
      })
      return items
    },
    totalPrice: state => {
      let total = 0
      if(state.cart.length !== 0) {
        state.cart.forEach(item => {
          total += item.product.price * item.quantity
        })
      }
      return total
    },
    addedToCart: state => state.addedToCart
  },
  mutations: {
    ADD_TO_CART: (state, {product, quantity}) => {
      
      let exist = state.cart.find(item => item.product._id === product._id)
      
      if(exist) {
        exist.quantity += quantity
        return
      }
      state.cart.push({ product, quantity })
      
    },
    CLEAR_CART: (state) => {
      state.cart = []
    },
    DECREASE_QUANTITY: (state, product) => {
        
      product.quantity -= 1
        if(product.quantity === 0) {
          state.cart = state.cart.filter(item => item.product._id !== product.product._id)
        }
    },
    INCREASE_QUANTITY: (state, product) => {
        product.quantity += 1
    },
    REMOVE_ITEM_FROM_CART: (state, product) => {
      state.cart = state.cart.filter(item => item.product._id !== product.product._id)
    },
    ADDED_TO_CART: (state, boolean) => {
      state.addedToCart = boolean
      
    }
  },
  actions: {
     addToCart: ({commit}, {product, quantity}) => {
       commit('ADD_TO_CART', {product, quantity})

       commit('ADDED_TO_CART', true)
       setTimeout(() => {
         commit('ADDED_TO_CART', false)
      },800)
     },
     clearCart: ({commit}) => {
       commit('CLEAR_CART')
     },
     decreaseQuantity:  ({commit}, product) => {
      commit('DECREASE_QUANTITY', product)
    },
     increaseQuantity:  ({commit}, product) => {
      commit('INCREASE_QUANTITY', product)
    },
    removeItem: ({commit}, product) => {
      commit('REMOVE_ITEM_FROM_CART', product)
    },
    // addedToCart: ({commit}) => {
    //   commit('ADDED_TO_CART')
    // }
    
  },
})