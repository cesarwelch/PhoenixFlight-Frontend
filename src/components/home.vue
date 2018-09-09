<template>
    <!-- Slideshow -->
    <div class="home">
        <main-slider>
        </main-slider>
        <div class="mobile-z-fix" v-if="path">
            <!-- ceremony -->
            <ceremony id="ceremony-comp">
            </ceremony>
            <!-- Reception -->
            <reception id="reception-comp">
            </reception>
            <!-- gifts -->
            <gifts id="gifts-comp">
            </gifts>
            <!-- countdown -->
            <countdown id="countdown-comp">
            </countdown>
            <!-- RSVP -->
            <rsvp :guest='guest' :items='items' id="rsvp-comp">
            </rsvp>
            <!-- Story line -->
            <story-line id="story-comp">
            </story-line>
            <!-- contact -->
            <contact id="contact-comp">
            </contact>
            <!-- contact -->
<!--             <footer>
                <div class="container center-text">
                    <div class="logo-wrapper">
                        <a class="logo slider-bot-space">
                            <img alt="Logo Image" src="../../src/assets/images/icons/Weddinglogo.png"/>
                        </a>
                        <span class="heading-bottom">
                            <img class="suculenta-icon" src="../../src/assets/images/weddingrings3.png">
                        </span>
                    </div>
                    <div class="newsletter">
                        <h4 class="title">
                        </h4>
                        <p>
                            Join our mailing list to receive news and announcements
                        </p>
                        <div class="email-area">
                            <form>
                                <input class="email-input" placeholder="Your Email" type="text">
                                <button class="submit-btn" type="submit">
                                    <i class="icon icon-email-plane">
                                    </i>
                                </button>
                            </form>
                        </div>
                    </div>
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
                        Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0.
                    Copyright ©
                    <script>
                        document.write(new Date().getFullYear());
                        All rights reserved | This template is made with
                        <i aria-hidden="true" class="icon-heart">
                        </i>
                        by
                        <a href="https://colorlib.com" target="_blank">
                            Colorlib
                        </a>
                    </p>
                </div>
            </footer> -->
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
import axios from 'axios'

let path = false
let hashedId = ''
let guest = {}
let tempFlag = false

export default {
  components: {
    mainSlider, storyLine, ceremony, reception, gifts, countdown, rsvp, contact
  },
  mounted () {
    if (this.$route.path !== '/') {
      tempFlag = true
    }
    let path = this.$route.path
    hashedId = path.substring(7, path.length)
    axios
      .get('https://phoenixdawn.herokuapp.com/api/guest/' + hashedId)
      .then(response => {
        if (response.data.length !== 0 && tempFlag) {
          this.path = true
          this.guest = JSON.parse(JSON.stringify(response.data[0]))
          this.plusone = response.data[0].plusone
          for (var i = 0; i < this.plusone; i++) {
            this.items[i] = i
          }
          this.path = true
        }
      })
  },
  name: 'home',
  props: ['test'],
  data () {
    return {
      path: path,
      items: [],
      guest: guest
    }
  }
}
</script>