<template>
  <main>
    <div id="carrosel">
  <b-carousel 
    id="carousel-no-animation"
    style="text-shadow: 0px 0px 2px #000"
    no-animation
    indicators
    controls
  >
    <b-carousel-slide
      caption="First Slide"
      img-src="https://picsum.photos/1024/480/?image=10"
    ></b-carousel-slide>
    <b-carousel-slide
      caption="Second Slide"
      img-src="https://picsum.photos/1024/480/?image=12"
    ></b-carousel-slide>
    <b-carousel-slide
      caption="Third Slide"
      img-src="https://picsum.photos/1024/480/?image=22"
    ></b-carousel-slide>
    <b-carousel-slide
      caption="Fourth Slide"
      img-src="https://picsum.photos/1024/480/?image=23"
    ></b-carousel-slide>
  </b-carousel>
</div>
  
  </main>
</template>

<script>

export default{
  name: 'Home',
  components: {
  }
  
}

</script>

<style scoped>
main{
  background-color: var(--color-background-home) ;
  max-width: 100%;
}

#carrosel{
  width: 600px;
  
  margin-left: 25%;
  margin-top: 15px;
  position: absolute;
}
</style>