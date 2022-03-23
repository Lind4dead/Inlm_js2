<template>
  
  
  <tbody>
    <tr>
      <th>{{ index + 1}}</th>
      <td><img :src="item.product.imageUrl"></td>
      <td><router-link class="link-style" :to="{ name: 'product', params: { id: item.product._id }}"><h5>{{ item.product.name }}</h5></router-link>
        
      </td>
      <td class="align-middle text-center quantity-group">
        {{item.quantity}}
        </td>
      <td class="align-middle">
        {{item.product.price}} :-
      </td>
      <td class="align-middle">
        {{item.product.price * item.quantity}} :-
      </td>
    </tr>

    
    
  </tbody>
  

</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: ['item', 'index'],
  computed: {
    ...mapGetters(['cartQuantity'])
  }
};
</script>

<style scoped>
th {
  width: 30px;
}
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
  .link-style {
    color: #000000;
  }
  .link-style:hover {
    text-decoration: underline;
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