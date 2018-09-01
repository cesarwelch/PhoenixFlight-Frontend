<template>
    <section class="section rsvp-area center-text">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <div class="heading">
                        <h2 class="title">
                            Confirma tu asistencia
                        </h2>
                        <span class="heading-bottom">
                            <img class="suculenta-icon" src="../../src/assets/images/suculentaIcon.png">
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
                            Usted cuenta con {{plusone}} asientos.
                        </p>
                        <div class="form-group">
                            <div class="row">
                                <div class="col-md-4 offset-md-4 col-sm-4 offset-sm-4 input-space" v-for="item in items" :key="item.message">
                                    <input v-model="message" class="form-control" id="plusones" placeholder="Ingrese invitado">
                                    {{message}}
                                </div>
                            </div>
                        </div>
                        <button class="border-btn" type="button" v-on:click="">
                                    Enviar
                                </button>
                      <!--   <button class="border-btn" v-on:click="flag = 1">
                            Enviar
                        </button> -->
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
import axios from 'axios'
var plusone = 0
var flag = 0

export default {
  name: 'rsvp',
  data () {
    return {
      flag: flag,
      plusone: plusone,
      items: [],
      message: ''
    }
  },
  mounted () {
    axios
      .get('http://localhost:8000/api/guest/c4ca4238a0b923820dcc509a6f75849b')
      .then(response => {
        this.plusone = response.data[0].plusone
        for (var i = 0; i < this.plusone; i++) {
          this.items[i] = i
        }
      })
  },
  methods: {
    setYes: function (event) {
      this.flag = 1
    },
    setNo: function (event) {
      this.flag = 2
    }
  }
}
</script>
