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
        content-class="mt-5"
        nav-wrapper-class="all-the-tabs"
        active-nav-item-class="tab-active"
        nav-class="tabs-style"
        fill
        no-nav-style
      >
        <b-tab active>
          <template #title>
            <div class="tab-title">
              <fa :icon="['fab', 'jenkins']"  class="fa-4x tab-icon" />
              <p style="margin-top: 10px; margin-bottom:0px; font-size:20px;">QOLIGO</p>
              <p style="font-size:16px;">Description</p>
            </div>
          </template>
          <div class="tab-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, facilis eligendi! Sunt ullam similique officiis totam saepe commodi eius eaque dolores voluptate reiciendis voluptatum quas non praesentium aperiam architecto nam vero harum possimus libero maxime, impedit modi est aut obcaecati? Doloremque veniam voluptas, obcaecati quis ratione quae corrupti dolorum iste dolorem nobis quidem impedit inventore iusto. Maiores ratione quidem deleniti porro cum distinctio molestias magni, assumenda voluptatibus ducimus ullam commodi omnis impedit veritatis vel ipsa saepe molestiae fugit! Commodi natus expedita iure id autem! Soluta voluptatum corporis natus, placeat alias, illo, quis dolorum dolorem est pariatur sit ex non numquam minus? Similique earum iure porro quibusdam ea eveniet modi quasi iste nam obcaecati dolores rem dolore, nostrum quo provident sint vero et, omnis praesentium? Doloribus expedita non accusamus dolores quo ratione laborum tempore, voluptate ad nemo voluptatibus culpa illo repudiandae? Pariatur voluptatum recusandae fuga dignissimos sed corporis quam hic ut, repellat laudantium. Autem nostrum aspernatur veniam officiis, esse sapiente nisi ipsam? Laborum quisquam delectus ratione itaque vero non porro magnam voluptas dolorum deleniti! Ab veritatis eum sapiente possimus doloremque delectus consequatur ratione, quod quaerat suscipit! Nam est, explicabo nesciunt quam voluptatum architecto deserunt repellendus necessitatibus possimus, velit, soluta laudantium beatae nobis! Mollitia magnam voluptatum exercitationem! Fugiat soluta obcaecati, incidunt, quibusdam voluptatum minima quisquam quam saepe rerum, odio nemo odit eveniet cumque cum pariatur ratione earum. Soluta ipsa beatae consequatur voluptate aperiam est. Labore eveniet esse recusandae velit, ullam deserunt expedita repellat dignissimos repudiandae mollitia sit laudantium perspiciatis excepturi doloribus, magni beatae nihil perferendis molestiae, commodi quae sunt iusto consequuntur. Cupiditate cumque autem aperiam officiis, dolore odio, non iste assumenda illum dolores quisquam, delectus ab a tenetur neque dolorem quos earum. Adipisci voluptatum dignissimos blanditiis nesciunt sed veniam magnam nulla alias exercitationem ex dolorum reprehenderit libero sint reiciendis, itaque odio repudiandae ratione nobis similique facilis ducimus quas incidunt. Autem, nulla ad? Assumenda aspernatur quos, accusantium ipsam, sed unde voluptatibus asperiores modi quidem temporibus, est dolorem ratione doloremque velit labore saepe ducimus veritatis accusamus eos. Dolore quidem suscipit nesciunt veniam enim, unde ipsum numquam tempore. Culpa earum eaque laudantium reprehenderit natus. Corrupti iure pariatur laborum quod aliquid labore alias soluta reiciendis? Ipsum laudantium aperiam quia aspernatur beatae voluptates pariatur inventore earum animi, labore in exercitationem at hic dolor quaerat, temporibus iusto impedit soluta mollitia alias consequuntur quasi magni corrupti natus! In commodi ab deleniti modi, voluptatum placeat quasi tenetur dolorem ut perspiciatis vel architecto a possimus explicabo neque! Voluptatum a ex totam dolorem vel quae, iure et iste consequuntur doloremque deleniti, libero veniam dolores cumque optio corporis in. Quae maxime quod dolores explicabo, molestias, perspiciatis eius, hic blanditiis deserunt ratione accusantium alias pariatur. Repellat distinctio laudantium nostrum necessitatibus, incidunt aliquam, molestiae sed commodi, dolorum culpa impedit qui unde laboriosam cumque quibusdam at doloremque. Quo odio illum at nisi dolor, nesciunt cumque placeat dignissimos ratione. Vero error officia est itaque nostrum molestiae nihil, odio voluptatem necessitatibus inventore laudantium laborum ipsum neque nesciunt hic ab. Eius quos quae aliquid at quo iure, optio unde.
          </div>
        </b-tab>
        <b-tab>
          <template #title>
            <div class="tab-title">
              <fa :icon="['fab', 'mandalorian']"  class="fa-4x tab-icon" />
              <p style="margin-top: 10px; margin-bottom:0px; font-size:20px;">SIPPC</p>
              <p style="font-size:16px;">Description</p>
            </div>
          </template>
        </b-tab>
        <b-tab class="item-tab">
          <template #title>
            <div class="tab-title">
              <fa :icon="[ 'fab', 'phoenix-squadron' ]" class="fa-4x tab-icon" />
              <p style="margin-top: 10px; margin-bottom:0px; font-size:20px;">Phoenix </p>
              <p style="font-size:16px;">Description</p>
            </div>
          </template>
        </b-tab>
        <b-tab>
          <template #title>
            <div class="tab-title">
              <fa :icon="[ 'fab', 'wolf-pack-battalion' ]" class="fa-4x tab-icon" />
              <p style="margin-top: 10px; margin-bottom:0px; font-size:20px;">Wolf</p>
              <p style="font-size:16px;">Description</p>
            </div>
          </template>
        </b-tab>
      </b-tabs>
    </div>
  </div>
</template>

<style>

@media screen and (min-width: 1024px) {
  .all-the-tabs {
  margin: 0px 10%;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius: 10px;
}

.tabs-style {
  padding: 20px 0px;
}

.tab-active {
  background: #25a9e0;
  height: 170%;
  border-radius: 10px;
  position: absolute;
  width: 100%;
  top: -50px;
  -webkit-box-shadow: 0px 0px 24px 4px rgba(173,173,173,1);
  -moz-box-shadow: 0px 0px 24px 4px rgba(173,173,173,1);
  box-shadow: 0px 0px 24px 4px rgba(173,173,173,1);
}

.tab-active .tab-title {
  padding: 50px;
  color: white;
  text-align: center;
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
}

@media screen and (max-width: 1023px) {
  .all-the-tabs {
  margin: 0px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius: 10px;
}

.nav {
  flex-wrap: nowrap;
}

.tab-active {
  background: #25a9e0;
  border-radius: 10px;
}

.tab-title {
  font-size: 12px;
}

.tab-title > p {
  display: none;
}

.tab-active .tab-title {
  color: white;
  text-align: center;
}

.nav-fill > .nav-link, .nav-fill .nav-item {
    position: relative;
    width: 100px;
}

}
</style>