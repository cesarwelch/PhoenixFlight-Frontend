<template>
	<section class="section ceremony-area center-text">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12">
                        <div class="heading">
                            <h2 class="title">
                                Ceremonia
                            </h2>
                            <span class="heading-bottom">
                                <i class="color-white icon icon-star">
                                </i>
                            </span>
                        </div>
                        <div class="ceremony margin-bottom">
                            <div class="row">
                                <div class="col-sm">
                                    <p class="desc">
                                        We assist our clients in creating memorable, magical
                        celebrations that exceed expectations. Our personal approach ensures the weddings we
                        plan are meaningful and truly reflect our clients as individuals, as couples, and states
                        something about their shared values and sense of style.
                                    </p>
                                </div>
                                <div class="col-sm">
                                    <maps>
                                    </maps>
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
  name: 'ceremony',

  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
</style>