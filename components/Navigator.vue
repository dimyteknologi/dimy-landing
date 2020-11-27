<template>
<b-navbar toggleable="lg" type="light" variant="light" id="stickynavbar" class="navbar">
      <b-navbar-brand class="logo-center">
        <nuxtscroll target="#hero">
          <img src="~/assets/img/logo.png" width="60" alt="">
        </nuxtscroll>
      </b-navbar-brand>

    
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav style="margin-left:20%;">
      <nuxtscroll target="#about">
      <b-nav-item active-class="nav-active">About Us</b-nav-item>
      </nuxtscroll>
      <nuxtscroll target="#service">
      <b-nav-item>Services</b-nav-item>
      </nuxtscroll>
      <nuxtscroll target="#portfolio">
      <b-nav-item>Portfolios</b-nav-item>
      </nuxtscroll>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto" style="margin-right:20%;">
      <nuxtscroll target="#team">
      <b-nav-item>Team</b-nav-item>
      </nuxtscroll>
      <nuxtscroll target="#client">
      <b-nav-item>Clients</b-nav-item>
      </nuxtscroll>
      <nuxtscroll target="#contact">
      <b-nav-item>Contacts</b-nav-item>
      </nuxtscroll>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>    
</template>

<style>
.logo-center {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    cursor: pointer;
}

.sticky {
  position: fixed;
  top: 0;
  width: 100%;
  transition: all 0.5s;
  box-shadow: 0 4px 10px -3px rgba(191, 191, 191, 0.5);
}

.bg-light {
   background :#1a2d47 !important;
}

.navbar-light .navbar-nav .nav-link {
  color: #25a9e0 !important;
}

.navbar-light .navbar-nav .nav-link:focus {
  color: #37b34a !important;
}

</style>

<script>
import VueNextLevelScroll from 'vue-next-level-scroll'

export default {
  components: {
    nuxtscroll: VueNextLevelScroll
  },
  mounted() {
    this.$nextTick(function () {
      window.addEventListener('scroll', function () {
        var navbar = document.getElementById('stickynavbar');
        var nav_classes = navbar.classList;
        if(document.documentElement.scrollTop > 600 ) {
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