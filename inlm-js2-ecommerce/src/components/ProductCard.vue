<template>
  
  <div class="col-12">
    <div class="card flex-row h-100">
      <div class="me-3 w-25">
      <img :src="product.imageUrl" class="img-thumbnail rounded" alt="Hollywood Sign on The Hill"/>
      

      <router-link :to="{ name: 'product', params: { id: product._id }}">
        <div class="mask"></div>
      </router-link>
      

      </div>
      <div class="card-body">
        <h5 class="card-title">{{product.name}}</h5>
        <p class="card-text">
          {{product.short}}
        </p>
      </div>
      <div class="card-footer text-danger d-flex align-items-center h5 text-nowrap">{{product.price}} SEK</div>
    </div>
  </div>
  
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["product"],
  data() {
    return {
      showCart: false,
    };
  },
  methods: {
    cartImage() {
      this.showCart = !this.showCart;
    },
    ...mapActions(['addToCart']),
  },
};
</script>

<style scoped>
.img-thumbnail {
  border: none;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
img {
  height: 40px;
  color: #fff;
  background: none;
  object-fit: contain;
  width: 40px;
}
.text-group {
  width: 60%;
}
h5 {
  font-size: 1rem;
  margin: 0;
}

.btn {
  display: flex;
  height: 90px;
  width: 90px;
  align-items: center;
  justify-content: center;
  /* padding: 2rem; */
}
.card:hover {
  box-shadow: 0 0.125rem 0.25rem #0000002a;
}
div.d-flex {
  flex: 1;
}
.card-footer {
  border: none;
  padding: 0.75rem 0.5rem;
}
</style>