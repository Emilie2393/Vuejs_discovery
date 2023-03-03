<template>
  <div class="products">
    <h1>{{ msg }}</h1>
    <ul>
      <li v-for="product in products" v-bind:key="product.id">
        <h3>{{ product.title }}</h3>
        <p>{{ product.price + " €" }}</p>
        <img :src="product.img" :alt="product.title"/>
        <button @click="product.total++">ajouter au panier</button>
      </li>
    </ul>
    
  </div>
</template>

<script>

export default {
  name: 'ChocolatesProducts',
  props: {
    msg: String
  },
  computed: {
    products(){
      return this.$store.getters.getProducts
    }
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

ul{
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
}

li {
  list-style: none;
  width: 350px;
  background-color: rgb(252, 239, 220);
  border-radius: 10px;
}

img {
  width: 300px;
  height: 180px;
  object-position: center;
}

</style>
