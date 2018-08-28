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
                                <p class="desc">
                                    La ceremonia religiosa se llevará a cabo el día sábado 20 de Octubre del presente año en la Iglesia Maria Reina del Mundo (ubicada en La colonia Primavera, parte alta de la colonia Trejo) a las <u>6:00pm.</u>
                                </p>
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
      lat: '15.489157',
      lng: '-88.045571'
    }
  }
}
</script>
<style lang="css" scoped="">
</style>