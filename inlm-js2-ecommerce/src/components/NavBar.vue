<template>
  <nav class="navbar bg-primary">
    <div class="container">
      <div class="left-nav">
        <router-link class="logo" to="/">
          <i class="fa-brands fa-shopify link"><small class="align-middle d-inline-block px-3"> by DJEmpo</small></i>
        </router-link>
          
        
      </div>
      <div class="navbar-nav">
        <ul class="nav-links gap-3">
          <li ><router-link class="link" to="/">Home</router-link></li>
          <li v-if="loggedIn"><div class="dropdown"><a class="dropdown-toggle link hidden-arrow" href="#" role="button" id="dropdownMenuLink" data-mdb-toggle="dropdown" aria-expanded="false"><i class="fa-solid fa-user"></i></a><ul class="dropdown-menu bg-primary border" aria-labelledby="dropdownMenuLink">
    <li><router-link class="dropdown-item text-light" to="/profile">My Profile</router-link></li>
    <li  @click="logout" class="dropdown-item text-light cursor">Logout</li>
  </ul></div></li>
          
          
          <li v-else><router-link class="link" to="/login">Login</router-link></li>
          <li ><router-link class="link" to="/about">About</router-link></li>
          <li ><router-link class="link" to="/cart">
          <i class="fa-solid fa-cart-shopping align-middle"></i>
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {{ cartQuantity }}
          <span class="visually-hidden">unread messages</span>
  </span></router-link></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  data() {
    return {
      showSearch: false,
      searchProduct: '',
      
    }
  },
  methods: {
    ...mapActions(['logout'])
  },
  computed: {
    ...mapGetters(['cartQuantity', 'loggedIn'])
  }
  

};
</script>

<style scoped>
.left-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
}
.logo {
  color: #f8f8f8;
  margin: 0;
}
.fa-shopify {
  font-size: 2rem;
}
.fa-shopify small {
  font-size: .8rem;
}
.fa-cart-shopping {
  font-size: 1.3rem;
}
.nav-links {
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  margin: 0;
  padding-left: 0;
}
.link {
  text-decoration: none;
  display: inline-block;
  padding: 0 .6em;
  color: #f8f8f8;
  position: relative;
}

.link:hover {
  color: #ffffffa6;
}
.link .shopping-cart:hover {
  color: #ffffffa6;
}
.link.router-link-active::after {
    content: '';
    border-bottom: 2px solid #abcaf8;
    position: absolute;
    left: .7rem;
    right: .7rem;
    top: 1.5rem;
  }
  .cursor {
    cursor: pointer;
  }

 
</style>