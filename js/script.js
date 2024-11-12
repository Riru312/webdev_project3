function initMap() {
	var map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 64.073082, lng: -141.937393 },
    zoom: 8,
  });
	var marker = new google.maps.Marker({
		position: { lat: 64.073082, lng: -141.937393 },
		map: map
	});
}