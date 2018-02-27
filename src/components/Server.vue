<template>
    <main id="server">
        <section class="server-header">
            <div class="server-header__image"></div>
            <div class="server-header__color"></div>
            <div class="server-header__info">
                <h1>Kaukasus Insurgency - Internal</h1>
                <div class="server-header__status"><span class="server-header__online-status server-header__online-status--online">Online</span> since 4 hours ago.</div>
            </div>
            <div class="server-header__nav">
                <router-link to="overview" class="server-header__nav-link server-header__nav-link--active">OVERVIEW</router-link>
                <router-link to="news" class="server-header__nav-link">NEWS</router-link>
                <router-link to="stats" class="server-header__nav-link">STATS</router-link>
                <router-link to="campaign" class="server-header__nav-link">CAMPAIGN</router-link>
            </div>
        </section>
        <section class="server-content">
            <div class="container">
                <router-view></router-view>
            </div>
        </section>
    </main>
</template>

<script>
    export default {
      name: "Server"
    }
</script>

<style lang="sass" scoped>

    #server
        color: black + 60
        background: white - 20

    .server-header
        position: relative
        height: 40vh
        display: flex
        flex-direction: column
        align-items: center
        min-height: 250px

        &__image
            position: absolute
            width: 100%
            height: 100%
            background-image: url("/static/hornet-bg.jpg")
            background-size: cover
            filter: contrast(.8) grayscale(.8) brightness(.7)

        &__color
            position: absolute
            width: 100%
            height: 100%
            opacity: .5
            background: linear-gradient(to left, #475baf 60%, #3632af)

        &__info
            padding-top: 2em
            filter: grayscale(0)
            width: 1200px
            margin: 0 2em
            flex-grow: 1
            display: flex
            flex-direction: column
            justify-content: center

            @media screen and (max-width: 1275px)
                width: auto
                font-size: .75em

            > h1
                color: white
                font-size: 2em
                margin-bottom: 0

        &__status
            font-size: 1.2em
            font-family: 'Questrial', sans-serif
            color: white - 20

        &__online-status
            color: lightgrey

            &--online
                color: #73e0a9

            &--offline
                color: #ff9292

        &__nav
            width: 1200px
            margin: 0 2em
            z-index: 98
            display: flex

            @media screen and (max-width: 1275px)
                font-size: .8em
                width: auto

        &__nav-link
            color: white
            text-decoration: none
            margin: 0 1em
            padding: .5em
            border-bottom: 3px solid transparent

            &:first-of-type
                margin-left: 0

            &--active
                border-color: #ff5a5a

    .server-content
        background: white - 10


</style>
