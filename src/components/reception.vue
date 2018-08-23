<template>
    <section class="section galery-area center-text">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <div class="heading">
                        <h2 class="title">
                            Recepción
                        </h2>
                        <span class="heading-bottom">
                            <i class="icon icon-star">
                            </i>
                        </span>
                    </div>
                    <div class="ceremony margin-bottom">
                        <div class="row">
                            <div class="col-sm">
                                <maps :lat='lat' :lng='lng'>
                                </maps>
                            </div>
                            <div class="col-sm">
                                <p>
                                    Luego de la misa, les esperamos en la cena y celebración que se llevara a cabo en los salones Emperador I, II y II del Convention center del Hotel Copantl en la colonia (no se, voy a verificar).
                                </p>
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
      lat: '15.490718',
      lng: '-88.036218'
    }
  }
}
</script>
<style lang="css" scoped="">
</style>