<template>
    <section class="section reception-area center-text">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <div class="heading">
                        <h2 class="title">
                            Recepción
                        </h2>
                        <span class="heading-bottom">
                            <img class="suculenta-icon" src="../../src/assets/images/suculentaIcon.png">
                        </span>
                    </div>
                    <div class="margin-bottom">
                        <div class="row">
                            <div class="col-sm">
                                <maps :lat='lat' :lng='lng'>
                                </maps>
                            </div>
                            <div class="col-sm">
                                <p class="reception">
                                    ¡Ven a celebrar con nosotros! La recepción será en los Salones Emperador I, II y III del Centro de Convenciones del Hotel Copantl.
                                    ¡Los esperamos!
                                </p>
                                <h5>
                                    <a target="_blank" class="border-btn map-link" href="https://www.google.com/maps/place/Centro+de+Convenciones+Copantl/@15.490392,-88.03648,18.56z/data=!4m12!1m6!3m5!1s0x8f665c822d13c36f:0x8dd04476a2d355a5!2sIglesia+Maria+Reina+del+Mundo!8m2!3d15.489157!4d-88.0455709!3m4!1s0x0:0xbfab15e8d6ecd573!8m2!3d15.4907179!4d-88.036218?hl=es">
                                       Cómo llegar
                                    </a>
                                </h5>
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
  name: 'reception',

  data () {
    return {
      lat: '15.4907182',
      lng: '-88.036218'
    }
  }
}
</script>
<style lang="css" scoped="">
</style>