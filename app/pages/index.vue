<template>
    <div class="home">
    <div class="bio">
      <!-- <span class="maps">Makassar, Sulawesi Selatan</span> -->
      <span class="me">
        I am
        <span class="anim"
          ><{{ currentText }} {{ spinnerText }}> <span class="cursor"></span></span
        >
      </span>
      <span class="me">
        My passion for software lies with dreaming up ideas and making them come true with elegant
        interfaces. I take great care in experience, architecture, and code quality of the things I
        build.
      </span>

      <span class="me">
        I am also an open-source enthusiast and maintainer. I love how collaboration and knowledge
        sharing happens through open-source and I am happy to see what I do could eventually
        feedback to the community and industry.
      </span>

      <!-- You can see list of my projects
        <RouterLink to="/project">Here</RouterLink>. -->

      <span class="me">
        Outside of programming, I enjoy reading books. I love the pleasure and excitement of gaining
        new knowledge other than programming from the books I read. If you like my works, consider
        sponsoring me on GitHub Sponsor to keep them sustainable.
      </span>

      <span class="more">
        <button>
          <Icon name="bx:bxs-paper-plane"/>
          <RouterLink to="/about">More about me</RouterLink>
        </button>
      </span>
    </div>

    <div class="post">
      <h2>Recent Post</h2>
      <label> I'm are the creators, maintainers, and contributors </label>

      <div class="listpost">
        <div class="card">
            <div class="thumb">
                <img src="https://upload.wikimedia.org/wikipedia/commons/f/fb/Cnn_logo_red_background.png">
            </div>
            <div class="content">
                <h3>Keamanan Cyber: Apa yang Harus Anda Ketahui</h3>
                <p>Serangan siber semakin meningkat, dan penting bagi Anda untuk mengetahui langkah-langkah pencegahan yang dapat melindungi data pribadi dan organisasi Anda. Simak tipsnya di sini!</p>
            </div>
        </div>
        <div class="card">
            <div class="thumb">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Logo_Kompasdotcom.png/1200px-Logo_Kompasdotcom.png">
            </div>
            <div class="content">
                <h3>5 Cara Menghindari Serangan Phishing yang Efektif</h3>
                <p>Phishing adalah salah satu metode serangan siber yang paling umum. Pelajari cara mengenali dan menghindari teknik ini untuk melindungi akun Anda dari pencurian data.</p>
            </div>
        </div>
        <div class="card">
            <div class="thumb">
                <img src="https://thumbor.prod.vidiocdn.com/-jn__teEtuPinA6lbS6Uep5AkeY=/filters:quality(70)/vidio-web-prod-channel/uploads/channel/image/274691/liputan-6-fa45c7.jpg">
            </div>
            <div class="content">
                <h3>Perlindungan Data: Mengapa Ini Sangat Penting</h3>
                <p>Perlindungan data pribadi adalah hal yang perlu diperhatikan oleh setiap individu dan perusahaan. Pelajari mengapa langkah ini sangat penting di dunia digital saat ini.</p>
            </div>
        </div>
        <div class="card">
            <div class="thumb">
                <img src="https://pbs.twimg.com/profile_images/1657283286463582209/-8HSjERq_400x400.jpg">
            </div>
            <div class="content">
                <h3>Firewall dan Keamanan Server: Mengapa Anda Membutuhkannya</h3>
                <p>Firewall adalah salah satu komponen penting dalam sistem keamanan jaringan. Ketahui peranannya dalam mencegah akses tidak sah ke server Anda.</p>
            </div>
        </div>
        <div class="card">
            <div class="thumb">
                <img src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png">
            </div>
            <div class="content">
                <h3>Strategi Jitu Menjaga Keamanan Server Anda</h3>
                <p>Dalam dunia yang semakin terhubung, server Anda dapat menjadi sasaran serangan. Pelajari bagaimana melindunginya dengan strategi dan alat yang tepat.</p>
            </div>
        </div>
        <div class="card">
            <div class="thumb">
                <img src="https://pbs.twimg.com/profile_images/863675779451731968/9bTRJHB3_400x400.jpg">
            </div>
            <div class="content">
                <h3>Vulnerability Scan: Mengidentifikasi Risiko Keamanan pada Server</h3>
                <p>Melakukan pemindaian kerentanannya adalah langkah penting untuk menemukan potensi celah dalam sistem Anda. Pelajari cara melakukannya untuk melindungi server Anda.</p>
            </div>
        </div>
        <div class="card">
            <div class="thumb">
                <img src="https://i.pinimg.com/736x/0a/03/81/0a0381180e4e9ba04b88fc345a8fe326.jpg">
            </div>
            <div class="content">
                <h3>Tips Mengelola Kata Sandi dengan Aman</h3>
                <p>Kata sandi yang kuat dan aman adalah kunci untuk melindungi akun Anda dari akses yang tidak sah. Temukan cara untuk mengelola kata sandi dengan lebih baik.</p>
            </div>
        </div>
        <div class="card">
            <div class="thumb">
                <img src="https://upload.wikimedia.org/wikipedia/id/thumb/1/16/CNBC_Indonesia_logo.svg/1200px-CNBC_Indonesia_logo.svg.png">
            </div>
            <div class="content">
                <h3>Pencegahan Malware: Langkah Praktis untuk Keamanan Online</h3>
                <p>Malware dapat merusak sistem dan mencuri informasi pribadi. Ketahui bagaimana cara melindungi diri Anda dari ancaman ini dengan langkah-langkah pencegahan yang efektif.</p>
            </div>
        </div>
