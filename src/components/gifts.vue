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
                                <h2 class="ceremony-text-space ceremony-text-size">El mejor regalo que podríamos tener es  poder compartir con nuestros seres queridos un día tan importante y de tanta alegría para nosotros.
                                Si además quisieran llevar un obsequio, les agradeceríamos que fuera en efectivo.
                                </h2>
                                <h5>Para su comodidad hemos incluido los números de cuenta a los que podrían hacer llegar el depósito.</h5>
                            </div>
                        </div>
                        <div class="row">
                            <div class="gift-space col-sm">
                            </div>
                        </div>
                        <div class="row">
                            <div  class="col-sm ceremony-text-space">
                                <button @mouseleave="hideAccount1" @mouseover="viewAccount1" class="btn btn-circle btn-xl" type="button">
                                    <img v-if="flag1" alt="Gallery Image" class="image-bac-icon" src="../../src/assets/images/icons/bac3.png"/>
                                    <h5 class="cuentas" v-if="!flag1">María José</h5>
                                    <h5 class="cuentas" v-if="!flag1">Rivera Cano</h5>
                                    <h5 class="cuentas" v-if="!flag1">$ 740973711</h5>
                                </button>
                            </div>
                            <div  class="col-sm">
                                <button @mouseleave="hideAccount2" @mouseover="viewAccount2" class="btn btn-circle btn-xl" type="button">
                                    <img v-if="flag2" alt="Gallery Image" class="image-bac-icon" src="../../src/assets/images/icons/bac3.png"/>
                                    <h5 class="cuentas" v-if="!flag2">Franklyn Alfredo</h5>
                                    <h5 class="cuentas" v-if="!flag2">Fernández Sabillón</h5>
                                    <h5 class="cuentas" v-if="!flag2">Lps 727200791</h5>
                                </button>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm">
                                <h5>Esta información estará disponible a partir del jueves 18 de Octubre al mediodía hasta el domingo 21 de Octubre al mediodía.</h5>
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
var flag = 1
export default {

  name: 'gifts',

  data () {
    return {
      flag1: flag,
      flag2: flag
    }
  },
  methods: {
    viewAccount1: function (event) {
      this.flag1 = 0
    },
    viewAccount2: function (event) {
      this.flag2 = 0
    },
    hideAccount1: function (event) {
      this.flag1 = 1
    },
    hideAccount2: function (event) {
      this.flag2 = 1
    }
  }
}
</script>
<style lang="css" scoped="">
</style>