<template>
  <div class="py-3 px-3 d-flex justify-content-between align-items-center">
    <div class="d-flex align-items-center">
      <div class="image-container">
        <img :src="item.product.imageUrl" class="img-fluid" />
      </div>
      <div>
        <div>
          <strong>{{ item.product.name }}</strong>
        </div>
        <div>
          <small>{{ item.quantity }} x {{ item.product.price }}</small>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-between">
      <div class="btn-group btn-group-sm">
        <button class="btn btn-sm btn-info"  @click.stop="decreaseQuantity(item)"><i class="fa-solid fa-minus"></i></button>
        <button class="btn btn-sm btn-info" @click.stop="increaseQuantity(item)"><i class="fa-solid fa-plus"></i></button>
        
          <button class="btn-sm btn-danger btn" @click.stop="removeItem(item)"><i class="fa-solid fa-trash"></i></button>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  props: ["item"],
  methods: {
    ...mapActions(['decreaseQuantity', 'increaseQuantity', 'removeItem'])
  }
};
</script>

<style scoped>
.image-container {
  width: 130px;
}
strong {
  font-size: .9rem;
}
</style>