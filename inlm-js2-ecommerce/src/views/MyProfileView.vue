<template>
  <div class="container">
  <div class="mt-5"><h1>My Profile</h1></div>
  <div class="mt-5">
    <h3>My orders</h3>
  <UserOrders v-for="order in myOrders" :key="order._id" :order="order" />
  </div>

  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

import UserOrders from '../components/UserOrders.vue'

export default {
  components: { UserOrders },
  methods: {
    ...mapActions(['getOrders'])
  },
  computed: {
    ...mapGetters(['myOrders', 'userToken'])
  },
  created() {
    console.log(this.myOrders)
    this.getOrders(this.userToken)
  }

}
</script>

<style>

</style>