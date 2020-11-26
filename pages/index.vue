<template>
  <div>
  <section id="about">
      <About />
    </section>
    <section id="service">
      <Services />
    </section>
    <section id="portfolio">
      <Portfolio />
    </section>
    <section id="team">
      <Team />
    </section>
    <section id="client">
      <Client />
    </section>
    <section id="contact">
      <Contact />
    </section>
  </div>
</template>

<script>
import About from '../components/About'
import Portfolio from '../components/Portfolio'
import Team from '../components/Team'
import Client from '../components/Client'
import Contact from '../components/Contact'
import Services from '../components/Services'


export default {
  components: {
    About,
    Portfolio,
    Services,
    Team,
    Client,
    Contact
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 500vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
