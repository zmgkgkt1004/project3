var map;

function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 41.83902243036064, lng: -87.61786850786947},
		zoom: 15,
  });

	//pointSummary
	const trailInfo = '<div class="googleMapsInfo"><h1 id="iconHeading">Lakefront Trail</h1><p>Since I am part of ROTC, it is required me to run. This trail is not far away from my school, so it is very easy for me to get there but the view is very nice around sunset.</p></div>';
	const schoolInfo = '<div class="googleMapsInfo"><h1 id="iconHeading">Illinois Institute of Technology</h1><p>This is the school that I am currently attending.</p></div>';
	const dessertInfo = '<div class="googleMapsInfo"><h1 id="iconHeading">Sweet Dreams Frozen Yogurt</h1><p>This is a frozen yogurt shop and I often visit to have frozen yogurt when I feel like having something sweet.</p></div>';

	//Trail
	const trail = {
      url: "image/trail.png",
      scaledSize: new google.maps.Size(32, 32)
	};
	const trailLocation = new google.maps.Marker ({
		position: {lat: 41.839580984451935, lng: -87.60742888183863},	
		icon: trail,
		animation: google.maps.Animation.DROP,
		map,
		title: "Lakefront Trail",
	});
	const trailWindow = new google.maps.InfoWindow ({
		content: trailInfo,
	})
	trailLocation.addListener("click", () => {
		trailWindow.open(map, trailLocation);
	})
	
	//School
	const school = {
      url: "image/school.png",
      scaledSize: new google.maps.Size(32, 32)
	};
	const schoolLocation = new google.maps.Marker ({
		position: {lat: 41.8347251546063, lng: -87.6269110524534},
		icon: school,
		animation: google.maps.Animation.DROP,
		map,
		title: "Illinois Institute of Technology",
	});
	const schoolWindow = new google.maps.InfoWindow ({
		content: schoolInfo,
	})
	schoolLocation.addListener("click", () => {
		schoolWindow.open(map, schoolLocation)
	})
	
	//Dessert
	const dessert = {
      url: "image/dessert.png",
      scaledSize: new google.maps.Size(32, 32)
	}
	const dessertLocation = new google.maps.Marker ({
		  position: {lat: 41.830783771148795, lng: -87.62739594279333},
		  icon: dessert,
		  animation: google.maps.Animation.DROP,
		  map,
		  title: "Sweet Dreams Frozen Yogurt"
	});
	const dessertWindow = new google.maps.InfoWindow ({
		content: dessertInfo,
	})
	dessertLocation.addListener("click", () => {
		dessertWindow.open(map, dessertLocation)
	})
	
}