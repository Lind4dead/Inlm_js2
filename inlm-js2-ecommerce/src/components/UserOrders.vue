<template>

  <table class="table">
  <thead class="table-dark">
    <tr>
      <th scope="col"></th>
      <th scope="col">Order number: {{order._id}}</th>
      <th scope="col">Order date: {{order.createdAt.slice(0,10)}}</th>
      <th scope="col"></th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
    <tr>
      <th scope="col">#</th>
      <th scope="col"></th>
      <th scope="col">Product</th>
      <th scope="col">Quantity</th>
      <th scope="col">Price</th>
      <th scope="col">Total</th>
    </tr>
  </thead>
  
    <OrderCard v-for="(item, index) in order.cart" :key="item._id" :item="item" :index="index" />
  <tfoot>
    <tr>

      <td scope="col"></td>
      <td scope="col"></td>
      <td scope="col"></td>
      <td scope="col" class="align-middle text-center fw-bold">{{order.quantity}}</td>
      <td scope="col" class="align-middle fw-bold">Total Price: </td>
      <td scope="col" class="align-middle fw-bold">{{order.total}} :-</td>
      <td scope="col"></td>
      </tr>
  </tfoot>
</table>
</template>

<script>

import OrderCard from "./OrderCard.vue"

export default {
  components: { OrderCard },
  props: ['order'],
  created() {
    console.log(this.order)
  }


}
</script>

<style>

</style>