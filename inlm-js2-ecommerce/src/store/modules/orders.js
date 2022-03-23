// import router from '@/router'
import axios from 'axios'

export default ({
  state: {
    myOrders: [],
    success: false
  },
  getters: {
    myOrders: state => state.myOrders,
    success: state => state.success
  },
  mutations: {
    SET_ORDER: (state) => {
      state.success = true
    },
    GET_ORDERS: (state, orders) => {
      state.myOrders = orders
    },
    CHANGE_SUCCESS: (state) => {
      state.success = false
    }
  },
  actions: {
    putOrder: async ({commit}, {order}) => {

      
      const res = await axios.post('http://localhost:9999/api/orders', {cart: order.cart, total: order.total, quantity: order.quantity}, {
        headers: {
          'Authorization': `Bearer ${order.user}`
        }
        })
      
        
        if(res.status === 201) { 
          commit('SET_ORDER')
      }

      // router.push({ name: 'success' })
    },
    getOrders: async ({commit}, token) => {
      const res = await axios.get('http://localhost:9999/api/orders', {
      headers: {
        'Authorization': `Bearer ${token}`

      }  
    })
      commit('GET_ORDERS', res.data)
    },
    changeSuccess: ({commit}) => {
      commit('CHANGE_SUCCESS')
    }
  }
})