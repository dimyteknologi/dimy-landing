<template>
  <section id="hero">
    <div class="hero-container">
      <a href="index.html" class="hero-logo" data-aos="zoom-in"><img src="~assets/img/logo.png" alt=""></a>
      <h1 data-aos="zoom-in">Dimy Teknologi Indonesia</h1>
      <h2 data-aos="fade-up">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium assumenda ex quam, perferendis consequuntur eum?</h2>
      <a data-aos="fade-up" href="#about" class="btn-get-started scrollto">Get Started</a>
    </div>
  </section>
</template>

<style>
#hero {
  width: 100%;
  height: 100vh;
  background: url("~assets/img/hero-bg.png");
  position: relative;
}

#hero .hero-container {
  position: absolute;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  padding: 0 15px;
}

#hero .hero-logo {
  margin-bottom: 30px;
}

#hero h1 {
  margin: 0 0 30px 0;
  font-size: 48px;
  font-weight: 500;
  line-height: 56px;
  color: #fff;
}

#hero h2 {
  color: #aeaeae;
  margin-bottom: 30px;
  font-size: 14px;
  font-weight: 400;
  text-transform: uppercase;
}

#hero .btn-get-started {
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

#hero .btn-get-started:hover {
  background: #37b34a;
  color: #fff;
}

@media (min-width: 1024px) {
  #hero {
    background-attachment: fixed;
  }
}

@media (max-width: 768px) {
  #hero h1 {
    font-size: 28px;
    line-height: 36px;
  }
  #hero h2 {
    line-height: 22px;
  }
}

</style>