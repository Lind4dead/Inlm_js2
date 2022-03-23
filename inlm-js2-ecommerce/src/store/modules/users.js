// import axios from 'axios'

import router from "@/router"
import axios from "axios"

export default ({
  state: {
    users: [],
    userToken: null,
    loggedIn: false
  },
  getters: {
    userToken: state => state.userToken,
    loggedIn: state => state.loggedIn
  },
  mutations: {
    SET_USER: (state, token) => {
      if(token) {
        state.userToken = token
        state.loggedIn = true
      }
      else {
        state.loggedIn = false,
        state.userToken = null
      }
    },
    REGISTER_USER: (state, token) => {
        state.userToken = token
        state.loggedIn = true
    }
  },
  actions: {
    login: async ({commit}, payload) => {
      
      const res = await axios.post('http://localhost:9999/api/users/login', payload)
      
      if(res.status === 200) {
        localStorage.setItem('token', res.data.token)
        commit('SET_USER', res.data.token)
        router.push({name: 'home'})
      }
    },
    checkUser: ({commit}) => {
      let token = localStorage.getItem('token')
      if(token) {
        commit('SET_USER', token)
      }
    },
    logout: ({commit}) => {
      try {
        localStorage.removeItem('token')
        commit('SET_USER', null)
      }
      catch {
        console.log('not logged in')
      }
    },
    register: async ({commit}, payload) => {
      const res = await axios.post('http://localhost:9999/api/users/register', payload)
      console.log(payload)
      console.log(res)
      commit('REGISTER_USER', res.data.token)
      router.push({name: 'home'})
    }
  }
})