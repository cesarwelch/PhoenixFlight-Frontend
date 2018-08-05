<template>
    <!-- Slideshow -->
    <div class="home">
        <main-slider></main-slider>
        <!-- Story line -->
        <story-line></story-line>
        <!-- ceremony -->
        <ceremony></ceremony>
        <!-- Reception -->
        <reception></reception>
        <!-- gifts -->
        <gifts></gifts>
        <!-- RSVP -->
        <rsvp></rsvp>

        <section class="contact-area">
            <div class="contact-wrapper section float-left">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-2">
                        </div>
                        <div class="col-sm-10">
                            <div class="heading">
                                <h3 class="title">
                                    Contact Us
                                </h3>
                                <i class="icon icon-star">
                                </i>
                            </div>
                            <div class="margin-bottom">
                                <p>
                                    On the 25 September 2017
                                </p>
                                <p>
                                    Join us as we celebrate life and love.
                                </p>
                                <h4>
                                    <a class="phone" href="tel:784-412-0646">
                                        784-412-0646
                                    </a>
                                </h4>
                                <p>
                                    14 Baria street 133/2, New York City, US
                                </p>
                            </div>
                            <!-- margin-bottom -->
                        </div>
                        <!-- col-sm-10 -->
                    </div>
                    <!-- row -->
                </div>
                <!-- container -->
            </div>
            <!-- float-left -->
            <div class="map-area">
                <div id="map" style="height:100%;">
                </div>
            </div>
            <!-- map-area
            <script async="" defer="" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB-oEyU88bRR6xcbV1gI_Cahc8ugKC_JPE&callback=initMap">
            </script>
            -->
        </section>
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
</template>
<script>
import mainSlider from './main-slider.vue'
import storyLine from './story-line.vue'
import ceremony from './ceremony.vue'
import reception from './reception.vue'
import gifts from './gifts.vue'
import rsvp from './rsvp.vue'

export default {
  components: {
    mainSlider, storyLine, ceremony, reception, gifts, rsvp
  },
  name: 'home',
  data () {
    return {
    }
  }
}
</script>