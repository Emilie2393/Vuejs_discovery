<template>
  <div class="panier">
    <h3>Panier</h3>
      <ul>
        <li v-for="product in products" v-bind:key="product.id">
          <div class="cartText" v-if="product.total > 0"> 
            <p>{{ product.title }}</p>
            <p>{{"x " + product.total }}</p>
            <p>{{ product.price * product.total + " €"}}</p>
          </div>
        </li>
      </ul>
  </div>
</template>

<script>

export default {
  name: 'CartView',
  computed: {
    products(){
      return this.$store.getters.getProducts
    }
  },
}
</script>

<style scoped>

ul{
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
}

li {
  list-style: none;
  width: 350px;
  background-color: rgb(252, 239, 220);
  border-radius: 10px;
  margin: 0 auto;
  margin-top: 20px;
}

.cartText {
  display: flex;
}

.cartText > :nth-child(1){
  margin-left: 20px;
  width: 150px;
  text-align: left;
  font-weight: bold;
  color:rgb(68, 35, 35);
}

.cartText > :nth-child(3){
  flex-grow: 1;
  text-align: right;
  margin-right: 20px;
}


</style>