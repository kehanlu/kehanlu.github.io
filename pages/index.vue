<template>
  <section class="section">
    <div class="container is-max-desktop">
      <div class="columns">
        <div class="column is-one-fifth">
          <div class="content has-text-centered">
            <h2>Ke-Han Lu</h2>
            <!-- <p>Master's student in TaiwanTech, Taiwan</p> -->
            <div>
              <img style="border-radius: 50%" width="128px" src="/avatar.jpg" />
            </div>
          </div>
          <div class="content menu">
            <ul>
              <li>
                <span class="icon-text">
                  <span class="icon">
                    <i class="fas fa-map-marker-alt"></i>
                  </span>
                  <span>Taipei, Taiwan</span>
                </span>
              </li>
              <li>
                <span class="icon-text">
                  <a href="mailto:khlu@nlp.csie.ntust.edu.tw" target="_blank">
                    <span class="icon">
                      <i class="fas fa-envelope"></i>
                    </span>
                    <span>Email</span>
                  </a>
                </span>
              </li>
              <li>
                <span class="icon-text">
                  <a href="https://github.com/kehanlu" target="_blank">
                    <span class="icon">
                      <i class="fab fa-github-alt"></i>
                    </span>
                    <span>GitHub</span>
                  </a>
                </span>
              </li>
              <li>
                <span class="icon-text">
                  <a href="https://scholar.google.com/citations?user=YODHqGkAAAAJ" target="_blank">
                    <span class="icon">
                      <i class="fab fa-google"></i>
                    </span>
                    <span>Google scholar</span>
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div class="column">
          <div class="content">
            <b>*I am currently doing my military service in the R.O.C. Army.</b>
            <h3>About me</h3>
            <p>
              I received my M.S. degree and B.S degree in Computer Science and
              Engineering (CSIE) from the National Taiwan University of Science and Technology (TaiwanTech), Taipei, Taiwan. Since 2020, I have
              started to study end-to-end automatic speech recognition (ASR) and
              and visual question answering (VQA). My research interests are
              deep machine learning, cross-modal representation learning, and natural language
              learning.
            </p>
          </div>
          <!-- Publications -->
          <div class="content">
            <h3>Publication</h3>
            <Publications />
          </div>
          <!-- Education -->
          <div class="content">
            <h3>Education</h3>
            <ul>
              <!--  -->
              <li>
                <ul>
                  <li>
                    <b>National Taiwan University of Science and Technology, Taiwan</b>
                  </li>
                  <li>Master's degree, Computer Science and Information Engineering</li>
                  <li>2020.09 ~ 2023.02</li>
                </ul>
              </li>
              <!--  -->
              <li>
                <ul>
                  <li>
                    <b>National Taiwan University of Science and Technology, Taiwan</b>
                  </li>
                  <li>Bachelor's degree, Computer Science and Information Engineering</li>
                  <li>2016.09 ~ 2020.06</li>
                </ul>
              </li>
            </ul>
          </div>
          <div class="content">
            <h3>Honor</h3>
            <ul>
              <li>16th Outstanding Youth award (校園傑出青年)</li>
              <li>Scholarships for overseas study of outstanding students(教育部學海飛颺獎學金)</li>
              <li>Academic Excellence Award (top 5% of class in semester)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
body {
  font-family: "Nunito", sans-serif;
}
p {
  line-height: 2;
  text-align: justify;
}
a {
  color: #4a4a4a;
}
.content ul ul {
  list-style-type: none;
  margin-left: 0.5em;
}

.menu ul {
  list-style-type: none;
  margin: 0px;
}
</style>

<script>
</script>
