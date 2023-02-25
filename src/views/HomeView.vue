<template>
  <div class="home">
    <img alt="logo chocolat" src="../assets/chocolate-4505331_960_720.webp">
    <HelloWorld msg="Entrainement sur Vue.js"/>
    <Chocolates_products msg="Nos produits en vente"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Chocolates_products from '@/components/Chocolates.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    Chocolates_products,
  }

}
</script>

<style scoped>

img {
  width: 100px;
}

</style>
