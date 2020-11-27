<template>
  <div class="container" data-aos="fade-up">
    <header class="section-header" data-aos="fade-up">
      <h3>Our Services</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </header>

    <section id="featured-services" class="featured-services">
      <div class="container" data-aos="fade-up">

        <div class="row">
          <div class="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0">
            <div class="icon-box" data-aos="fade-up" data-aos-delay="100">
              <div class="icon"><fa :icon="['fas', 'desktop']" class="fa-2x icon-color" /></div>
              <h4 class="title"><a href="">Web Development</a></h4>
              <p class="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0">
            <div class="icon-box" data-aos="fade-up" data-aos-delay="200">
              <div class="icon"><fa :icon="['fab', 'android']" class="fa-2x icon-color" /></div>
              <h4 class="title">Android Development</h4>
              <p class="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0">
            <div class="icon-box" data-aos="fade-up" data-aos-delay="300">
              <div class="icon"><fa :icon="['fab', 'apple']" class="fa-2x icon-color" /></div>
              <h4 class="title">IOS Development</h4>
              <p class="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="featured-services">
      <header class="section-header" data-aos="fade-up">
      <h3>Technology</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </header>

    <div>
    </div>
    </section>
  </div>
</template>

<style>
  .featured-services .icon-box {
  padding: 30px;
  position: relative;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 0 29px 0 rgba(68, 88, 144, 0.12);
  transition: all 0.3s ease-in-out;
  border-radius: 8px;
  z-index: 1;
}

.featured-services .icon-box::before {
  content: '';
  position: absolute;
  background: #cbe0fb;
  right: 0;
  left: 0;
  bottom: 0;
  top: 100%;
  transition: all 0.3s;
  z-index: -1;
}

.featured-services .icon-box:hover::before {
  background: #25a9e0;
  top: 0;
  border-radius: 0px;
}

.featured-services .icon {
  margin-bottom: 15px;
}

.featured-services .icon i {
  font-size: 48px;
  line-height: 1;
  color: #106eea;
  transition: all 0.3s ease-in-out;
}

.featured-services .title {
  font-weight: 700;
  margin-bottom: 15px;
  font-size: 18px;
}

.featured-services .title a {
  color: #111;
}

.featured-services .description {
  font-size: 15px;
  line-height: 28px;
  margin-bottom: 0;
}

.featured-services .icon-box:hover .title a, .featured-services .icon-box:hover .description {
  color: #fff;
}

.featured-services .icon-box:hover .icon i {
  color: #fff;
}

</style>