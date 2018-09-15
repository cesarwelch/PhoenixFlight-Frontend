<template>
    <section class="section gifts-area center-text">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <div class="heading">
                        <h2 class="title">
                            Obsequios
                        </h2>
                        <span class="heading-bottom">
                            <img class="suculenta-icon" src="../../src/assets/images/weddingrings3.png">
                        </span>
                    </div>
                    <div class="ceremony margin-bottom">
                        <div class="row">
                            <div class="col-sm">
                                <h2 class="ceremony-text-space ceremony-text-size">El mejor regalo que podríamos tener es el poder compartir con nuestros seres queridos un día tan importante y de tanta alegría para nosotros.
                                Si además quisieran llevar un obsequio, les agradeceríamos que fuera en efectivo.
                                </h2>
                                <h5>Para su comodidad hemos incluido los números de cuenta a los que podrían hacer llegar el depositó.</h5>
                            </div>
                        </div>
                        <div class="row">
                            <div class="gift-space col-sm">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm ceremony-text-space">
                                <button class="btn btn-circle btn-xl" type="button">
                                    <img alt="Gallery Image" class="image-bac-icon" src="../../src/assets/images/icons/bac3.png"/>
                                </button>
                            </div>
                            <div class="col-sm">
                                <button class="btn btn-circle btn-xl" type="button">
                                    <img alt="Gallery Image" class="image-bac-icon" src="../../src/assets/images/icons/bac3.png"/>
                                </button>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm">
                                <h5>Esta información estará disponible a partir del jueves 18 de octubre al mediodía hasta el domingo 21 de octubre al mediodía.</h5>
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
var flag = 0
export default {

  name: 'gifts',

  data () {
    return {
      flag: flag
    }
  },
  methods: {
    viewAccount: function (event) {
      this.flag = 1
    }
  }
}
</script>
<style lang="css" scoped="">
</style>