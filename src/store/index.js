import { createStore } from 'vuex'
import chocoBlanc from '../assets/white-chocolate-g84a4d414d_1280.jpg'
import chocoBlack from  '../assets/chocolate-gbeab8f4b2_1280.jpg'
import chocoMilk from '../assets/chocolate-g2e38e04ff_1280.jpg'

export default createStore({
  state: {
    currentProducts: [],
    products: [
      {
        id: 1,
        title: "Chocolat blanc",
        price: 15,
        img: chocoBlanc,
        total: 0,
      },
      {
        id: 2,
        title: "Chocolat noir",
        price: 23,
        img: chocoBlack,
        total: 0,
      },
      {
        id:3,
        title: "Chocolat lait",
        price: 12,
        img: chocoMilk,
        total: 0,
      }
    ]
  },
  getters: {
    getProducts(state){
      return state.products;
    },
    getCard(state){
      return state.currentProducts;
    }
  },
  mutations: {
    setCard(state, newValue){
      state.currentProducts.push(newValue)
    }
  },
  actions: {
  },
  modules: {
  }
})
