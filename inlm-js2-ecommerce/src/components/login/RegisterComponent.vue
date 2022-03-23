<template>
  <div class="tab-pane fade p-4"  >
    <form @submit.prevent="handleSubmit()">

      <div class="text-center"><h1>Register</h1></div>

      <!-- First Name input -->
      <div class="mb-4">
        <label class="form-label" for="registerFirstName">First Name</label>
        <input type="text" id="registerFirstName" class="form-control" v-model="firstName"/>
        
      </div>

      <!-- Last Name input -->
      <div class="mb-4">
        <label class="form-label" for="registerLastName">Last Name</label>
        <input type="text" id="registerLastName" class="form-control" v-model="lastName"/>
      </div>

      <!-- Email input -->
      <div class="mb-4">
        <label class="form-label" for="registerEmail">Email</label>
        <input type="email" id="registerEmail" class="form-control" v-model="email"/>
      </div>

      <!-- Password input -->
      <div class="mb-4">
        <label class="form-label" for="registerPassword">Password</label>
        <input type="password" id="registerPassword" class="form-control" v-model="password"/>
      </div>


      <h5 class="text-danger text-center" v-if="error">No field can be empty!</h5>

      

      <!-- Submit button -->
      <button type="submit" class="btn btn-primary btn-block">Sign up</button>
    </form>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      error: false,
        }
  },
  methods: {
    ...mapActions(['register']),
    handleSubmit(e) {
      console.log(e)
      if(this.firstName.trim() === '' || this.lastName.trim() === '' || this.email.trim() === '' || this.password.trim() === '') {
        this.error = true
      }
      else {
        let user = {
          fName: this.firstName,
          lName: this.lastName,
          email: this.email,
          password: this.password
        }
        console.log(user)
        this.register(user)
        this.error = false
      }

    }
  }

}
</script>

<style>

</style>