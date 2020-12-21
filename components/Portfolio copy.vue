<template>
  <div class="container portfolio">
    <header class="section-header" data-aos="fade-up">
      <h3>Our Works</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </header>
    <div>
      <b-tabs
        content-class="mt-3"
        nav-wrapper-class="all-the-tabs"
        active-nav-item-class="tab-active"
        nav-class="tabs-style"
        fill
        no-nav-style
        fade
      >
        <b-tab class="porto-item" active>
          <template #title>
            <div class="tab-title">
              <fa :icon="['fab', 'jenkins']"  class="fa-3x"/>
              <p style="margin-top: 10px; margin-bottom:0px; font-size:20px;">QOLIGO</p>
              <p>Description</p>
            </div>
          </template>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi alias impedit asperiores tempore animi sed, architecto rem ducimus sequi voluptatibus porro placeat illo eum omnis amet eveniet unde, aperiam modi ratione perspiciatis repellat cum ullam nam soluta! Tempora architecto sapiente delectus minima accusamus repellendus harum enim vitae quasi inventore, quod numquam maiores labore eos porro laborum. Dolorem natus, illum qui dignissimos rerum ad similique quidem corrupti cumque nemo vero praesentium tenetur dolorum reprehenderit quae nulla inventore unde fugiat asperiores accusantium nam quaerat earum at. Quasi nam non iure ab aperiam, veniam dicta nisi velit omnis totam voluptas praesentium quis aliquam eaque mollitia. Quasi facilis suscipit numquam quidem quod aut officia ea voluptatibus, explicabo autem accusamus eius ipsum odit sint dolorem libero quaerat nihil nulla debitis inventore quos. Ad delectus consequatur debitis sint voluptatem odio, vitae inventore obcaecati sit dolores molestias eligendi blanditiis consectetur cupiditate non. Eos ducimus veritatis accusantium temporibus.
        </b-tab>
        <b-tab>
          <template #title>
            <div class="tab-title">
              <fa :icon="['fab', 'mandalorian']"  class="fa-3x"/>
              <p style="margin-top: 10px; margin-bottom:0px; font-size:20px;">SIPPC</p>
              <p>Description</p>
            </div>
          </template>
        </b-tab>
        <b-tab class="item-tab">
          <template #title>
            <div class="tab-title">
              <fa :icon="[ 'fab', 'phoenix-squadron' ]" class="fa-3x" />
              <p style="margin-top: 10px; margin-bottom:0px; font-size:20px;">Phoenix </p>
              <p>Description</p>
            </div>
          </template>
        </b-tab>
        <b-tab>
          <template #title>
            <div class="tab-title">
              <fa :icon="[ 'fab', 'wolf-pack-battalion' ]" class="fa-3x" />
              <p style="margin-top: 10px; margin-bottom:0px; font-size:20px;">Wolf Pack</p>
              <p>Description</p>
            </div>
          </template>
        </b-tab>
      </b-tabs>
    </div>
  </div>
</template>

<style>
.all-the-tabs {
  margin: 0px 10%;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius: 10px;
  transition-delay: 2s;
}

.tabs-style {
  padding: 20px 0px;
}

.active {
  position: absolute;
  width: 100%;
  top: -50px;
  -webkit-box-shadow: 0px 0px 24px 4px rgba(173,173,173,1);
  -moz-box-shadow: 0px 0px 24px 4px rgba(173,173,173,1);
  box-shadow: 0px 0px 24px 4px rgba(173,173,173,1);
}

.tab-active {
  background: #25a9e0;
  height: 170%;
  border-radius: 10px;
}

.tab-active .tab-title {
  padding: 50px;
  color: white;
}

.nav-fill > .nav-link, .nav-fill .nav-item {
    position: relative;
    width: 100px;
}

.nav-fill > .nav-link, .nav-fill .nav-item:not(:last-child)::after {
    content:"";
    position:absolute;
    top:20%;
    right:0;
    width:1px;
    height:50%;
    background:#25a9e0;
}
</style>