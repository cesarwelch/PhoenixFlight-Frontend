<template>
    <section class="section counter-area center-text">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <div class="heading">
                        <h2 class="title">
                            Nos vemos en
                        </h2>
                        <span class="heading-bottom">
                            <img class="suculenta-icon" src="../../src/assets/images/suculentaIcon.png">
                        </span>
                    </div>
                </div>
                <div class="col-sm-2">
                </div>
                <div class="col-sm-8">
                    <div class="remaining-time">
                        <div id="clock">
                            <div class="time-sec">
                                <span class="title">
                                    {{days}}
                                </span>
                                dias
                            </div>
                            <div class="time-sec">
                                <span class="title">
                                    {{hours}}
                                </span>
                                horas
                            </div>
                            <div class="time-sec">
                                <span class="title">
                                    {{minutes}}
                                </span>
                                minutos
                            </div>
                            <div class="time-sec">
                                <span class="title">
                                    {{seconds}}
                                </span>
                                segundos
                            </div>
                        </div>
                    </div>
                    <!-- remaining-time -->
                </div>
                <!-- col-sm-10 -->
            </div>
            <!-- row -->
        </div>
        <!-- container -->
    </section>
</template>
<script>
let days = 0
let hours = 0
let minutes = 0
let seconds = 0

export default {
  name: 'countdown',
  data () {
    return {
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds
    }
  },
  mounted () {
    var self = this
    var countDownDate = new Date('Oct 20, 2018 18:30:00').getTime()
    setInterval(function () {
      var now = new Date().getTime()
      var distance = countDownDate - now
      self.days = Math.floor(distance / (1000 * 60 * 60 * 24))
      self.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      self.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      self.seconds = Math.floor((distance % (1000 * 60)) / 1000)
    }, 1000)
  }
}
</script>
<style lang="css" scoped="">
</style>