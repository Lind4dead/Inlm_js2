<template>
  <Navbar />
  <router-view/>
</template>

<script>
import Navbar from './components/NavBar.vue'
import {mapActions, mapGetters} from 'vuex'
export default {
  components: {
    Navbar
  },
  methods: {
    ...mapActions(['checkUser'])
  },
  computed: {
    ...mapGetters([''])
  },
  created() {
    this.checkUser()
  }
}
</script>

<style>
 * {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
 }
 body {
   background: #ffffff;
 }
 .bg-primary {
   background: #3c8aff !important;
 }
 .btn-primary {
   background: #3c8aff !important;
 }
 .btn-success {
   background: green;
 }
 /* td, tr {
  border: none;
} */
</style>
