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
    north: (64.073082 + 0.1),
    south: (64.073082 - 0.1),
    east: (-141.937393 + 0.1),
    west: (-141.937393 - 0.1),
  };

  var chicken = new google.maps.GroundOverlay(
    "images/jumpscare.jpeg",
    imageBounds,
  );
  chicken.setMap(map);
}
