<template>
  <div class="products">
    <h1>{{ msg }}</h1>
    <ul>
      <li v-for="product in products" v-bind:key="product.id">
        <h3>{{ product.title }}</h3>
        <p>{{ product.price + " €" }}</p>
        <img :src="product.img" :alt="product.title"/>
        <router-link :to="{name: 'product', params: {id:  product.id }}">En savoir plus</router-link>
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
  background-color: rgb(250, 242, 229);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
}

h3, p {
  margin: 5px;
}

img {
  width: 300px;
  height: 180px;
  object-position: center;
  margin: 0 auto;
  border-radius: 10px;
  box-shadow: rgb(44, 19, 19) 3px 3px 8px;
}

a {
  text-decoration: none;
  margin: 8px;
}

</style>
