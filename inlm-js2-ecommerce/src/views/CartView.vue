<template>
  <SuccessView v-if="success" />
  <ErrorView @handleError="error = false" v-if="this.error" :title="'You have no items in your cart!'" :body="'Please enter items in your cart before you try to checkout!'" />

  <div v-if="cart.length < 1" class="mt-5 d-flex justify-content-center align-items-center flex-column gap-3">
    <h1>Your cart is Empty</h1>
    <h2>Start shopping!</h2>
    <router-link to="/"><button class="btn btn-info">Go to shopping!</button></router-link>
  </div>

  <div v-else class="container d-flex justify-content-center align-items-center flex-column mt-5">
    <h1 class="mb-4">Your cart</h1>
    <table class="table">
      <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col"></th>
      <th scope="col">Product</th>
      <th scope="col">Quantity</th>
      <th scope="col">Price/pcs</th>
      <th scope="col">Total</th>
      <th scope="col">Remove</th>
    </tr>
  </thead>
    <CartCard v-for="(item, index) in cart" :key="item.product._id" :item="item" :index="index" />
    <tfoot>
      <tr>

      <td scope="col"></td>
      <td scope="col"></td>
      <td scope="col"></td>
      <td scope="col" class="align-middle text-center fw-bold">{{cartQuantity}}</td>
      <td scope="col" class="align-middle fw-bold">Total Price: </td>
      <td scope="col" class="align-middle fw-bold">{{totalPrice}} :-</td>
      <td scope="col"></td>
      </tr>
    </tfoot>
    </table>
  </div>
    <div class="text-end mt-4 container">

      <button v-if="cart.length > 0" @click="handlePutOrder()" class="btn btn-info">Checkout</button>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import CartCard from "../components/CartCard.vue";
import SuccessView from '../components/SuccessView.vue';
import ErrorView from '../components/ErrorView.vue'

export default {
  components: { CartCard, SuccessView, ErrorView },
  data() {
    return {
      error: false,
    }
  },
  methods: {
    ...mapActions(['putOrder', 'clearCart']),
    async handlePutOrder() {
      console.log(this.cart)
      if(this.cart.length < 1) {
        return this.error = true
      }
      else {

        let order = {
          cart: this.cart,
          user: this.userToken,
          quantity: this.cartQuantity,
          total: this.totalPrice
        }
        await this.putOrder({order})
        this.clearCart()
      }
    }
  },
  computed: {
    ...mapGetters(['cart', 'totalPrice', 'userToken', 'cartQuantity', 'success'])
  }
};
</script>

<style>
</style>