</div>


      <!-- <div class="postgrid">
        <div class="cards">
          <div class="imgBox">
            <img
              src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/breaking-news-broadcast-youtube-thumbnail-design-template-d06ddc9f11789b47d62564e6e22a7730_screen.jpg?ts=1652194145"
            />
          </div>
          <div class="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, cumque laboriosam similique quae odit consectetur, officiis quaerat id sapiente nemo nihil cupiditate ipsum expedita ex molestias minima, sit sequi autem!
            <br/><a href="#">Readmore ></a>
          </div>
        </div>
        <div class="cards">
          <div class="imgBox">
            <img
              src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/breaking-news-broadcast-youtube-thumbnail-design-template-d06ddc9f11789b47d62564e6e22a7730_screen.jpg?ts=1652194145"
            />
          </div>
          <div class="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, cumque laboriosam similique quae odit consectetur, officiis quaerat id sapiente nemo nihil cupiditate ipsum expedita ex molestias minima, sit sequi autem!
            <br/><a href="#">Readmore ></a>
          </div>
        </div>
        <div class="cards">
          <div class="imgBox">
            <img
              src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/breaking-news-broadcast-youtube-thumbnail-design-template-d06ddc9f11789b47d62564e6e22a7730_screen.jpg?ts=1652194145"
            />
          </div>
          <div class="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, cumque laboriosam similique quae odit consectetur, officiis quaerat id sapiente nemo nihil cupiditate ipsum expedita ex molestias minima, sit sequi autem!
            <br/><a href="#">Readmore ></a>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'iHwal - My Personal Blog',
})
const texts = ['Web Dev', 'Designer', 'Creator', 'Thinker', 'Gamer']
const currentText = ref('')
const currentIndex = ref(0)
const typingInterval = 150
const textChangeInterval = 1500
const deletionInterval = 100
const dotChangeInterval = 150

const spinnerText = ref('|')
const spinnerSymbols = ['\\', '|', '/', '—']
let spinnerInterval;
const cycleSpinner = () => {
  let currentIndex = 0
  spinnerInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % spinnerSymbols.length
    spinnerText.value = spinnerSymbols[currentIndex]
  }, 500)
}

