<template>
<div class="container mt-5 card">
  <!-- Pills navs -->
<ul class="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
  <li class="nav-item" role="presentation">
    <a
      class="nav-link active"
      id="tab-login"
      data-mdb-toggle="pill"
      href="#pills-login"
      role="tab"
      aria-controls="pills-login"
      aria-selected="true"
      >Login</a
    >
  </li>
  <li class="nav-item" role="presentation">
    <a
      class="nav-link"
      id="tab-register"
      data-mdb-toggle="pill"
      href="#pills-register"
      role="tab"
      aria-controls="pills-register"
      aria-selected="false"
      >Register</a
    >
  </li>
</ul>
<div class="tab-content mt-5">
<!-- Pills navs -->
<LoginComponent id="pills-login" role="tabpanel" aria-labelledby="tab-login" />
<!-- Pills content -->

      <!-- Register buttons -->
      
  
  <RegisterComponent id="pills-register" role="tabpanel" aria-labelledby="tab-register"/>

<!-- Pills content -->
 </div>
</div>
</template>

<script>
import LoginComponent from '../components/login/LoginComponent.vue'
import {mapActions} from 'vuex'
import RegisterComponent from '../components/login/RegisterComponent.vue'
export default {
  components: {
    LoginComponent,
    RegisterComponent
  },
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
      console.log(this.$route.query.redirect)
      let route = this.$route.query.redirect

      this.login({user, route})
    },
    ...mapActions(['login'])
  },
  computed: {
    
  }
}
</script>

<style>

</style>