<template>
    <div class="get-maps" id="map-div" ref="gMap">
        <!-- <img class="img-fluid" src="/map-sell.png" alt="img"> -->
        <!-- <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3372.6682985377965!2d-64.7866356!3d32.2938949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8a2d150deb7cf7bd%3A0x5b40a088d1302c48!2sScooter%20Mart%20-%20Hamilton!5e0!3m2!1sen!2s!4v1656689162156!5m2!1sen!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> -->

    </div>
</template>

<script>
    export default {
        mounted() {
            if (window.google) {
                let map = new google.maps.Map(this.$refs.gMap, {
                    center: {
                        lat: 32.291874,
                        lng: -64.774995
                    },
                    zoom: 14,
                    disableDefaultUI: true,
                    gestureHandling: 'none',
                    styles: [{
                            "elementType": "geometry",
                            "stylers": [{
                                "color": "#f5f5f5"
                            }]
                        },
                        {
                            "elementType": "labels.icon",
                            "stylers": [{
                                "visibility": "off"
                            }]
                        },
                        {
                            "elementType": "labels.text.fill",
                            "stylers": [{
                                "color": "#616161"
                            }]
                        },
                        {
                            "elementType": "labels.text.stroke",
                            "stylers": [{
                                "color": "#f5f5f5"
                            }]
                        },
                        {
                            "featureType": "administrative.land_parcel",
                            "elementType": "labels.text.fill",
                            "stylers": [{
                                "color": "#bdbdbd"
                            }]
                        },
                        {
                            "featureType": "poi",
                            "elementType": "geometry",
                            "stylers": [{
                                "color": "#eeeeee"
                            }]
                        },
                        {
                            "featureType": "poi",
                            "elementType": "labels.text.fill",
                            "stylers": [{
                                "color": "#757575"
                            }]
                        },
                        {
                            "featureType": "poi.park",
                            "elementType": "geometry",
                            "stylers": [{
                                "color": "#e5e5e5"
                            }]
                        },
                        {
                            "featureType": "poi.park",
                            "elementType": "labels.text.fill",
                            "stylers": [{
                                "color": "#9e9e9e"
                            }]
                        },
                        {
                            "featureType": "road",
                            "elementType": "geometry",
                            "stylers": [{
                                "color": "#ffffff"
                            }]
                        },
                        {
                            "featureType": "road.arterial",
                            "elementType": "labels.text.fill",
                            "stylers": [{
                                "color": "#757575"
                            }]
                        },
                        {
                            "featureType": "road.highway",
                            "elementType": "geometry",
                            "stylers": [{
                                "color": "#dadada"
                            }]
                        },
                        {
                            "featureType": "road.highway",
                            "elementType": "labels.text.fill",
                            "stylers": [{
                                "color": "#616161"
                            }]
                        },
                        {
                            "featureType": "road.local",
                            "elementType": "labels.text.fill",
                            "stylers": [{
                                "color": "#9e9e9e"
                            }]
                        },
                        {
                            "featureType": "transit.line",
                            "elementType": "geometry",
                            "stylers": [{
                                "color": "#e5e5e5"
                            }]
                        },
                        {
                            "featureType": "transit.station",
                            "elementType": "geometry",
                            "stylers": [{
                                "color": "#eeeeee"
                            }]
                        },
                        {
                            "featureType": "water",
                            "elementType": "geometry",
                            "stylers": [{
                                "color": "#c9c9c9"
                            }]
                        },
                        {
                            "featureType": "water",
                            "elementType": "labels.text.fill",
                            "stylers": [{
                                "color": "#9e9e9e"
                            }]
                        }
                    ]
                });
                // Bermuda
                let icon = '/map-icon.svg'
                let bermudaLink = new google.maps.Marker({
                    position: {
                        lat: 32.28593682315797,
                        lng: -64.77344451555416
                    },
                    icon: {
                        url: icon,
                        scaledSize: new google.maps.Size(150, 100),
                        origin: new google.maps.Point(0, 0),
                        anchor: new google.maps.Point(0, 75),
                    },
                    url: 'https://www.google.com/maps/place/Scooter+Mart/@32.282469,-64.7900646,14.58z/data=!4m5!3m4!1s0x8a2d14689b62f3cf:0xdfa668714d4ac263!8m2!3d32.2857373!4d-64.7734767',
                    map: map,
                });
                // Hamilton
                let hamiltonLink = new google.maps.Marker({
                    position: {
                        lat: 32.294039989588946,
                        lng: -64.78665705973005
                    },
                    url: 'https://www.google.com/maps/place/Scooter+Mart+-+Hamilton/@32.2938994,-64.7888243,17z/data=!3m1!4b1!4m5!3m4!1s0x8a2d150deb7cf7bd:0x5b40a088d1302c48!8m2!3d32.2938949!4d-64.7866356',
                    icon: {
                        url: icon,
                        scaledSize: new google.maps.Size(150, 100),
                        origin: new google.maps.Point(0, 0),
                        anchor: new google.maps.Point(0, 75),
                    },
                    map: map,
                });

                window.initMap = map;
                google.maps.event.addListener(bermudaLink, 'click', function () {
                    window.open(bermudaLink.url, '_blank').focus()
                });
                google.maps.event.addListener(hamiltonLink, 'click', function () {
                    window.open(hamiltonLink.url, '_blank').focus()
                });
            }
        }
    }

</script>
<style>
    .gm-style-cc {
        display: none !important;
    }

    .gm-style a[href^="https://maps.google.com/maps"] {
        display: none !important;
    }

</style>
