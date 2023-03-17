<template>
  <div class="produit" v-for="product in products" v-bind:key="product.id" >
    <div v-if="product.id == $route.params.id">
      <h1>{{ product.title }}</h1>
      <img :src="product.img" :alt="product.title" />
      <p>{{ product.price + " €" }}</p>
      <button @click="product.total++, card()">Ajouter au panier</button>
    </div>
  </div>
</template>
  
<script>
export default {
  name: 'ProductView',
  computed: {
    products() {
      return this.$store.getters.getProducts
    },
    // cart: {
    //   set(newValue){
    //     this.$store.commit('setCard', newValue)
    //   }
    // }
  },
  methods: {
    card() {
      alert('produit ajouté au panier');
    }
  }

}

</script>
  
<style scoped>
p {
  margin: 15px;
}

img {
  width: 800px;
  object-position: center;
  margin: 0 auto;
  border-radius: 10px;
  box-shadow: rgb(44, 19, 19) 3px 3px 8px;
}
</style>