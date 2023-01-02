<template>
  <div class="container is-max-desktop">
    <b-navbar>
      <!-- <template #brand>
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img
          src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
          alt="Lightweight UI components for Vue.js based on Bulma"
        />
      </b-navbar-item>
      </template>-->
      <template #start>
        <b-navbar-item href="https://hanklu.tw">Home</b-navbar-item>
        <b-navbar-item href="https://blog.hanklu.tw">Blog</b-navbar-item>
        <b-navbar-item href="https://notes.hanklu.tw">Notes</b-navbar-item>
        <b-navbar-item href="https://slides.hanklu.tw">Slides</b-navbar-item>
      </template>

      <!-- <template #end>
      <b-navbar-item tag="div">
        <div class="buttons">
          <a class="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a class="button is-light">Log in</a>
        </div>
      </b-navbar-item>
      </template>-->
    </b-navbar>
  </div>
</template>