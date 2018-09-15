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
                            <img class="suculenta-icon" src="../../src/assets/images/weddingrings3.png">
                        </span>
                    </div>
                    <!-- Botones de confirmacion -->
                    <div class="row">
                        <div class=" col-md-12 offset-sm-12 ">
                            <div class="confirm-button">
                                <button :disabled="guest.response !== null" class="btn-rsvp btn-primary" type="button" v-on:click="setYes">
                                    ¡Ahí estaré! 🙂
                                </button>
                            </div>
                        </div>
                        <div class=" col-md-12  offset-sm-12 ">
                            <div class="confirm-button">
                                <button :disabled="guest.response !== null" class="btn-rsvp btn-primary" type="button" v-on:click="setNo">
                                    No podré asistir ☹️
                                </button>
                            </div>
                        </div>
                    </div>
                    <!-- form -->
                    <form v-if="flag === 1">
                        <p class="input-space">
                            Usted cuenta con {{guest.plusone}} asientos.
                        </p>
                        <div class="form-group">
                            <div class="row">
                                <div class="col-md-4 offset-md-4 col-sm-4 offset-sm-4 input-space" v-for="item in items" :key="item.message">
                                    <input v-model="guests[item]" class="form-control" id="plusones" placeholder="Ingrese invitado">
                                </div>
                            </div>
                        </div>
                        <button class="border-btn" type="button" v-on:click="send">
                                    Enviar
                                </button>
                      <!--   <button class="border-btn" v-on:click="flag = 1">
                            Enviar
                        </button> -->
                    </form>
                    <!-- image-gallery -->
                </div>
                <div class="col-sm-12">
                  <h3>{{answerMessage}}</h3>
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
      answerMessage: '',
      plusone: plusone,
      message: '',
      guests: []
    }
  },
  mounted () {
    if (this.guest.response === true) {
      this.answerMessage = '¡Te esperamos!'
    } else if (this.guest.response === false) {
      this.answerMessage = 'Vamos a extrañarles'
    }
  },
  props: ['guest', 'items'],
  methods: {
    setYes: function (event) {
      this.flag = 1
      if (JSON.parse(this.guest.plusonelist)) {
        this.guests = JSON.parse(this.guest.plusonelist)
      }
    },
    setNo: function (event) {
      this.flag = 2
      axios
        .put('https://phoenixdawn.herokuapp.com/api/guest/denyResponse', {
          id: this.guest.id
        }).then(response => {
          this.answerMessage = 'Vamos a extrañarles'
        })
    },
    send: function (event) {
      axios
        .put('https://phoenixdawn.herokuapp.com/api/guest/updateGuestList', {
          response: true,
          plusonelist: this.guests,
          id: this.guest.id
        }).then(response => {
          this.answerMessage = '¡Te esperamos!'
        })
    }
  }
}
</script>
