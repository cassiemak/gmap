// $(document).ready(function(){

  var myMap;

  var myStyle = [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#215736"},{"visibility":"on"}]}];


  var mapOptions = {
    center: new google.maps.LatLng(22.27,114.1245),
    zoom: 15,
    panControl: false,
    zoomControl: false,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    styles: myStyle
  };
  var markerOptions = {lat: 22.27, lng: 114.1245};

  var initMap = function() {
    myMap = new google.maps.Map(document.getElementById('map'), mapOptions);
    new google.maps.Marker({position: markerOptions, map: myMap}); 
  };
  // initMap();
  google.maps.event.addDomListener(window, 'load', initMap);
// });