const typeText = () => {
  let text = texts[currentIndex.value]
  let i = 0
  currentText.value = ''

  const typingIntervalId = setInterval(() => {
    currentText.value += text.charAt(i)
    i++
    if (i === text.length) {
      clearInterval(typingIntervalId)
      setTimeout(() => {
        convertToDots(text)
      }, textChangeInterval)
    }
  }, typingInterval)
}

const convertToDots = (text) => {
  let i = text.length - 1
  const totalLength = text.length
  const dotIntervalId = setInterval(() => {
    currentText.value = currentText.value.slice(0, i) + '.' + currentText.value.slice(i + 1)
    i--
    if (i < 0) {
      clearInterval(dotIntervalId)
      setTimeout(() => {
        deleteText()
      }, textChangeInterval)
    }
  }, dotChangeInterval)
}

const deleteText = () => {
  let textLength = currentText.value.length
  const deletionIntervalId = setInterval(() => {
    currentText.value = currentText.value.slice(0, textLength - 1)
    textLength--
    if (textLength === 0) {
      clearInterval(deletionIntervalId)
      setTimeout(() => {
        changeText()
      }, 500)
    }
  }, deletionInterval)
}

const changeText = () => {
  currentIndex.value = (currentIndex.value + 1) % texts.length
  typeText()
}

onMounted(() => {
  typeText()
  cycleSpinner()
})
</script>

<style scoped>
#app .home {
  position: relative;
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
    background-size: 14px 14px;
    background-image: linear-gradient(to right, rgb(246, 246, 246) 1px, transparent 1px), linear-gradient(rgb(246, 246, 246) 1px, transparent 1px);
}

.home .bio {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px 20px;
  border-bottom: 1px solid #dedede;
}

.bio .more {
  width: 100%;
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
  margin-top: 5px;
}

button a {
  color: #fff;
  text-decoration: none;
}

.bio .me {
  position: relative;
  text-align: justify;
  margin: 5px 0;
  line-height: 30px;
  font-size: 14px;
}

.me .anim {
  font-family: 'ibm';
  text-decoration: none;
  background: linear-gradient(to top, #f3f3f3, #f6f6f6);
}

.me a {
  color: #476582;
  text-decoration: none;
}

.home .post {
  position: relative;
  padding: 20px 20px;
  font-family: 'ibm' !important;
  background: #fff;
  flex: 1;
}

.post h2 {
  font-size: 17px;
  font-weight: 600;
  font-family: 'ibm' !important;
  text-wrap: pretty;
}

.post label {
  line-height: 15px;
  font-size: 13px;
}



/* New  */


.post .listpost
{
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 20px;
  flex-direction: column;
  gap: 10px;
}

.listpost .card
{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: pointer;
}

.card .content
{
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
  gap: 2px;
  width: 100%;
}

.content h3
{
  font-size: 14px;
  font-weight: bold;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.content p
{
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 11px;
  overflow: hidden;
}

.card .thumb
{
  position: relative;
  max-width: 40px;
  border-radius: 5px;
  overflow: hidden;
}

.thumb img
{
  max-width: 100%;
  border-radius: 5px;
}



.post .postgrid {
  margin-top: 20px;
  position: relative;
  width: 100%;
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 10px;
}

.postgrid .cards {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid #dedede;
  border-radius: 8px;
}

.cards .imgBox {
  flex: 1;
  margin-bottom: -4px;
}

.imgBox img {
  max-width: 100%;
}

.cards .desc {
  overflow: hidden;
  text-overflow: ellipsis;
  text-wrap: nowrap;
  width: 100%;
  padding: 5px;
  border-top: 1px solid #dedede;
  font-family: 'ibm' !important;
  font-size: 14px;
  text-align: center;
}
.desc a {
  text-decoration: none;
}

@media (max-width: 800px) {
  .post .postgrid {
    grid-template-columns: auto auto;
  }
}
@media (max-width: 560px) {
  .post .postgrid {
    grid-template-columns: auto auto;
  }
}
@media (max-width: 425px) {
  .post .postgrid {
    grid-template-columns: auto;
  }
}
</style>
