<template>
    <main id="servers">
        <section class="server-list">
            <div class="container">
                <div class="servers">
                    <table class="server-table">
                        <tr>
                            <th class="server__name">Name</th>
                            <th class="server__status">Status</th>
                            <th>Players</th>
                            <th class="server__time-left">Time Left</th>
                            <th class="server__uptime">Uptime</th>
                        </tr>
                        <tr class="server server--offline">
                            <td class="server__name"><a href="servers/server">Kaukasus Insurgency - Internal</a></td>
                            <td class="server__status">Offline</td>
                            <td> - - - </td>
                            <td class="server__time-left"> - - - </td>
                            <td class="server__uptime"> - - - </td>
                        </tr>
                        <tr class="server">
                            <td class="server__name"><a href="servers/server">Kaukasus Insurgency - Alpha</a></td>
                            <td class="server__status">Online</td>
                            <td>10/64</td>
                            <td class="server__time-left">2 minutes</td>
                            <td class="server__uptime">3 days</td>
                        </tr>
                        <tr class="server">
                            <td class="server__name"><a href="servers/server">Kaukasus Insurgency - Alpha Outside</a></td>
                            <td class="server__status">Online</td>
                            <td>10/64</td>
                            <td class="server__time-left">2 minutes</td>
                            <td class="server__uptime">3 days</td>
                        </tr>
                        <tr class="server">
                            <td class="server__name"><a href="servers/server">LaggyGamerz Public - Kaukasus Insurgency</a></td>
                            <td class="server__status">Online</td>
                            <td>10/64</td>
                            <td class="server__time-left">2 minutes</td>
                            <td class="server__uptime">3 days</td>
                        </tr>
                    </table>
                    <div class="stats">
                        <div class="stats__item">3 Servers Online</div>
                        <div class="stats__item">30 Players Online</div>
                        <div class="stats__item">15 CAP Pilots</div>
                        <div class="stats__item">10 CAS Pilots</div>
                        <div class="stats__item">5 Transport Pilots</div>
                    </div>
                </div>
                <!--<div class="filters"><h1>Filters</h1></div>-->
            </div>
        </section>
    </main>
</template>

<script>
  export default {
    name: 'Servers',
    data () {
      return {
      }
    }
  }
</script>

<style lang="sass" scoped>

    #servers
        color: black + 60
        background: white - 10

    .server-list
        padding: 10em 0 3em

        > .container
            display: flex

    .servers
        width: 100%

        .server-table
            font-family: 'Questrial', sans-serif
            font-size: 1em
            border-collapse: separate
            border-spacing: 0 4px
            width: 100%
            padding: 0 1em
            text-align: center

            @media screen and (max-width: 900px)
                font-size: .8em

            th
                color: inherit !important
                text-align: center
                border-bottom: 1px solid #565656

                &:first-of-type
                    text-align: left

            th, td
                padding: 1em 1.5em


            .server
                transition: opacity .3s
                opacity: .85

                &:hover
                    opacity: 1

                > td:first-child
                    text-align: left
                    color: white
                    background: #5fd297
                    width: 45%
                    max-width: 0
                    white-space: nowrap
                    text-overflow: ellipsis
                    overflow: hidden

                &__status
                    color: #51bd86

                &--offline
                    > td:first-child
                        color: #8e8e8e
                        background: #e4e4e4

                    > td
                        background: #e4e4e4

                    .server__status
                        color: #fb8585

                @media screen and (max-width: 1200px)
                    &__time-left, &__uptime
                        display: none

                @media screen and (max-width: 900px)
                    &__status, &__time-left, &__uptime
                        display: none

                    &__name
                        width: 70%

            td
                margin: 1px 0
                background: white - 15

                > a
                    color: inherit
                    text-decoration: none

        .stats
            font-family: 'Questrial', sans-serif
            display: flex
            flex-wrap: wrap
            margin-top: 1.5em
            font-size: 1.2em
            justify-content: space-around

            @media screen and (max-width: 900px)
                font-size: .8em

            &__item
                margin: .5em 1em

    .filters
        flex-grow: 1
        padding: 0 1em

</style>