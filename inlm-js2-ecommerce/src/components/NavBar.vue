<template>
  <nav class="navbar bg-primary">
    <div class="container">
      <div class="left-nav">
        <router-link class="logo" to="/">
          <i class="fa-brands fa-shopify link"
            ><small class="align-middle d-inline-block px-3">
              by DJEmpo</small
            ></i
          >
        </router-link>
      </div>
      <div class="navbar-nav">
        <ul class="nav-links gap-3">
          <li><router-link class="link" to="/">Home</router-link></li>
          <li v-if="loggedIn">
            <div class="dropdown">
              <a
                class="dropdown-toggle link hidden-arrow"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
                ><i class="fa-solid fa-user"></i
              ></a>
              <ul
                class="dropdown-menu bg-primary border"
                aria-labelledby="dropdownMenuLink"
              >
                <li>
                  <router-link class="dropdown-item text-light" to="/profile"
                    >My Profile</router-link
                  >
                </li>
                <li @click="logout" class="dropdown-item text-light cursor">
                  Logout
                </li>
              </ul>
            </div>
          </li>

          <li v-else>
            <router-link class="link" to="/login">Login</router-link>
          </li>
          <li><router-link class="link" to="/about">About</router-link></li>
        <li><div class="dropdown">
          <a
            class="text-reset me-3 dropdown-toggle hidden-arrow position-relative"
            href="#"
            id="navbarDropdownMenuLink"
            role="button"
            data-mdb-toggle="dropdown"
            aria-expanded="false"
          >
            <i class="fas fa-shopping-cart text-light"></i>
            <span
              v-if="cartQuantity"
              class="badge rounded-pill badge-notification bg-danger"
              >{{ cartQuantity }}</span
            >
          </a>
          <div
            class="dropdown-menu dropdown-menu-end shopping-cart "
            aria-labelledby="navbarDropdownMenuLink"
          >

            <ShoppingCart />
            
              
                
              
          </div>
          <ToCart />
        </div></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import ShoppingCart from '../components/ShoppingCart.vue'
import { mapGetters, mapActions } from "vuex";
import ToCart from './animation/ToCart.vue';
export default {
  components: {
    ShoppingCart,
    ToCart
  },
  methods: {
    ...mapActions(["logout"]),
  },
  computed: {
    ...mapGetters(["cartQuantity", "loggedIn"]),
  },
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
  font-size: 0.8rem;
}
.fa-cart-shopping {
  font-size: 1.3rem;
}
.shopping-cart {
    min-width: 500px;
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
  padding: 0 0.6em;
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
  content: "";
  border-bottom: 2px solid #abcaf8;
  position: absolute;
  left: 0.7rem;
  right: 0.7rem;
  top: 1.5rem;
}
.cursor {
  cursor: pointer;
}
.dropdown-item:hover {
  background: #ffffff2f;
}
</style>