<template>
  <div id="app">
        <header>
            <div class="container">
                <a class="logo" href="#">
                    <img src="../src/assets/images/logo-white.png">
                </a>
                <div class="menu-nav-icon" data-nav-menu="#main-menu">
                    <i class="icon icon-bars">
                    </i>
                </div>
                <ul class="main-menu visible-on-click" id="main-menu">
                    <li>
                        <a href="index.html">
                            HOME
                        </a>
                    </li>
                    <li class="drop-down">
                        <a href="#!">
                            OUR STORIES
                            <i class="icon icon-caret-down">
                            </i>
                        </a>
                        <ul class="drop-down-menu">
                            <li>
                                <a href="#">
                                    FEATURED
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    ABOUT
                                </a>
                            </li>
                            <li class="drop-down">
                                <a href="#!">
                                    CATEGORIES
                                    <i class="icon icon-caret-right">
                                    </i>
                                </a>
                                <ul class="drop-down-menu drop-down-inner">
                                    <li>
                                        <a href="#">
                                            FEATURED
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            ABOUT
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            CATEGORIES
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="03-regular-page.html">
                            THER WEDDING
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            GELLERY
                        </a>
                    </li>
                    <li>
                        <a href="02-rsvp.html">
                            RSVP
                        </a>
                    </li>
                </ul>
                <!-- main-menu -->
            </div>
            <!-- container -->
        </header>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import 'https://fonts.googleapis.com/css?family=Playball%7CBitter';

@import '../src/assets/css/bootstrap.css';
@import '../src/assets/css/fluidbox.min.css';
@import '../src/assets/css/font-icon.css';
@import '../src/assets/css/home/styles.css';
@import '../src/assets/css/home/responsive.css';


#app {
/*  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;*/
}
</style>



