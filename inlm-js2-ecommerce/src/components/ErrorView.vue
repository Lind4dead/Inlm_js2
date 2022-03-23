<template>
  <div class="myModal">
  <div class="myModal-dialog d-flex justify-content-center mt-5">
    <div class="myModal-content bg-danger text-light card d-flex">
      <div class="text-end w-100">
        <button @click="$emit('handleError')" type="button" class="btn-close"></button>
      </div>
      <div class="myModal-header text-center">
        <h5 class="myModal-title">You have no items in your cart!</h5>
      </div>
      <div class="myModal-body mt-3 text-center">
        <p>Please enter items in your cart before you try to checkout!</p>
      </div>
      <div class="myModal-footer d-flex justify-content-evenly mt-3 pb-3">
        <router-link to="/"><button @click="$emit('handleError')" type="button" class="btn btn-secondary" >Go to Home page</button></router-link>
        <router-link to="/profile"><button @click="$emit('handleError')" type="button" class="btn btn-info">Go to Profile Page</button></router-link>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  methods: {
    ...mapActions(['changeSuccess'])
  }
}
</script>

<style scoped>
  .myModal {
    position: absolute;
    inset: 0;
    background: #0000005e;
  }
  .myModal-content {
    width: 30%;
    padding: 1rem 3rem;
  }
</style>