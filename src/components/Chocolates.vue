<template>
  <div class="products">
    <h1>{{ msg }}</h1>
    <ul>
      <li v-for="product in products" v-bind:key="product.id">
        <h3>{{ product.title }}</h3>
        <p>{{ product.price }}</p>
        <img :src="product.img" :alt="product.title"/>
        <button @click="product.total++">ajouter au panier</button>
      </li>
    </ul>
    <div>
      <h3>Panier</h3>
      <ul>
        <li v-for="product in products" v-bind:key="product.id">
          <div v-if="product.total > 0"> 
            <p>{{ product.title }}</p>
            <p>{{ product.total }}</p>
          </div>
          
        </li>
      </ul>
    </div>
    
  </div>

  
</template>

<script>
import chocoBlanc from '../assets/white-chocolate-g84a4d414d_1280.jpg'
import chocoBlack from  '../assets/chocolate-gbeab8f4b2_1280.jpg'
import chocoMilk from '../assets/chocolate-g2e38e04ff_1280.jpg'


export default {
  name: 'Chocolates_products',
  props: {
    msg: String
  },
  data() {
    return {
      products: [
        {
          id: 1,
          title: "chocolat blanc",
          price: 15 + " €",
          img: chocoBlanc,
          total: 0
        },
        {
          id: 2,
          title: "chocolat noir",
          price: 23 + " €",
          img: chocoBlack,
          total: 0
        },
        {
          id:3,
          title: "chocolat lait",
          price: 12 + " €",
          img: chocoMilk,
          total: 0
        }
      ],
      
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
