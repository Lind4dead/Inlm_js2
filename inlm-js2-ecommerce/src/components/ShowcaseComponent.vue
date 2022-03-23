<template>
  <div class="showcase">
    <h1 class="title">The hottest gear available</h1>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .showcase {
    display: flex;
    align-items: center;
    justify-content: center;
    background: url("../assets/nana-dua-aVeKubCF-48-unsplash.jpg") center #0000003f ;
    background-blend-mode: multiply ;
    background-size: cover;
    height: 300px;
    width: 100%;
  }
  .img-fluid {
    width: 100%;
    height: 300px;
    object-fit: cover;
    filter: grayscale(100%);
  }
  .title {
    color: #fff;

  }
</style>