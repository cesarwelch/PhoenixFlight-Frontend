<template>
    <section class="section w-details-area center-text">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <div class="heading">
                        <h2 class="title">
                            Nuestra Historia
                        </h2>
                        <span class="heading-bottom">
                            <img class="suculenta-icon" src="../../src/assets/images/weddingrings3.png"/>
                        </span>
                    </div>
                    <!-- wedding-details -->
                </div>
                <!-- col-sm-10 -->
            </div>
            <div class="row">
              <div class="col-sm">
                <h2>Nuestra historia en fotos desde el 20 de Abril del 2013 hasta hoy</h2>
              </div>
                <div class="col-sm">
                    <b-carousel controls :interval="4000" @sliding-end="onSlideEnd" @sliding-start="onSlideStart" background="#ababab" id="carousel" img-heigth img-width="720" indicators="" class="story-images" v-model="slide">
                        <b-carousel-slide>
                            <img alt="image slot" class="story-images"  slot="img" src="https://res.cloudinary.com/fernandez-cano/image/upload/w_720,h_720/SquareFit_20180830_00295973.jpg" />
                        </b-carousel-slide>
                        <b-carousel-slide>
                            <img alt="image slot" class="story-images"  slot="img" src="https://res.cloudinary.com/fernandez-cano/image/upload/w_720,h_720/SquareFit_20180908_16043930.jpg" />
                        </b-carousel-slide>
                        <b-carousel-slide>
                            <img alt="image slot" class="story-images"  slot="img" src="https://res.cloudinary.com/fernandez-cano/image/upload/w_720,h_720/SquareFit_20180830_00312486.jpg" />
                        </b-carousel-slide>
                        <b-carousel-slide>
                            <img alt="image slot" class="story-images"  slot="img" src="https://res.cloudinary.com/fernandez-cano/image/upload/w_720,h_720/SquareFit_20180908_16044316.jpg" />
                        </b-carousel-slide>
                        <b-carousel-slide>
                            <img alt="image slot" class="story-images"  slot="img" src="https://res.cloudinary.com/fernandez-cano/image/upload/w_720,h_720/SquareFit_20180830_00300786.jpg" />
                        </b-carousel-slide>
                        <b-carousel-slide>
                            <img alt="image slot" class="story-images"  slot="img" src="https://res.cloudinary.com/fernandez-cano/image/upload/w_720,h_720/SquareFit_20180830_00293812.jpg" />
                        </b-carousel-slide>
                        <b-carousel-slide>
                            <img alt="image slot" class="story-images"  slot="img" src="https://res.cloudinary.com/fernandez-cano/image/upload/w_720,h_720/SquareFit_20180830_00315395.jpg" />
                        </b-carousel-slide>
                        <b-carousel-slide>
                            <img alt="image slot" class="story-images"  slot="img" src="https://res.cloudinary.com/fernandez-cano/image/upload/w_720,h_720/SquareFit_20180830_00320251.jpg" />
                        </b-carousel-slide>
                        <b-carousel-slide>
                            <img alt="image slot" class="story-images"  slot="img" src="https://res.cloudinary.com/fernandez-cano/image/upload/w_720,h_720/SquareFit_20180908_16043427.jpg" />
                        </b-carousel-slide>
                        <b-carousel-slide>
                            <img alt="image slot" class="story-images"  slot="img" src="https://res.cloudinary.com/fernandez-cano/image/upload/w_720,h_720/SquareFit_20180830_00291560.jpg" />
                        </b-carousel-slide>
                        <b-carousel-slide>
                            <img alt="image slot" class="story-images"  slot="img" src="https://res.cloudinary.com/fernandez-cano/image/upload/w_720,h_720/SquareFit_20180830_00294868.jpg" />
                        </b-carousel-slide>
                        <b-carousel-slide>
                            <img alt="image slot" class="story-images"  slot="img" src="https://res.cloudinary.com/fernandez-cano/image/upload/w_720,h_720/SquareFit_20180908_16042728.jpg" />
                        </b-carousel-slide>
                        <b-carousel-slide>
                            <img alt="image slot" class="story-images"  slot="img" src="https://res.cloudinary.com/fernandez-cano/image/upload/w_720,h_720/SquareFit_20180908_16044820.jpg" />
                        </b-carousel-slide>
                        <b-carousel-slide>
                            <img alt="image slot" class="story-images"  slot="img" src="https://res.cloudinary.com/fernandez-cano/image/upload/w_720,h_720/SquareFit_20180830_00304658.jpg" />
                        </b-carousel-slide>
                        <b-carousel-slide>
                            <img alt="image slot" class="story-images"  slot="img" src="https://res.cloudinary.com/fernandez-cano/image/upload/w_720,h_720/SquareFit_20180830_00292731.jpg" />
                        </b-carousel-slide>
                        <b-carousel-slide>
                            <img alt="image slot" class="story-images"  slot="img" src="https://res.cloudinary.com/fernandez-cano/image/upload/w_720,h_720/SquareFit_20180908_16043078.jpg" />
                        </b-carousel-slide>
                        <b-carousel-slide>
                            <img alt="image slot" class="story-images"  slot="img" src="https://res.cloudinary.com/fernandez-cano/image/upload/w_720,h_720/SquareFit_20180830_00311614.jpg" />
                        </b-carousel-slide>
                        <b-carousel-slide>
                            <img alt="image slot" class="story-images"  slot="img" src="https://res.cloudinary.com/fernandez-cano/image/upload/w_720,h_720/SquareFit_20180830_00284223.jpg" />
                        </b-carousel-slide>
                        <b-carousel-slide>
                            <img alt="image slot" class="story-images"  slot="img" src="https://res.cloudinary.com/fernandez-cano/image/upload/w_720,h_720/SquareFit_20180830_00285775.jpg" />
                        </b-carousel-slide>
                        <b-carousel-slide>
                            <img alt="image slot" class="story-images"  slot="img" src="https://res.cloudinary.com/fernandez-cano/image/upload/w_720,h_720/SquareFit_20180830_00285183.jpg" />
                        </b-carousel-slide>
                        <b-carousel-slide>
                            <img alt="image slot" class="story-images"  slot="img" src="https://res.cloudinary.com/fernandez-cano/image/upload/w_720,h_720/SquareFit_20180908_16041982.jpg" />
                        </b-carousel-slide>
                        <b-carousel-slide>
                            <img alt="image slot" class="story-images"  slot="img" src="https://res.cloudinary.com/fernandez-cano/image/upload/w_720,h_720/SquareFit_20180908_16042272.jpg" />
                        </b-carousel-slide>
                        <b-carousel-slide>
                            <img alt="image slot" class="story-images"  slot="img" src="https://res.cloudinary.com/fernandez-cano/image/upload/w_720,h_720/SquareFit_20180908_16041394.jpg" />
                        </b-carousel-slide>
                        <b-carousel-slide>
                            <img alt="image slot" class="story-images"  slot="img" src="https://res.cloudinary.com/fernandez-cano/image/upload/w_720,h_720/SquareFit_20180908_16041377.jpg" />
                        </b-carousel-slide>
                    </b-carousel>
                </div>
            </div>
            <!-- row -->
        </div>
        <!-- container -->
    </section>
</template>
<script>
export default {
  name: 'story-line',
  data () {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = true
    }
  }
}
</script>
