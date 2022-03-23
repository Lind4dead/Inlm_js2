<template>
    <ShowcaseComponent />
  <div class="home d-flex p-3 bg-primary">
      <div class="button-group p-2 d-flex gap-1 container">
        <div>

        <button @click="setView('List')" class="me-3 btn btn-sm btn-outline-light" :class="view != 'List' ? 'inactive-view' : 'active-view' ">
          <i class="fa-solid fa-list-ul"></i>
        </button>
        <button @click="setView('Grid')" class="btn btn-sm btn-outline-light" :class="view != 'Grid' ? 'inactive-view' : 'active-view' ">
          <i class="fa-solid fa-border-all"></i>
        </button>
        </div>
        <div>

        </div>
      </div>
      
    
  </div>
    <div class="main-content container">
      <component :is="view" class="mt-5" />
    </div>
</template>

<script>
import ShowcaseComponent from '../components/ShowcaseComponent.vue'
import List from '../components/ListView.vue'
import Grid from '../components/GridView.vue'
import {mapActions, mapGetters} from 'vuex'

export default {
  name: "HomeView",
  components: {
    ShowcaseComponent,
    Grid,
    List
  },
  data() {
    return {
      // comp: "List",
    };
  },
  methods: {
    
    ...mapActions(['setView']),

  },
  computed: {
    ...mapGetters(['view'])
  }
};
</script>

<style scoped>
  .home {
    display: flex;
    /* flex-direction: row-reverse; */
  }
  .side-content {
    background: #569aff;
    width: 200px;
    height: calc(100vh - 69.72px);
  }
  .button-group {
    flex-direction: row-reverse;
  }
  
  .btn-outline-light {
    color: #fff !important;
    
  }
  .btn-outline-light:hover {
    color: #fff;
  }
  .btn-outline-light:focus {
    color: #3c8aff !important;
    background: #fff;
    outline: 3px solid #f8f8f885 !important;
  }
  .active-view {
    color: #3c8aff !important;
    background: #fff;
  }
  

</style>
