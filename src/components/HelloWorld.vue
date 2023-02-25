<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>Une boutique sur le thème du chocolat</p>
    
  </div>

  
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
