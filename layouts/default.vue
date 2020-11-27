<template>
  <div>
  <Hero />
  <Navigator style="z-index: 9999;"/>    
    <Nuxt />
  </div>
</template>

<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}


</style>

<script>
import Hero from '../components/Hero'
import VueNextLevelScroll from 'vue-next-level-scroll'
import Navigator from '~/components/Navigator.vue'

export default {
  components: {
    Hero,
    nuxtscroll: VueNextLevelScroll,
    Navigator
  },
  mounted() {
    this.$nextTick(function () {
      window.addEventListener('scroll', function () {
        var navbar = document.getElementById('stickynavbar');
        var nav_classes = navbar.classList;
        if(document.documentElement.scrollTop > 900 ) {
          if (nav_classes.contains('sticky') === false) {
            nav_classes.toggle('sticky');
          }
        } else {
          if (nav_classes.contains('sticky') === true) {
            nav_classes.toggle('sticky')
          }
        }
      })
    })
  }
}
</script>