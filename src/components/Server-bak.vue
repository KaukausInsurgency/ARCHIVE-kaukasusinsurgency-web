<template>
    <main id="server">
        <section class="server-info">
            <div class="container">
                <div class="server-header">
                    <h1>Kaukasus Insurgency - Internal</h1>
                    <p><span class="status status--online">Online</span> for 4 hours</p>
                </div>
                <div class="stats">
                    <div class="stats__stat">
                        <div class="stats__title">Players</div>
                        <div class="stats__value">1</div>
                    </div>
                    <div class="stats__stat">
                        <div class="stats__title">Mission Time</div>
                        <div class="stats__value">16:00</div>
                    </div>
                    <div class="stats__stat">
                        <div class="stats__title">Campaign End ETA</div>
                        <div class="stats__value">00:00:15</div>
                    </div>
                    <div class="stats__stat">
                        <div class="stats__title">Campaign End ETA</div>
                        <div class="stats__value">00:00:15</div>
                    </div>
                </div>
                <div class="mission">
                    <div class="mission__players">
                        <h3>Online Players</h3>
                        <div class="player">
                            <div class="player__role">A-10C</div>
                            <div class="player__name">Scroll_Tro0L</div>
                        </div>
                        <div class="player">
                            <div class="player__role">A-10C</div>
                            <div class="player__name">Scroll_Tro0L</div>
                        </div>
                        <div class="player">
                            <div class="player__role">A-10C</div>
                            <div class="player__name">Scroll_Tro0L</div>
                        </div>
                    </div>
                    <div class="mission__map">
                        <img class="temp-img" src="https://forums.eagle.ru/attachment.php?attachmentid=140112&d=1462501383">
                    </div>
                </div>
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

    .server-info
        padding: 7em 0 3em

    .server-header
        margin: 0 0 2em

        > h1
            margin-bottom: 0

        > p
            font-size: 1.2em
            margin-top: .5em
            font-family: 'Questrial', sans-serif

    .status
        color: #51bd86

    .stats
        margin: 1em 0
        display: flex
        justify-content: space-between
        text-align: center

        &__stat
            border-radius: 5px
            padding: 1em 2em
            width: 16%
            color: white - 10
            background: #88b1ef
            font-size: 1em

        &__title
            margin-bottom: .5em

        &__value
            color: white
            font-size: 1.6em
            font-family: 'Questrial', sans-serif

    .mission
        margin-top: 5em
        display: grid
        grid-template: 1fr / 1fr 3fr

        &__players

            .player
                display: flex
                margin: 1em 0

                &__role
                    margin-right: 1em
                    text-align: center

        &__map

    .temp-img
        max-width: 100%


</style>
