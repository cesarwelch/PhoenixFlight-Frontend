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
                                    Posteriormente, les esperamos en la recepción que se llevará  a cabo en los salones Emperador I, II y II del Centro de Convenciones del Hotel Copantl.
                                    ¡Los esperamos!
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