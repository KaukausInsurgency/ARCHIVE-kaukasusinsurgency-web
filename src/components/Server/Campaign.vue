<template>
    <div id="campaign">
        <gmap-map
                :center="{lat:42.5, lng:42}"
                :zoom="9"
                map-type-id="terrain"
                :options="{
                    styles: styles,
                    disableDefaultUI: true,
                    zoomControl: true,
                }"
                style="width: 100vw; height: 100vh"
        >
            <gmap-marker
                    :key="index"
                    v-for="(m, index) in markers"
                    :position="m.position"
                    :infoText="Hi"
                    :clickable="true"
                    :icon="{
                        url:'https://www.flyuia.com/assets/img/header/countries/ua.png?ver=4'
                    }"
            ></gmap-marker>
            <gmap-marker
                    :key="index"
                    v-for="(m, index) in markers2"
                    :position="m.position"
                    :infoText="Hi"
                    :clickable="true"
                    :icon="{
                        url:'https://www.flyuia.com/assets/img/header/countries/ua.png?ver=4'
                    }"
            ></gmap-marker>
        </gmap-map>

        <div class="overlay">
            <section class="overlay__top">
                <span class="back interactive"><-</span>
            </section>
            <section class="overlay__bottom interactive">
                <div class="chat">
                    <div class="chat__message">
                        <span class="chat__username chat__username--redfor">Scroll_Tro0L</span>:
                        <span class="chat_body">This is a chat event</span>
                    </div>
                    <div class="chat__message">
                        <span class="chat__username chat__username--blufor">Other Dude</span>:
                        <span class="chat_body">This is another chat event as well. This one's a bit longer though.</span>
                    </div>
                    <div class="chat__message">
                        <span class="chat__username">Goose</span>:
                        <span class="chat_body">I'm a peasant spectator so I don't have a color to my name.</span>
                    </div>
                    <div class="chat__message">
                        <span class="chat__username chat__username--blufor">Other Dude</span>:
                        <span class="chat_body">An unnecessarily long post to show off the custom scrollbar now.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
          return {
            markers: [{
              position: {lat: 42.5, lng: 42}
            }, {
              position: {lat: 42, lng: 42}
            }],
            markers2: [{
              position: {lat: 42.8, lng: 42.8}
            }, {
              position: {lat: 42.4, lng: 42.4}
            }],
            styles: [
              {
                "featureType": "all",
                "elementType": "labels",
                "stylers": [
                  {
                    "visibility": "on"
                  }
                ]
              },
              {
                "featureType": "all",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "saturation": 36
                  },
                  {
                    "color": "#000000"
                  },
                  {
                    "lightness": 40
                  }
                ]
              },
              {
                "featureType": "all",
                "elementType": "labels.text.stroke",
                "stylers": [
                  {
                    "visibility": "on"
                  },
                  {
                    "color": "#000000"
                  },
                  {
                    "lightness": 16
                  }
                ]
              },
              {
                "featureType": "all",
                "elementType": "labels.icon",
                "stylers": [
                  {
                    "visibility": "off"
                  }
                ]
              },
              {
                "featureType": "administrative",
                "elementType": "geometry.fill",
                "stylers": [
                  {
                    "color": "#000000"
                  },
                  {
                    "lightness": 20
                  }
                ]
              },
              {
                "featureType": "administrative",
                "elementType": "geometry.stroke",
                "stylers": [
                  {
                    "color": "#000000"
                  },
                  {
                    "lightness": 17
                  },
                  {
                    "weight": 1.2
                  }
                ]
              },
              {
                "featureType": "administrative.country",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#e5c163"
                  }
                ]
              },
              {
                "featureType": "administrative.locality",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#c4c4c4"
                  }
                ]
              },
              {
                "featureType": "administrative.neighborhood",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#e5c163"
                  }
                ]
              },
              {
                "featureType": "landscape",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#000000"
                  },
                  {
                    "lightness": 20
                  }
                ]
              },
              {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#000000"
                  },
                  {
                    "lightness": 21
                  },
                  {
                    "visibility": "on"
                  }
                ]
              },
              {
                "featureType": "poi.business",
                "elementType": "geometry",
                "stylers": [
                  {
                    "visibility": "on"
                  }
                ]
              },
              {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [
                  {
                    "color": "#ae8b54"
                  },
                  {
                    "lightness": "0"
                  }
                ]
              },
              {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                  {
                    "visibility": "off"
                  }
                ]
              },
              {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#ffffff"
                  }
                ]
              },
              {
                "featureType": "road.highway",
                "elementType": "labels.text.stroke",
                "stylers": [
                  {
                    "color": "#e5c163"
                  }
                ]
              },
              {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#000000"
                  },
                  {
                    "lightness": 18
                  }
                ]
              },
              {
                "featureType": "road.arterial",
                "elementType": "geometry.fill",
                "stylers": [
                  {
                    "color": "#575757"
                  }
                ]
              },
              {
                "featureType": "road.arterial",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#ffffff"
                  }
                ]
              },
              {
                "featureType": "road.arterial",
                "elementType": "labels.text.stroke",
                "stylers": [
                  {
                    "color": "#2c2c2c"
                  }
                ]
              },
              {
                "featureType": "road.local",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#000000"
                  },
                  {
                    "lightness": 16
                  }
                ]
              },
              {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#999999"
                  }
                ]
              },
              {
                "featureType": "transit",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#000000"
                  },
                  {
                    "lightness": 19
                  }
                ]
              },
              {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#000000"
                  },
                  {
                    "lightness": 17
                  }
                ]
              }
            ]
          }
        }
    }
</script>

<style lang="sass" scoped>

    #campaign
        position: relative

        .overlay
            z-index: 1
            pointer-events: none
            position: absolute
            top: 0
            left: 0
            width: 100vw
            height: 100vh
            display: flex
            flex-direction: column

            .interactive
                pointer-events: all

            &__bottom
                margin-top: auto

        .chat
            font-size: .8em
            width: 20vw
            height: 20vh
            padding: 1em
            background: rgba(0,0,0,.7)
            overflow-y: scroll
            opacity: .7
            transition: opacity .1s
            border: 10px solid transparent

            &:hover
                opacity: 1

            &__message
                margin: .5em 0

            &__username
                font-weight: bold
                color: #9b9b9b

                &--blufor
                    color: #5a8be8

                &--redfor
                    color: #e85a5a

            &::-webkit-scrollbar
                width: 10px
            /*background-color: #000000*/

            &::-webkit-scrollbar-track
                border-radius: 5px
            /*background: rgba(0,0,0,0.1)*/
            /*border: 1px solid #191919*/

            &::-webkit-scrollbar-thumb
                border-radius: 10px
                background: #cdcdcd


            &::-webkit-scrollbar-thumb:hover
                background: #f5f5f5

            &::-webkit-scrollbar-thumb:active
                background: #e5c163

</style>