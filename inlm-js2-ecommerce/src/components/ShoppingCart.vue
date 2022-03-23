<template>
 <ShoppingCartProduct v-for="item in cart" :key="item.product._id" :item="item" />
  <div v-if="cart.length < 1">
    <div class="p-5 d-flex justify-content-center align-items-center">
      Your cart is empty!
    </div>
  </div>
    <div class="dropdown-divider">

    </div>
  <div class="px-4 pb-3">
    <div>
      <div>Total: {{totalPrice}} :-</div>
     
    </div>
    <router-link to="/cart"><button class="btn btn-sm btn-info"><small>To checkout</small></button></router-link>
  </div>
</template>

<script>
import ShoppingCartProduct from '../components/ShoppingCartProduct.vue'
import {mapGetters} from 'vuex'
export default {
  components: {
    ShoppingCartProduct
  },
  computed: {
    ...mapGetters(['cart', 'totalPrice'])
  }

}
</script>

<style>

</style>