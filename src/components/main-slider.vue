<template>
    <section class="section main-slider center-text">
        <header>
            <div class="container">
                <a class="logo" href="#">
                    <img alt="Logo" src="../../src/assets/images/icons/Weddinglogo.png"/>
                </a>
                <div @click="$set(mobileMenuControl, 'selected', !mobileMenuControl.selected)" class="menu-nav-icon" data-nav-menu="#main-menu">
                    <i class="icon icon-bars">
                    </i>
                </div>
                <ul :class="{visible:mobileMenuControl.selected}" class="main-menu visible-on-click" id="main-menu">
                    <li>
                        <a>
                            INICIO
                        </a>
                    </li>
                    <li @mouseleave="$set(detailsControl, 'selected', !detailsControl.selected)" class="drop-down">
                        <a :class="{mouseover:detailsControl.selected}" @mouseover="$set(detailsControl, 'selected', !detailsControl.selected)">
                            DETALLES
                            <i class="icon icon-caret-down">
                            </i>
                        </a>
                        <ul class="drop-down-menu">
                            <li>
                                <a v-on:click="scrollToCeremony">
                                    CEREMONIA
                                </a>
                            </li>
                            <li>
                                <a v-on:click="scrollToReception">
                                    RECEPCIÓN
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a v-on:click="scrollToGifts">
                            OBSEQUIOS
                        </a>
                    </li>
                    <li @mouseleave="$set(rsvpControl, 'selected', !rsvpControl.selected)" class="drop-down">
                        <a :class="{mouseover:rsvpControl.selected}" @mouseover="$set(rsvpControl, 'selected', !rsvpControl.selected)">
                            RSVP
                            <i class="icon icon-caret-down">
                            </i>
                        </a>
                        <ul class="drop-down-menu">
                            <li>
                                <a v-on:click="scrollToCountDown">
                                    CUANTO FALTA
                                </a>
                            </li>
                            <li>
                                <a v-on:click="scrollToRSVP">
                                    CONFIRME SU ASISTENCIA
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li @mouseleave="$set(moreControl, 'selected', !moreControl.selected)" class="drop-down">
                        <a :class="{mouseover:moreControl.selected}" @mouseover="$set(moreControl, 'selected', !moreControl.selected)">
                            MAS
                            <i class="icon icon-caret-down">
                            </i>
                        </a>
                        <ul class="drop-down-menu">
                            <li>
                                <a v-on:click="scrollToStoryLine">
                                    NUESTRA HISTORIA
                                </a>
                            </li>
                            <li>
                                <a v-on:click="scrollToContact">
                                    PLAYLIST
                                </a>
                            </li>
                            <li>
                                <a v-on:click="print">
                                    IMPRIMIR ESTA INIVITACIÓN
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </header>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h3 class="slider-space">
                        Con la bendición de Dios y de nuestros Padres
                    </h3>
                </div>
            </div>
            <div class="row reduced-row-height">
                <div class="col-6">
                    <h3 class="reduced-line-height">
                        Edwin Fernández
                    </h3>
                </div>
                <div class="col-6">
                    <h3 class="reduced-line-height">
                        Carlos Sarmiento
                    </h3>
                </div>
            </div>
            <div class="row reduced-row-height">
                <div class="col-12">
                    <h3 class="">
                        y
                    </h3>
                </div>
            </div>
            <div class="row ">
                <div class="col-6">
                    <h3>
                        Claudia Sabillón
                    </h3>
                </div>
                <div class="col-6">
                    <h3>
                        Marvelí Cano
                    </h3>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <h3>
                        Nosotros
                    </h3>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <h1 class="title">
                        Franklyn Alfredo
                    </h1>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <h2 class="title">
                        y
                    </h2>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <h1 class="title slider-bot-space">
                        María José
                    </h1>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <h3 class="title">
                        Tenemos el honor de invitarles a nuestra boda
                    </h3>
                </div>
            </div>
        </div>
        <!-- slider-content-->
        <!--display-table-cell-->
    </section>
</template>
<script>
import axios from 'axios'
var VueScrollTo = require('vue-scrollto')

export default {
  name: 'mainSlider',

  data () {
    return {
      detailsControl: {},
      rsvpControl: {},
      moreControl: {},
      mobileMenuControl: {}
    }
  },
  props: ['guest'],
  methods: {
    displayMobileMenu: function (argument) {
    },
    print: function (event) {
      axios({
        url: 'https://phoenixdawn.herokuapp.com/api/pdf/' + this.guest.plusone,
        method: 'GET',
        responseType: 'blob' // important
      }).then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]))
        const link = document.createElement('a')
        link.href = url
        link.setAttribute('download', 'invitation.pdf') // or any other extension
        document.body.appendChild(link)
        link.click()
      })
    },
    scrollToHome: function (event) {
      VueScrollTo.scrollTo('#ceremony-comp', 500)
    },
    scrollToCeremony: function (event) {
      VueScrollTo.scrollTo('#ceremony-comp', 500)
    },
    scrollToReception: function (event) {
      VueScrollTo.scrollTo('#reception-comp', 500)
    },
    scrollToGifts: function (event) {
      VueScrollTo.scrollTo('#gifts-comp', 500)
    },
    scrollToRSVP: function (event) {
      VueScrollTo.scrollTo('#rsvp-comp', 500)
    },
    scrollToCountDown: function (event) {
      VueScrollTo.scrollTo('#countdown-comp', 500)
    },
    scrollToContact: function (event) {
      VueScrollTo.scrollTo('#contact-comp', 500)
    },
    scrollToStoryLine: function (event) {
      VueScrollTo.scrollTo('#story-comp', 500)
    }
  }
}
</script>
<style lang="css" scoped="">
</style>