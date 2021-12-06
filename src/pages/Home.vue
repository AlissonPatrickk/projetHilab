<template>
 <div>
  <Carousel />
 </div>
</template>

<script>
import Carousel from './Carousel.vue'
export default{
  name: 'Home',
  components: {
    Carousel
  }
  
}

</script>

<style scoped>
main{
  background-color: var(--color-background) ;
  max-width: 100%;
}


</style>