<template>
  <div>
    <main class="container">
      <div id="carrosel">
        <b-carousel
          id="carousel-1"
          v-model="slide"
          :interval="4000"
          controls
          indicators
          background="#ababab"
          style="text-shadow: 1px 1px 2px #333"
          @sliding-start="onSlideStart"
          @sliding-end="onSlideEnd"
        >
          <a href="/produto">
            <b-carousel-slide
              caption="Hilab Flow"
              img-href="/produto"
              img-alt="First slide"
            >
              <template #img>
                <img
                  class="d-block img-fluid w-100"
                  src="../assets/flow.png"
                  alt="image slot"
                />
              </template>
            </b-carousel-slide>
          </a>
          <a href="/produto">
            <b-carousel-slide
              caption="Hilab Molecular"
              img-href="/produto"
              img-alt="First slide"
            >
              <template #img>
                <img
                  class="d-block img-fluid w-100"
                  src="../assets/polvo.png"
                  alt="image slot"
                />
              </template>
            </b-carousel-slide>
          </a>
          <a href="/produto">
            <b-carousel-slide
              caption="Hilab Lens"
              img-href="/produto"
              img-alt="First slide"
            >
              <template #img>
                <img id="lens" src="../assets/lens.png" alt="image slot" />
              </template>
            </b-carousel-slide>
          </a>
        </b-carousel>
      </div>
    </main>
  </div>
</template>
<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null,
    };
  },
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },
  },
};
</script>

<style scoped>
.container {
  position: relative;
  display: flex;
  justify-content: center;
  background-color: var(--color-background-home);
}
#carrosel {
  width: 700px;
  z-index: 1;
  position: absolute;
  margin-top: 15px;
}
#lens {
  margin-left: 30%;
}
</style>
