<template>
    <!-- Slideshow -->
    <div class="home">
        <main-slider>
        </main-slider>
        <div v-if="path">
            <!-- ceremony -->
            <ceremony>
            </ceremony>
            <!-- Reception -->
            <reception>
            </reception>
            <!-- Story line -->
            <story-line>
            </story-line>
            <!-- gifts -->
            <gifts>
            </gifts>
            <!-- countdown -->
            <countdown>
            </countdown>
            <!-- RSVP -->
            <rsvp>
            </rsvp>
            <!-- contact -->
            <contact>
            </contact>
            <!-- contact -->
            <footer>
                <div class="container center-text">
                    <div class="logo-wrapper">
                        <a class="logo" href="#">
                            <img alt="Logo Image" src="../../src/assets/images/logo-black.png"/>
                        </a>
                        <i class="icon icon-star">
                        </i>
                    </div>
                    <div class="newsletter">
                        <h4 class="title">
                            RECEIVE NEWS IN YOUR EMAIL
                        </h4>
                        <p>
                            Join our mailing list to receive news and announcements
                        </p>
                        <div class="email-area">
                            <form>
                                <!--<input class="email-input" placeholder="Your Email" type="text">
                                <button class="submit-btn" type="submit">
                                    <i class="icon icon-email-plane">
                                    </i>
                                </button>
                            </input>-->
                            </form>
                        </div>
                        <!-- email-area -->
                    </div>
                    <!-- newsletter -->
                    <ul class="social-icons">
                        <li>
                            <a href="#">
                                <i class="icon icon-heart">
                                </i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="icon icon-twitter">
                                </i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="icon icon-instagram">
                                </i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="icon icon-pinterest">
                                </i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="icon icon-tripadvisor">
                                </i>
                            </a>
                        </li>
                    </ul>
                    <ul class="footer-links">
                        <li>
                            <a href="#">
                                HOME
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                OUR STORIES
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                THE WEDDING
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                GALLERY
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                CONTACT
                            </a>
                        </li>
                    </ul>
                    <p class="copyright">
                        <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0.
                    Copyright ©
                    <script>
                        document.write(new Date().getFullYear());
                    </script>-->
                        All rights reserved | This template is made with
                        <i aria-hidden="true" class="icon-heart">
                        </i>
                        by
                        <a href="https://colorlib.com" target="_blank">
                            Colorlib
                        </a>
                        <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
                    </p>
                </div>
                <!-- container -->
            </footer>
        </div>
    </div>
</template>
<script>
import mainSlider from './main-slider.vue'
import storyLine from './story-line.vue'
import ceremony from './ceremony.vue'
import reception from './reception.vue'
import gifts from './gifts.vue'
import countdown from './countdown.vue'
import rsvp from './rsvp.vue'
import contact from './contact.vue'
var path = false

export default {
  components: {
    mainSlider, storyLine, ceremony, reception, gifts, countdown, rsvp, contact
  },
  mounted () {
    console.log(this.$route.path)
    if (this.$route.path !== '/') {
      this.path = true
    }
    console.log(this.path)
  },
  name: 'home',
  props: ['test'],
  data () {
    return {
      path: path
    }
  }
}
</script>