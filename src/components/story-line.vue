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
                            <img class="suculenta-icon" src="../../src/assets/images/suculentaIcon.png"/>
                        </span>
                    </div>
                    <!-- wedding-details -->
                </div>
                <!-- col-sm-10 -->
            </div>
            <div class="row">
              <div class="col-sm">
                <h2>Nuestra historia desde el 20 de abril del 2013 hasta hoy</h2>
              </div>
                <div class="col-sm">
                    <b-carousel controls :interval="4000" @sliding-end="onSlideEnd" @sliding-start="onSlideStart" background="#ababab" id="carousel" img-heigth img-width="720" indicators="" class="story-images" v-model="slide">
                        <b-carousel-slide>
                            <img alt="image slot" class="story-images"  slot="img" src="https://lh3.googleusercontent.com/bIkFAFYmUrvZX4veHcvkrBOSxJpXt8cIlJs3zAGsgfl5kMDEvWoroQEiR74kmyhDVBLa_dqBsN2wK4f2vcNZ=w1920-h948-rw" width="720"/>
                        </b-carousel-slide>
                        <b-carousel-slide>
                            <img alt="image slot" class="story-images"  slot="img" src="https://lh5.googleusercontent.com/JcpU0Can2STKOr8c1Fae2oHzCmrdQcadc2i5Zjf7HqnZi95uKBr88-AhS4QtP8a5bJhvLOVbmcyjSYWoOygw=w1920-h948-rw" width="720"/>
                        </b-carousel-slide>
                        <b-carousel-slide>
                            <img alt="image slot" class="story-images"  slot="img" src="https://lh3.googleusercontent.com/LXgxzlHV3MLx3Vahz77TS-LxMDvZf37YwH8SnpHB2iOHykxjLpJSKf2PT0Y4XIzsY6cC-HwDDio1cv6_fCju=w1920-h948-rw" width="720"/>
                        </b-carousel-slide>
                        <b-carousel-slide>
                            <img alt="image slot" class="story-images"  slot="img" src="https://lh4.googleusercontent.com/hskdith3iM7COYsQj3C3rgE8EwLx6Zd12rOHNlLSgLiwe6dpIPy3l5jlvMTuxcYkg78EDfiEY6tMu4aVlAeR=w1920-h948-rw" width="720"/>
                        </b-carousel-slide>
                        <b-carousel-slide>
                            <img alt="image slot" class="story-images"  slot="img" src="https://lh4.googleusercontent.com/HrVKmN9MPN3gPQim0OHIcVrh3beYTA-RIJDcsOxDh5yhL2BsLczXiY5h5wynpaFFvHOskCv7y-77S4TYRvLL=w1920-h948-rw" width="720"/>
                        </b-carousel-slide>
                        <b-carousel-slide>
                            <img alt="image slot" class="story-images"  slot="img" src="https://lh4.googleusercontent.com/lw5KT1mztNjjY3KysKJuO3V-M8IYWtU3kiwJZ7WkfbtD99_JcsOJZ6Yg4mr3Ov1FRSjL_NJov-TPuC-oxhAS=w1920-h948-rw" width="720"/>
                        </b-carousel-slide>
                        <b-carousel-slide>
                            <img alt="image slot" class="story-images"  slot="img" src="https://lh6.googleusercontent.com/9OxfDPbA9NgvKMWdN_xMIu0fqme0yhQ6QmLV_hmU9rJ3MOftj_1N-6gZAaxFWDodUzzLUTiEcCYge74ijF_U=w1920-h948-rw" width="720"/>
                        </b-carousel-slide>
                        <b-carousel-slide>
                            <img alt="image slot" class="story-images"  slot="img" src="https://lh6.googleusercontent.com/fmQ7ekJlInkHh-1eMUL4L7JWocuZUhbntOmjrVL54FOTTi_JRUo24lvOkPYA0_PCVgKTjw5htxAHObW2IE98=w1920-h948-rw" width="720"/>
                        </b-carousel-slide>
                        <b-carousel-slide>
                            <img alt="image slot" class="story-images"  slot="img" src="https://lh5.googleusercontent.com/vQgyLtMBzXkNEnWZgonc4rTeBzLxsw_nCt98wIu6VJE-l34vIj7gJNXUh_OGn2eAc1XYCRN8GMHb8IVvnMDo=w1920-h948-rw" width="720"/>
                        </b-carousel-slide>
                        <b-carousel-slide>
                            <img alt="image slot" class="story-images"  slot="img" src="https://lh5.googleusercontent.com/41vbtoCUfTsz7Bj3J5L-sCJ60QsNKjVH2-oZtUhiiWPEopLOLB3WZ-uqpiCCBAkWFfIrc0EcJboTtWIhF2n2=w1920-h948-rw" width="720"/>
                        </b-carousel-slide>
                        <b-carousel-slide>
                            <img alt="image slot" class="story-images"  slot="img" src="https://lh5.googleusercontent.com/3lJfyCCqJKaQ3IknC7C7-SHUrnwdfgiak7GpbZbjyuWepV_EuRsjUsZYkNOnfU3s0gpv0Qsm7sCmpq3ZonBY=w1920-h948-rw" width="720"/>
                        </b-carousel-slide>
                        <b-carousel-slide>
                            <img alt="image slot" class="story-images"  slot="img" src="https://lh3.googleusercontent.com/gwyRjnwH9DL5MU9yJKBuwG57B2DrYboFFMCUQAVzBYh0abkhdyJCqfC9lOLm5zRcxG_Noh9C8FeUkw3xxZNP=w1920-h948-rw" width="720"/>
                        </b-carousel-slide>
                        <b-carousel-slide>
                            <img alt="image slot" class="story-images"  slot="img" src="https://lh5.googleusercontent.com/JId_MuoOizZ4AUTuCAY7JR8fycvbQjudqI-JZji8nYq4Fjd-EDIePLP1kIZNGJq40va0xLRGqT2pLAu6BLVr=w1920-h948-rw" width="720"/>
                        </b-carousel-slide>
                        <b-carousel-slide>
                            <img alt="image slot" class="story-images"  slot="img" src="https://lh6.googleusercontent.com/c44GEU4E9LdTYaiAawWcyC3fxKPAOhK2ouU014Xn95Z50lkKO6Ez4Vkh9QdB9BWBvgqFHZv7Omp4Oy8ffvmX=w1920-h948-rw" width="720"/>
                        </b-carousel-slide>
                        <b-carousel-slide>
                            <img alt="image slot" class="story-images"  slot="img" src="https://lh3.googleusercontent.com/9Jv-LYi0nAhWUALKUzHZNct7FMpe3gHrHtuhtFkj5cZQ9Wl0cZKCR3ioUjqLtokyHUlY3HLBCLcvxn_W35pw=w1920-h948-rw" width="720"/>
                        </b-carousel-slide>
                        <b-carousel-slide>
                            <img alt="image slot" class="story-images"  slot="img" src="https://lh4.googleusercontent.com/aJHypv4zPPsdL47yT4BAFf0QVxQc5FstcZob8UfioN83tCH3vTvaUXLomrnU-NAD7b5jifDXdTx6DlOcTlKO=w1920-h948-rw" width="720"/>
                        </b-carousel-slide>
                        <b-carousel-slide>
                            <img alt="image slot" class="story-images"  slot="img" src="https://lh5.googleusercontent.com/f0wFNHe210d6-ewAd6ly_SLzF33mYZ01iyLWSa-qysYIcV7-k8O9AaCnFb6m-TWfOjBCMWHtz_ZVb4cnZoCr=w1920-h887-rw" width="720"/>
                        </b-carousel-slide>
                        <b-carousel-slide>
                            <img alt="image slot" class="story-images"  slot="img" src="https://lh3.googleusercontent.com/lswzq9v5PdgQmr7CvfGsnYOcZKVOjLVBH3B634FsRUphtN-2mvzNJpaVDuM1WRTal8sHVjzpr6PzYImHlFi7=w1920-h887-rw" width="720"/>
                        </b-carousel-slide>
                        <b-carousel-slide>
                            <img alt="image slot" class="story-images"  slot="img" src="https://lh3.googleusercontent.com/tE2TzjZU59Whve1I_Pv4Q7G7Hp-sCK4QPqiqFLWXCcxQ4OThoZpEYpYcqWYgJb_u6wzvxTTHS3TXSt_11tzr=w1920-h887-rw" width="720"/>
                        </b-carousel-slide>
                        <b-carousel-slide>
                            <img alt="image slot" class="story-images"  slot="img" src="https://lh3.googleusercontent.com/aysE_CaGZJHf4o2ByL2WkEp1hoFA9sC7p3RbPNTLVEoJMf9Fv9wST0fgbB0ZHcZhwbLsGOWfwu8OQ3GxjJ16=w1920-h887-rw" width="720"/>
                        </b-carousel-slide>
                    </b-carousel>
                    <p class="mt-4">
                        Slide #: {{ slide }}
                        Sliding: {{ sliding }}
                    </p>
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
