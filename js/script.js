function initMap() {
	var map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 64.073082, lng: -141.937393 },
    zoom: 8,
  });

	var marker = new google.maps.Marker({
		position: { lat: 64.073082, lng: -141.937393 },
		map: map
	});

	const imageBounds = {
    north: (64.073082),
    south: (64.073082 - 0.20),
    east: (-141.937393 + 0.2),
    west: (-141.937393 - 0.2),
  };

  var chicken = new google.maps.GroundOverlay(
    "images/jumpscare.jpg",
    imageBounds,
  );
  chicken.setMap(map);
	
	const flightPlanCoordinates1 = [
    { lat: (64.073082 + 0.01), lng: (-141.937393 + 0.02)},
    { lat: (64.073082 + 0.01), lng: (-141.937393 + 0.01)},
		{ lat: (64.073082 + 0.03), lng: (-141.937393 + 0.01)},
  ];
  const flightPath1 = new google.maps.Polyline({
    path: flightPlanCoordinates1,
    geodesic: true,
    strokeColor: "#FF0000",
    strokeOpacity: 1.0,
    strokeWeight: 6,
  });

  flightPath1.setMap(map);
	
	const flightPlanCoordinates2 = [
    { lat: (64.073082 + 0.01), lng: (-141.937393 + 0.01)},
		{ lat: (64.073082 + 0.07), lng: (-141.937393 + 0.09)},
  ];
  const flightPath2 = new google.maps.Polyline({
    path: flightPlanCoordinates2,
    geodesic: true,
    strokeColor: "#FF0000",
    strokeOpacity: 1.0,
    strokeWeight: 6,
  });

  flightPath2.setMap(map);
}
