<template>
  <div id="app">
    <section class="navSection" v-if="!$route.meta.fullscreen">
      <div class="navBar" v-bind:class="{'navBar--dark': $route.meta.darkNav}">
        <a class="navBar__title" href="/">Kaukasus Insurgency</a>
        <a class="navBar__title navBar__title--mini" href="/">KI</a>
        <nav class="nav nav--main">
          <router-link to="/docs" class="nav__link">DOCS</router-link>
          <router-link to="/servers" class="nav__link">SERVERS</router-link>
          <a class="nav__link">STATS</a>
          <a href="//github.com/KaukausInsurgency/KI" target="_blank" class="nav__link">GITHUB</a>
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
    }
  },
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

    &__title
      color: white - 20
      font-family: 'Fugaz One', cursive
      font-size: 1.8em
      flex-grow: 1
      font-weight: bold
      text-decoration: none
      opacity: .9
      transition: opacity .2s

      &:hover
        opacity: 1

      &--mini
        display: none

      @media screen and (max-width: 800px)
        display: none

        &--mini
          display: block

    &--dark
      text-shadow: none

      .navBar__title
        color: black + 80

      .nav__link
        color: black + 20

        &--active
          border-color: black

        &:hover
          color: black
          border-color: black

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

      &--active
        border-color: white

      &:last-child
        margin-right: 0

      &:hover
        color: white
        border-color: white


  .footer
    color: white - 20
    height: 30vh // temp
    /*background: rgb(30,30,30)*/

</style>
