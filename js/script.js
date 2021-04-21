let map;

function initMap() {
	map = new google.maps.Map(document.getElementById("map"), {
		center: {lat: 41.83902243036064, lng: -87.61786850786947},
		zoom: 16,
  });