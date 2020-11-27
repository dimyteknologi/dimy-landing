<template>
  <div class="container" data-aos="fade-up">
    <header class="section-header">
      <h3>About Us</h3>
      <p>
        We as founders are experienced in various industries such as Design, IT,
        F&B and Marketing which gives us the upper hand from other business
        alike.
      </p>
    </header>

    <div class="row about-cols">
      <div class="col-md-6" data-aos="fade-up" data-aos-delay="100">
        <div class="about-col">
          <div class="img">
            <div class="icon"><fa :icon="['fas', 'quote-left']" class="fa-2x icon-color" /></div>
          </div>
          <h2 class="title">Our Mission</h2>
          <p>
            To develop user-friendly, efficient and effective IT softwares for
            the growth and support for businesses to be a more adaptable in the
            constant changes happening around the world.
          </p>
          <div class="img">
            <div class="icon2"><fa :icon="['fas', 'quote-right']" class="fa-2x icon-color" /></div>
          </div>
        </div>
      </div>

      <div class="col-md-6" style="padding-top:150px" data-aos="fade-up" data-aos-delay="300">
        <div class="about-col">
          <div class="img">
            <div class="icon"><fa :icon="['fas', 'quote-left']" class="fa-2x icon-color" /></div>
          </div>
          <h2 class="title">Our Vision</h2>
          <p>
            To be a company that’s capable of growing an ecosystem in businesses
            and communities.
          </p>
          <div class="img">
            <div class="icon2"><fa :icon="['fas', 'quote-right']" class="fa-2x icon-color" /></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
#about {
  background: url("~assets/img/abouts/about-bg.jpg") center top no-repeat fixed;
  background-size: cover;
  padding: 60px 0 40px 0;
  position: relative;
}

#about::before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.92);
  z-index: 9;
}

#about .container {
  position: relative;
  z-index: 10;
}

#about .about-col {
  background: #fff;
  border-radius: 0px 25px ;
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.08);
  margin-bottom: 20px;
}

#about .about-col .img {
  position: relative;
}

#about .about-col .img img {
  border-radius: 4px 4px 0 0;
}

#about .about-col .icon {
  width: 64px;
  height: 64px;
  padding-top: 20px;
  padding-right: 30px;
  text-align: center;
  position: absolute;
  text-align: center;
  left: 0;
  bottom: -30px;
  transition: 0.3s;
}

#about .about-col .icon2 {
  width: 64px;
  height: 64px;
  padding-top: 20px;
  padding-left: 30px;
  text-align: center;
  position: absolute;
  text-align: center;
  right: 0;
  bottom: -30px;
  transition: 0.3s;
}

#about .about-col i {
  font-size: 36px;
  line-height: 1;
  transition: 0.3s;
}

#about .about-col:hover i {
  color: #18d26e;
}

#about .about-col h2 {
  color: #000;
  text-align: center;
  font-weight: 700;
  font-size: 20px;
  padding: 0;
  margin: 40px 0 12px 0;
}

#about .about-col h2 a {
  color: #000;
}

#about .about-col h2 a:hover {
  color: #18d26e;
}

#about .about-col p {
  font-size: 14px;
  line-height: 24px;
  color: #333;
  margin-bottom: 0;
  padding: 0 20px 20px 20px;
}

.icon-color {
  color: #18d26e;
}
</style>