<template>

  <transition  name="fade-n-slide">
  <div v-if="addedToCart" class="card d-flex justify-content-center align-items-center">
    <p>Product added to cart!</p>
  </div>
  </transition>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  
  computed: {
    ...mapGetters(['addedToCart']),
    
  },
  
  
}
</script>

<style scoped>
  .card {
    position: absolute;
    min-width: 200px;
    min-height: 50px;
    bottom: -70px;
    left: -120px;
  }
  .card p {
    margin: 0;
    font-size: .8rem;
  }
 .fade-n-slide-enter-active, .fade-n-slide-leave-active {
   transition: opacity 400ms ease, transform 800ms ease;
 }
 .fade-n-slide-enter-from  {
   opacity: 0;
   transform: translateY(70px);
 }
  .fade-n-slide-leave-to {
    opacity: 0;
   transform: translateY(-40px);
  }

 .fade-n-slideOut-enter-active, .fade-n-slideOut-leave-active {
   transition: opacity 400ms ease, transform 400ms ease;
 }
 .fade-n-slideOut-enter-from  {
   opacity: 0;
   transform: translateY(-40px);
 }
  .fade-n-slideOut-leave-to {
    opacity: 0;
   transform: translateY(70px);
  }

</style>