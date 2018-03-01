<template>
    <main id="home">
        <section class="video">
            <video autoplay muted loop id="home-video">
                <source src="/static/dcs_world.mp4">
            </video>
            <div class="video__overlay-container">
                <div class="video__overlay">
                    <div class="video__overlay-intro">
                        <h1>Distributed Dynamic Campaign</h1>
                        <p><span class="fugaz">KI</span> is a fully customizable multiplayer campaign engine that gives players a persistent DCS experience between a network of community-run servers.</p>
                        <p>Whether you're looking to fly, be a part of the <span class="fugaz">KI</span> network of servers, or build your own <span class="fugaz">KI</span> missions be sure to start at our documentation.</p>
                        <div class="video__overlay-title">
                            <h1 class="fugaz">Kaukasus Insurgency</h1>
                        </div>
                        <div class="video__overlay-links">
                            <router-link to="docs" class="button button--docs">Learn More</router-link>
                            <router-link to="servers" class="button button--servers">Find Servers</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="overview">
            <div class="container overview__container">
                <div class="overview__updates">
                    <h1>Current Version</h1>
                </div>
                <div class="overview__stats">
                    <h1>Stats</h1>
                    <h3>Top ACE</h3>
                    <h3>Top CAS</h3>
                    <i class="fa fa-bars"></i>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
  export default {
    name: 'Home',
    data () {
      return {

      }
    },
    mounted() {
      document.getElementById('home-video').addEventListener('loadedmetadata', function() {
        this.currentTime = 70;
      }, false);
    }
  }
</script>

<style lang="sass" scoped>

    .video
        position: relative
        max-height: 70vh
        overflow: hidden

        &__overlay-container
            position: absolute
            top: 0
            left: 0
            width: 100%
            height: 100%
            display: flex
            align-items: center
            justify-content: center

        &__overlay
            max-width: 1200px
            flex-grow: 1
            display: flex
            z-index: 98

            @media screen and (max-width: 1025px)
                justify-content: center


        &__overlay-intro
            padding: 0 2em
            width: 40%

            > h1
                display: inline-block
                font-style: italic
                padding: .5em .75em
                margin-bottom: 0
                background: rgba(0,0,0,.85)

            > p
                text-shadow: 1px 1px 6px rgba(0,0,0,.8)

            @media screen and (max-width: 1200px)
                margin: 0 2em

            @media screen and (max-width: 1025px)
                text-align: center
                width: auto
                margin-top: 2em

                > h1, > p
                    display: none

            @media screen and (max-width: 800px)
                font-size: .7em

        &__overlay-links
            flex-grow: 1
            align-items: center

        &__overlay-title
            font-size: 1.8em
            display: none

            @media screen and (max-width: 1025px)
                display: block

    #home-video
        z-index: -1
        object-fit: cover
        max-height: 70vh
        width: 100vw
        max-width: 100%
        filter: brightness(.65) contrast(1.2)

    .overview
        padding: 2em 0
        background: white - 10
        color: black + 20
        height: 30vh

    .button
        font-size: 1em
        display: inline-block
        font-weight: bold
        width: 25%
        padding: 1em 3em
        border-radius: 5px
        text-align: center
        margin: 1em 0
        opacity: .85
        transition: opacity .5s
        text-decoration: none

        &--docs
            margin-right: 2em
            color: white
            background: #5fa747

        &--servers
            color: white
            background: #c33a3a

        &:hover
            opacity: 1

        @media screen and (max-width: 1140px)
            width: auto
            margin: 0 .5em

    .overview__container
        display: flex
        /*flex-direction: column*/

    .overview__updates
        width: 70%
        margin-right: 2em

    .overview__stats
        flex-grow: 1


</style>