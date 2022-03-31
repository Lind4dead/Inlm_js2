<template>
  
  
  <tbody>
    <tr>
      <th scope="row">{{ index + 1}}</th>
      <td><img :src="item.product.imageUrl"></td>
      <td><h5>{{ item.product.name }}</h5>
        
      </td>
      <td class="align-middle quantity-group">
        <button class="btn btn-sm btn-info me-1"  @click="changeQuantity --"><i class="fa-solid fa-minus"></i></button>
        <input type="number" v-model="changeQuantity"  class="d-inline-block form-control quantity-input">
        <button class="btn btn-sm btn-info ms-1" @click="increment"><i class="fa-solid fa-plus"></i></button>
        </td>
      <td class="align-middle">
        {{item.product.price}} :-
      </td>
      <td class="align-middle">
        {{item.product.price * item.quantity}} :-
      </td>
      <td class="align-middle">
        <button class="btn-sm btn-danger btn" @click="removeItem(item)"><i class="fa-solid fa-trash"></i> Remove</button>
      </td>
    </tr>

    
    
  </tbody>

</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  props: ['item', 'index'],
  data() {
    return {
      changeQuantity: this.item.quantity
      // quantity: 1
    }
  },
  methods: {
    ...mapActions(['decreaseQuantity', 'increaseQuantity', 'removeItem', 'changeQuantityInCart']),
    increment() {
      // this.increaseQuantity(this.item)
      this.changeQuantity ++
    }
    
  },
  computed: {
    ...mapGetters(['cartQuantity', 'cart']),
    quantity() {
      return this.item.quantity
    }
  },
  watch: {
    changeQuantity() {
      
      let item = this.item
      let newQuantity = this.changeQuantity
      
      console.log(item)
      console.log(newQuantity)
      this.changeQuantityInCart({item, newQuantity})
    },
    
  }
};
</script>

<style scoped>

img {
  height: 150px;
  color: #fff;
  background: none;
  object-fit: contain;
  width: 150px;
}
.card {
  margin: 0 auto;
  width: 900px;
}
.quantity-group {
  height: 100%;
}
.quantity-input {
  width: 35px;
  height: 35px;
  padding: .6em;
  font-size: .9rem;
  text-align: center;
}
 tr {
   height: 170px;
 }
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}

</style>