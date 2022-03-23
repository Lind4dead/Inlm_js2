<template>

  <div class="col">
    <div class="card h-100">
      <div>

      <img :src="product.imageUrl" class="card-img-top" alt="Hollywood Sign on The Hill"/>
      <router-link :to="{name: 'product', params: {id: product._id}}"><div class="mask"></div></router-link>
      </div>
      <div class="card-body">
        <h5 class="card-title">{{product.name}}</h5>
        <p class="card-text mt-2">
          {{product.short}}
        </p>
      </div>
      <div class="card-footer text-danger d-flex align-items-center h5 text-nowrap">{{product.price}} SEK</div>
    </div>
  </div>
  

</template>

<script>
import {mapActions} from 'vuex'
export default {
  props: ['product'],
  data() {
    return {
      showCart: false
    }
  },
  methods: {
    cartImage() {
      // console.log()
      this.showCart = !this.showCart
    },
    ...mapActions(['addToCart'])
  }
}
</script>

<style scoped>
  .img-thumbnail {
    width: 100%;
    height: 110px;
    object-fit: contain;
    width: 100%;
  }
  .shopping-cart {
    /* width: 100%; */
    height: 100%;
    transform: scale(.5);
    display: inline-block;
  }
  .text-group {
    padding-inline: 1rem;
  }
  h5 {
    font-size: 1rem;
    margin: 0;
  }
  
  .btn {
    display: inline-block;
    height: 60px;
    width: 100%;
    align-items: center;
    justify-content: center;
    
  }
  .card:hover {
    box-shadow: 0 .125rem .25rem #0000002a ;
  }
  .card {
    height: 300px;
  }
</style>