<template>
  <div id="app">
    <section class="mobile-nav" v-if="showMenu">
      <nav class="mobile-nav__nav">
        <router-link @click.native="showMenu = false" to="/" class="mobile-nav__link">HOME</router-link>
        <router-link @click.native="showMenu = false" to="/docs" class="mobile-nav__link">DOCS</router-link>
        <router-link @click.native="showMenu = false" to="/servers" class="mobile-nav__link">SERVERS</router-link>
        <a @click.native="showMenu = false" class="mobile-nav__link">STATS</a>
        <a @click.native="showMenu = false" class="mobile-nav__link" href="//github.com/KaukausInsurgency" target="_blank">GITHUB</a>
      </nav>
    </section>
    <section class="navSection" v-if="!$route.meta.fullscreen">
      <div class="navBar" v-bind:class="{'navBar--dark': $route.meta.darkNav && !showMenu}">
        <div class="navBar__title-container">
          <a class="navBar__title" href="/">Kaukasus Insurgency</a>
          <a class="navBar__title navBar__title--mini" href="/">KI</a>
        </div>
        <nav class="nav nav--main">
          <router-link to="/docs" class="nav__link">DOCS</router-link>
          <router-link to="/servers" class="nav__link">SERVERS</router-link>
          <a class="nav__link">STATS</a>
          <a href="//github.com/KaukausInsurgency" target="_blank" class="nav__link">GITHUB</a>
          <div v-on:click="toggleMenu" class="nav__mobile-button">
            <i class="fa fa-bars"></i>
          </div>
        </nav>
      </div>
    </section>
    <router-view/>
    <section class="footer" v-if="!$route.meta.fullscreen">
      <div class="container">
        Footer
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      showMenu: false
    }
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu
    }
  }
}
</script>

<style lang="sass">

  @import url('https://fonts.googleapis.com/css?family=Fugaz+One|Raleway|Questrial')

  html, body
    margin: 0
    padding: 0
    min-height: 100vh
    max-width: 100vw
    overflow-x: hidden

  body
    background: rgb(30,30,30)

  .fugaz
    font-family: 'Fugaz One', cursive

  #app
    font-family: 'Raleway', sans-serif
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    color: white - 20
    position: relative

    .container
      max-width: 1200px
      margin: auto

      @media screen and (max-width: 1200px)
        margin: auto 2em

  .navSection
    position: absolute
    z-index: 99
    top: 0
    left: 0
    width: 100%
    text-shadow: 1px 1px 6px rgba(0,0,0,.8)
    display: flex
    align-content: center
    justify-content: center

  .navBar
    max-width: 1200px
    margin: 0 2em
    box-sizing: border-box
    padding: 2em 0 1em
    display: flex
    flex-grow: 1

    &__title-container
      flex-grow: 1

    &__title
      color: white - 20
      font-family: 'Fugaz One', cursive
      font-size: 1.8em
      font-weight: bold
      text-decoration: none
      opacity: .9
      transition: opacity .2s

      &:hover
        opacity: 1

      &--mini
        display: none
        -webkit-tap-highlight-color:  rgba(255, 255, 255, 0)

      @media screen and (max-width: 950px)
        display: none

        &--mini
          display: inline

    &--dark
      text-shadow: none

      .navBar__title
        color: black + 80

      .nav__link, .nav__mobile-button
        color: black + 80

        &--active
          border-color: black + 80

        &:hover
          color: black + 20
          border-color: black + 20

  .nav

    &--main
      display: flex
      align-items: center

    &__link
      margin: 0 1em
      padding: .3em 0
      line-height: 100%
      transition: color .2s, border-bottom-color, .2s
      border-bottom: 1px solid transparent
      text-decoration: none
      color: white - 20

      @media screen and (max-width: 950px)
        display: none

      &--active
        border-color: white

      &:last-child
        margin-right: 0

      &:hover
        color: white
        border-color: white

    &__mobile-button
      font-size: 1.9em
      display: none
      cursor: pointer
      -webkit-tap-highlight-color:  rgba(255, 255, 255, 0)

      @media screen and (max-width: 950px)
        display: block

  .mobile-nav
    z-index: 99
    background: rgb(30,30,30)
    position: absolute
    height: 100%
    width: 100%
    top: 0
    left: 0

    &__nav
      margin-top: 4em
      font-size: 1.5em
      text-align: center

    &__link
      color: white
      text-decoration: none
      display: block
      padding: .5em 0

  .footer
    color: white - 20
    height: 30vh // temp
    /*background: rgb(30,30,30)*/

</style>
