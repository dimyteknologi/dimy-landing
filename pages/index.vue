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
section {
  padding: 60px 0;
  overflow: hidden;
}

.section-bg {
  background-color: #f3f5fa;
}

.section-title {
  text-align: center;
  padding-bottom: 30px;
}

.section-title h2 {
  font-size: 32px;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 20px;
  padding-bottom: 20px;
  position: relative;
  color: #37517e;
}

.section-title h2::before {
  content: '';
  position: absolute;
  display: block;
  width: 120px;
  height: 1px;
  background: #ddd;
  bottom: 1px;
  left: calc(50% - 60px);
}

.section-title h2::after {
  content: '';
  position: absolute;
  display: block;
  width: 40px;
  height: 3px;
  background: #47b2e4;
  bottom: 0;
  left: calc(50% - 20px);
}

.section-title p {
  margin-bottom: 0;
}

.btn-get-started {
  font-family: "Montserrat", sans-serif;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 16px;
  letter-spacing: 1px;
  display: inline-block;
  padding: 14px 30px;
  border-radius: 3px;
  transition: 0.5s;
  margin: 10px;
  color: #fff;
  background: #25a9e0;
  text-decoration: none;
}

.btn-get-started:hover {
  background: #37b34a;
  color: #fff;
}

section {
  overflow: hidden;
}

/* Sections Header
--------------------------------*/
.section-header h3 {
  font-size: 32px;
  color: #25a9e0;
  text-transform: uppercase;
  text-align: center;
  font-weight: 700;
  position: relative;
  padding-bottom: 15px;
}

.section-header h3::before {
  content: '';
  position: absolute;
  display: block;
  width: 120px;
  height: 1px;
  background: #ddd;
  bottom: 1px;
  left: calc(50% - 60px);
}

.section-header h3::after {
  content: '';
  position: absolute;
  display: block;
  width: 40px;
  height: 3px;
  background: #37b34a;
  bottom: 0;
  left: calc(50% - 20px);
}

.section-header p {
  text-align: center;
  padding-bottom: 30px;
  color: #333;
}

/* Section with background
--------------------------------*/
.section-bg {
  background: #f7f7f7;
}

</style>
