$('.header-slider').slick({
  dots: true,
  infinite: true,
  speed: 400,
  slidesToShow: 1,
  adaptiveHeight: true,
  prevArrow: false,
  nextArrow: false,
  dotsClass: "vertical-dots"
});

$('.news-slider').slick({
  dots: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  infinite: true,
  adaptiveHeight: true,
  // prevArrow: $('.prev'),
  // nextArrow: $('.next'),
  dotsClass: "slick-dots"
});

// Google maps

let map = new google.maps.Map(document.getElementById('map'), {
  center: {
    lat: 40.671200,
    lng: -73.910990

  },
  zoom: 12,
  disableDefaultUI: true,
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
      "elementType": "labels",
      "stylers": [{
        "visibility": "off"
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
      "elementType": "labels",
      "stylers": [{
        "visibility": "off"
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
      "stylers": [{
        "visibility": "off"
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

let image = "src/map_pin.svg";
let marker = new google.maps.Marker({
  position: {
    lat: 40.671200,
    lng: -73.910990

  },
  map: map,
  icon: image
});

// Smooth scrolling
$('a[href*="#"]').on('click', function (e) {
  e.preventDefault()

  $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top,
    },
    1000,
    'linear'
  )
});