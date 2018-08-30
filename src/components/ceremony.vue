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
                                    La ceremonia religiosa será el día sábado 20 de Octubre del presente año en la Iglesia Maria Reina del Mundo (ubicada en La colonia Primavera, parte alta de la colonia Trejo) a las <u>6:30p.m.</u>
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