function initMap() {
	var map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 64.073082, lng: -141.937393 },
    zoom: 9,
  });

	var marker = new google.maps.Marker({
		position: { lat: 64.073082, lng: -141.937393 },
		map: map
	});

	const imageBounds = {
    north: (64.073082 - 0.005),
    south: (64.073082 - 0.205),
    east: (-141.937393 + 0.2),
    west: (-141.937393 - 0.2),
  };

  var chicken = new google.maps.GroundOverlay(
    "images/jumpscare.jpg",
    imageBounds,
  );
  chicken.setMap(map);
	
	const flightPlanCoordinates1 = [
    { lat: (64.073082 + 0.01), lng: (-141.937393 + 0.08)},
    { lat: (64.073082 + 0.005), lng: (-141.937393 + 0.04)},
		{ lat: (64.073082 + 0.02), lng: (-141.937393 + 0.02)},
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
    { lat: (64.073082 + 0.005), lng: (-141.937393 + 0.04)},
		{ lat: (64.073082 + 0.07), lng: (-141.937393 + 0.11)},
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

let slideIndex = 1;
displaySlide(slideIndex);
 
function moveSlides(n) {
    displaySlide(slideIndex += n);
}
 
function activeSlide(n) {
    displaySlide(slideIndex = n);
}
 
/* Main function */
function displaySlide(n) {
    let i;
    let totalslides =
        document.getElementsByClassName("slide");
    let totaldots =
        document.getElementsByClassName("footerdot");
				
    totalslides[1].style.display = "block";
    totaldots[1].className += " active";
		slideIndex = 1;
		
    if (n > totalslides.length) {
        slideIndex = 1;
    }
 
    if (n < 1) {
        slideIndex = totalslides.length;
    }
    for (i = 0; i < totalslides.length; i++) {
        totalslides[i].style.display = "none";
    }
    for (i = 0; i < totaldots.length; i++) {
        totaldots[i].className =
            totaldots[i].className.replace(" active", "");
    }
    totalslides[slideIndex - 1].style.display = "block";
    totaldots[slideIndex - 1].className += " active";
}