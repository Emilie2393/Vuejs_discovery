<template>
  <div class="hello">
    <h1>Chocoland</h1>
    <p>{{ msg }}</p>
    
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


p {
  font-style: italic;
  font-size: 1.1em;
  margin-top:50px;
}

</style>
