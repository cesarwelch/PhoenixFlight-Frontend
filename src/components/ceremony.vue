<template>
    <section class="section ceremony-area center-text">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <div class="heading">
                        <h2 class="title">
                            Ceremonia
                        </h2>
                        <span class="heading-bottom">
                            <img class="suculenta-icon" src="../../src/assets/images/suculentaIcon.png">
                        </span>
                    </div>
                    <div class="ceremony margin-bottom">
                        <div class="row">
                            <div class="col-sm">
                                <h5 class="desc">
                                    La ceremonia religiosa será el día sábado 20 de Octubre del presente año en la Iglesia María Reina del Mundo (ubicada en La colonia Primavera, parte alta de la colonia Trejo) a las <u>6:30p.m.</u>
                                </h5>
                                <h5>
                                    <a target="_blank" class="border-btn map-link" href="https://www.google.com/maps/place/Iglesia+Maria+Reina+del+Mundo/@15.4891622,-88.0477596,17z/data=!3m1!4b1!4m5!3m4!1s0x8f665c822d13c36f:0x8dd04476a2d355a5!8m2!3d15.489157!4d-88.0455709?hl=es">
                                       Cómo llegar
                                    </a>
                                </h5>
                            </div>
                            <div class="col-sm">
                                <maps :lat='lat' :lng='lng'>
                                </maps>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- col-sm-10 -->
            </div>
            <!-- row -->
        </div>
        <!-- container -->
    </section>
</template>
<script>
import maps from './maps.vue'

export default {
  components: {
    maps
  },
  name: 'ceremony',
  data () {
    return {
      lat: '15.489198',
      lng: '-88.045567'
    }
  }
}
</script>
<style lang="css" scoped="">
</style>