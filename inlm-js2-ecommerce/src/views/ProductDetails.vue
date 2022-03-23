<template>
  <div v-if="product" class="container mt-5">
    <div class="row">
      <div class="col-lg-6">
        <img :src="product.imageUrl" alt="" class="img-fluid" />
      </div>
      <div class="my-3 col-lg-6 text-center text-lg-start">
        <h3 class="fw-bold">{{ product.name }}</h3>
        <p>{{ product.desc }}</p>
        <div class="d-flex justify-content-around align-items-center mt-5">
          <h3 class="text-danger">{{ product.price }} SEK</h3>
          <button class="btn btn-info py-3" @click="addToCart({product, quantity})">
            <span>Lägg i varukorg</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  props: ["id"],
  data() {
    return {
      hoverOver: false,
      quantity: 1,
    };
  },
  methods: {
    ...mapActions(["getProduct", "resetProduct", "addToCart"]),
    hoverOverBtn() {
      this.hoverOver = !this.hoverOver;
    },
  },
  created() {
    this.getProduct(this.id);
  },
  computed: {
    ...mapGetters(["product"]),
  },
  unmounted() {
    this.resetProduct();
  },
};
</script>

<style scoped>

</style>