<template>
  
  <div class="tab-pane fade show active p-4" >

    <div class="text-center"><h1>Login</h1></div>

    <form @submit.prevent="handleSubmit" >
      

      <!-- Email input -->
      <div class=" my-4">
        <label class="form-label" for="loginName">Email</label>
        <input type="email" id="loginName" class="form-control" v-model="email" />
      </div>

      <!-- Password input -->
      <div class=" mb-4">
        <label class="form-label" for="loginPassword">Password</label>
        <input type="password" id="loginPassword" class="form-control" v-model="password" />
      </div>

      <!-- 2 column grid layout -->
      

      <!-- Submit button -->
      <button type="submit" class="btn btn-primary btn-block mb-4">Sign in</button>

    </form>
    </div>
 
</template>

<script>
import {mapActions} from 'vuex'
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    handleSubmit() {
      if(this.email.trim() === '' || this.password.trim() === '') {
        return
      }

      let user = {
        email: this.email,
        password: this.password
      }
      this.login(user)
    },
    ...mapActions(['login'])
  },

}
</script>

<style>

</style>