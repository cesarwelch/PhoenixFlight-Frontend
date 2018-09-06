<template>
    <section class="section main-slider center-text">
        <header>
            <div class="container">
                <a class="logo" href="#">
                    <img alt="Logo" src="../../src/assets/images/icons/Weddinglogo.png"/>
                </a>
                <div class="menu-nav-icon" data-nav-menu="#main-menu" @click="$set(mobileMenuControl, 'selected', !mobileMenuControl.selected)">
                    <i class="icon icon-bars">
                    </i>
                </div>
                <ul class="main-menu visible-on-click" id="main-menu" :class="{visible:mobileMenuControl.selected}">
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
                                <a v-on:click="scrollToContact">
                                    PLAYLIST
                                </a>
                            </li>
                            <li>
                                <a v-on:click="scrollToStoryLine">
                                    STORY LINE
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    IMPRIMIR
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
                        Edwin A. Fernández
                    </h3>
                </div>
                <div class="col-6">
                    <h3 class="reduced-line-height">
                        Carlos R. Sarmiento
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
                        Claudia P. Sabillón
                    </h3>
                </div>
                <div class="col-6">
                    <h3>
                        Marvelí d. S. Cano
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
                        Franklyn A. Fernández
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
                        María J. R. Cano
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
  methods: {
    displayMobileMenu: function (argument) {
    },
    print: function (url) {
      // printJS('./static/img/sky1.d26773d.jpg')
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