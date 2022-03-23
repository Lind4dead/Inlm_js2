<template>
  <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
    
    <ProductCardGrid v-for="product in products" :key="product._id" :product="product" />
    
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import ProductCardGrid from './ProductCardGrid.vue'
export default {
  components: { ProductCardGrid },
  data() {
    return {
      
    }
  },
  methods: {
    ...mapActions(['getProducts'])
  },
  created() {
    this.getProducts()
  },
  computed: {
    ...mapGetters(['products'])
  }
}
</script>

<style>
  

</style>