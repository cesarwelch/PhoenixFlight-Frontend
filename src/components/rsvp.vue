<template>
    <section class="section galery-area center-text">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <div class="heading">
                        <h2 class="title">
                            Confirma tu asistencia
                        </h2>
                        <span class="heading-bottom">
                            <i class="icon icon-star">
                            </i>
                        </span>
                    </div>
                    <!-- Botones de confirmacion -->
                    <div class="row">
                        <div class=" col-md-12 offset-sm-12 ">
                            <div class="confirm-button">
                                <button class="btn btn-primary" type="button" v-on:click="setYes">
                                    Si
                                </button>
                            </div>
                        </div>
                        <div class=" col-md-12  offset-sm-12 ">
                            <div class="confirm-button">
                                <button class="btn btn-primary" type="button" v-on:click="setNo">
                                    No
                                </button>
                            </div>
                        </div>
                    </div>
                    <!-- form -->
                    <form v-if="flag === 1">
                        <p class="input-space">
                            Usted cuenta con x asientos.
                        </p>
                        <div class="form-group">
                            <div class="row">
                                <div class="col-md-4 offset-md-4 col-sm-4 offset-sm-4 input-space" v-for="item in items" :key="item.message">
                                    <input   class="form-control" id="plusones" placeholder="Ingrese invitado numero 1">
                                </div>
                            </div>
                        </div>
                        <a class="border-btn" href="#">
                            Enviar
                        </a>
                    </form>
                    <!-- image-gallery -->
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
  name: 'rsvp',
  data () {
    return {
      flag: flag,
      items: [
        { message: 'Foo' },
        { message: 'Bar' }
      ]
    }
  },
  methods: {
    setYes: function (event) {
      this.flag = 1
      console.log(flag)
    },
    setNo: function (event) {
      this.flag = 2
      console.log(flag)
    }
  }
}
</script>
