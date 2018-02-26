<template>
    <div id="overview">
        <div class="main">
            <div class="main__head">
                <div class="pill pill--connect">
                    <span class="pill-title">Server Address</span>
                    <span class="pill-value">184.175.48.163:10308</span>
                    <span class="pill-copy">Copy</span>
                </div>
                <div class="pill pill--players">
                    <span class="pill-title">Online</span>
                    <span class="pill-value">10/64</span>
                </div>
                <div class="pill pill--version">
                    <span class="pill-title">Version</span>
                    <span class="pill-value">0.564</span>
                </div>
            </div>
            <h3>Description</h3>
            <div class="main__description">
                <p>Here belongs a paragraph describing the server and the community behind it. It should include information such as to where to find the rules (or the rules could be written here), how to get into comms with other players, and the locale of the server (timezone and language).</p>
                <p>This should be editable, directly, by server owners. This means that they should have a login associated with the website. The easiest way to manage this would to be have an in-page markdown or medium-style (content editable) editor to reduce the number of views and streamline the managing process.</p>
                <p><strong>Website:</strong> <a href="#">https://laggygamerz.com</a></p>
                <p><strong>TeamSpeak 3:</strong> <a href="#">ts.laggy.pk</a></p>
            </div>
            <h3>Current Campaign</h3>
            <div class="main__campaign-head">
                <div class="pill pill--players">
                    <span class="pill-title">Campaign Clock</span>
                    <span class="pill-value">02:35:00</span>
                </div>
                <div class="pill pill--version">
                    <span class="pill-title">Time Remaining</span>
                    <span class="pill-value">00:25:00</span>
                </div>
            </div>
            <img width="100%" src="https://content.invisioncic.com/r265455/monthly_2017_03/MapsDark.thumb.JPG.abd215fa73f38415563c1cf8b5d2296e.JPG">
        </div>
        <div class="side">
            <iframe class="side__discord" src="https://discordapp.com/widget?id=66258183483559936&theme=dark" width="300" height="500" allowtransparency="true" frameborder="0"></iframe>
        </div>
    </div>
</template>

<script>
    export default {
      name: 'ServerOverview'
    }
</script>

<style lang="sass" scoped>

    #overview
        padding: 2em 0
        display: flex

        @media screen and (max-width: 1275px)
            flex-direction: column

    .main
        flex-grow: 1

        &__head
            display: flex

            @media screen and (max-width: 800px)
                flex-direction: column

        &__campaign-head
            display: flex

            @media screen and (max-width: 800px)
                flex-direction: column

        > img
            margin-top: 2em

    .pill
        display: inline-flex
        font-family: 'Questrial', sans-serif
        border-radius: 5px
        border: 1px solid lightgrey
        overflow: hidden
        margin: 0 .5em

        @media screen and (max-width: 800px)
            margin: .5em 0

        &:first-of-type
            margin-left: 0

        &-title, &-value, &-copy
            padding: .5em .8em

        &-title
            color: white - 15
            background: #66a8fb

            @media screen and (max-width: 800px)
                width: 40%

        &-value
            @media screen and (max-width: 800px)
                flex-grow: 1
                text-align: center

        &-copy
            color: white - 15
            background: #464646 + 20
            transition: .5s background-color

            @media screen and (max-width: 800px)
                display: none

            &:hover
                background: #464646

    .side
        padding-left: 2em
        min-width: 300px

        @media screen and (max-width: 1275px)
            min-width: auto
            padding-left: 0
            margin-top: 2em
            text-align: center

    > img
        width: 100%

</style>