<template>
  <div class="list row">
    <ProductCard class="mb-2" v-for="product in products" :key="product._id" :product="product" />
    
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import ProductCard from './ProductCard.vue'
export default {
  components: { ProductCard },
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

<style scoped>
  .list {
    max-width: 800px;
    margin: 0 auto;
  }

</style>