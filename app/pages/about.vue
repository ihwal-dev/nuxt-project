<template>
  <div class="about">
    <div class="profile">
      <img src="/me.jpg" />
    </div>
    <div class="aku">
      <p>Hai Saya <strong>iHwal</strong></p>
      <p>
        Adalah seorang Fullstack Web Developer dengan pengalaman lebih dari 4 tahun dalam
        mengembangkan aplikasi web dinamis dan responsif. Memiliki keahlian mendalam dalam PHP dan
        JavaScript, Ichwan berfokus pada pembuatan solusi web yang handal dan efisien, baik di sisi
        frontend maupun backend.
      </p>
      <p>
        Dengan pemahaman penuh terhadap siklus hidup aplikasi web, <strong>iHwal</strong> selalu berusaha untuk
        mengoptimalkan kinerja aplikasi, serta memastikan keamanan dan pengelolaan basis data yang
        efisien menggunakan MySQL, PostgreSQL, atau MongoDB. Selain itu, Ichwan terbiasa bekerja
        dengan tools dan platform seperti Git, Docker, dan API untuk meningkatkan kolaborasi tim dan
        mempermudah pengembangan proyek.
      </p>
      <p>
        <strong>iHwal</strong> selalu bersemangat untuk terus mengembangkan keterampilan teknisnya dan menghadirkan
        solusi web inovatif yang dapat memberikan nilai lebih bagi pengguna dan bisnis.
      </p>

      <span class="more">
        <button>
          <Icon name="bx:bxs-paper-plane"/>
          <a href="mailto:itsmeichwan@gmail.com">Hire me</a>
        </button>
        <button>
          <Icon name="material-symbols:sim-card-download"/>
          <a href="#">Download CV</a>
        </button>
        <button>
          <Icon name="line-md:downloading-loop" />
          <a href="#">Download Source</a>
        </button>
      </span>
    </div>

    <div class="edu">
      <h2><Icon name="ic:sharp-school" /> Education Background</h2>
      <ul>
          <li>
              <span class="up">2007</span>
              <span class="down">SDN 298 DUAMPANUA</span>
          </li>
          <li>
              <span class="up">2010</span>
              <span class="down">SDN 1 SUMBER MAKMUR</span>
          </li>
          <li>
              <span class="up">2012</span>
              <span class="down">SDS SARANA TUNAS HARAPAN</span>
          </li>
          <li>
              <span class="up">2014</span>
              <span class="down">SMPN 3 PARENGGEAN</span>
          </li>
          <li>
              <span class="up">2015</span>
              <span class="down">SMPN 1 LANRISANG</span>
          </li>
          <li>
              <span class="up">2017</span>
              <span class="down">SMAN 10 PINRANG</span>
          </li>
          <li>
              <span class="up">2020</span>
              <span class="down">IAIN Parepare</span>
          </li>
      </ul>
    </div>
    <div class="edu">
      <h2><Icon name="ic:baseline-work" /> Work Experience</h2>
      <ul>
          <li>
              <span class="up">IT SUPPORT</span>
              <span class="down">SIBER POLDA SULSEL</span>
          </li>
          <li>
              <span class="up">SIBER CRIME ANALYZE</span>
              <span class="down">SIBER POLDA SULSEL</span>
          </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
//  definePageMeta({
//   middleware: 'auth'
//  })

useHead({
  title: 'iHwal - About Me'
})

let me = ref()
</script>

<style scoped>
#app .about {
  width: 100%;
  flex: 1;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  padding: 20px;
}

.about .edu
{
  width: 100%;
  margin-top: 20px;
  font-size: 13px;
}

.edu ul
{
  margin-top: 5px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  margin-left: 15px;
}

.edu ul li
{
  position: relative;
  list-style: none;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding: 10px 0;
  padding-left: 10px;
  gap: 3px;

}

.edu ul li::before
{
  content: '';
  position: absolute;
  top: 25px;
  left: -8px;
  width: 8px;
  height: 8px;
  background-color: #42b883;
  border-radius: 50%;
}

.edu ul li::after
{
  content: '';
  position: absolute;
  top: 25px;
  left: -5px;
  width: 3px;
  height: 100%;
  background: linear-gradient(to top, #42b883, transparent);
}

.edu ul :last-child::after
{
  display: none;
}

.about h2 {
  font-size: 15px;
  font-weight: 600;
  font-family: 'ibm' !important;
  text-wrap: pretty;
  display: flex;
  align-items: center;
  gap: 8px;
}

.about label {
  line-height: 15px;
  font-size: 15px;
}

.about .profile {
  max-width: 150px;
  margin-top: 10px;
  border-radius: 8px;
  overflow: hidden;
}

.profile img {
  max-width: 100%;
  border-radius: 8px;
  border-bottom: 2px solid #42b883;
}

.about .aku {
  position: relative;
  width: 100%;
}

.aku p {
  text-align: justify;
  font-size: 14px;
  line-height: 30px;
  margin: 7px 0;
}

p strong {
  text-decoration: underline;
  text-decoration-color: #42b883;
  cursor: pointer;
  text-decoration-thickness: 2px;
}

.aku .more {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 10px;
}
.more .bi {
  margin-right: 5px;
}
.more button {
  padding: 5px 8px;
  background: #42b883;
  color: #fff;
  border: none;
  outline: none;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3px;
}

button a {
  color: #fff;
  text-decoration: none;
}
</style>
