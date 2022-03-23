<template>
  <div class="myModal">
  <div class="myModal-dialog d-flex justify-content-center mt-5">
    <div class="myModal-content bg-danger text-light card d-flex">
      <div class="text-end w-100">
        <button @click="$emit('handleError')" type="button" class="btn-close"></button>
      </div>
      <div class="myModal-header text-center">
        <h5 class="myModal-title">{{title}}</h5>
      </div>
      <div class="myModal-body mt-3 text-center">
        <p>{{body}}</p>
      </div>
      <div v-if="loggedIn" class="myModal-footer d-flex justify-content-evenly mt-3 pb-3">
        <router-link to="/"><button @click="$emit('handleError')" type="button" class="btn btn-secondary" >Go to Home page</button></router-link>
        <router-link to="/profile"><button @click="$emit('handleError')" type="button" class="btn btn-info">Go to Profile Page</button></router-link>
      </div>
      <div v-else class="myModal-footer d-flex justify-content-evenly mt-3 pb-3">
        <router-link to="/login"><button @click="$emit('handleError')" type="button" class="btn btn-secondary" >Login or register</button></router-link>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
  props: ['title', 'body'],
  methods: {
    ...mapActions(['changeSuccess'])
  },
  computed: {
    ...mapGetters(['loggedIn'])
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