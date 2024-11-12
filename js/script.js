function initMap() {
	var map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 64.073082, lng: -141.937393 },
    zoom: 8,
  });
	var marker = new google.maps.Marker({
		position: { lat: 64.073082, lng: -141.937393 },
		map: map,
		title: "dont click",
		gmpClickable: true
	});
	marker.addListener("click", ({ jumpscare(), { lat: 64.073082, lng: -141.937393 } }) => {
  const { target } = jumpscare();
}
function jumpscare() {
	const bounds = new google.maps.LatLngBounds(
    new google.maps.LatLng(63.973082, -142.037393),
    new google.maps.LatLng(64.173082, -141.837393),
  );
	const image = new Image();
	image.src = "images/jumpscare.jpg";
	class USGSOverlay extends google.maps.OverlayView {
  bounds;
  image;
  div;
  constructor(bounds, image) {
    super();
    this.bounds = bounds;
    this.image = image;
  }
	onAdd() {
      this.div = document.createElement("div");
      this.div.style.borderStyle = "none";
      this.div.style.borderWidth = "0px";
      this.div.style.position = "absolute";

      // Create the img element and attach it to the div.
      const img = document.createElement("img");

      img.src = this.image;
      img.style.width = "100%";
      img.style.height = "100%";
      img.style.position = "absolute";
      this.div.appendChild(img);

      // Add the element to the "overlayLayer" pane.
      const panes = this.getPanes();

      panes.overlayLayer.appendChild(this.div);
    }
    draw() {
      // We use the south-west and north-east
      // coordinates of the overlay to peg it to the correct position and size.
      // To do this, we need to retrieve the projection from the overlay.
      const overlayProjection = this.getProjection();
      // Retrieve the south-west and north-east coordinates of this overlay
      // in LatLngs and convert them to pixel coordinates.
      // We'll use these coordinates to resize the div.
      const sw = overlayProjection.fromLatLngToDivPixel(
        this.bounds.getSouthWest(),
      );
      const ne = overlayProjection.fromLatLngToDivPixel(
        this.bounds.getNorthEast(),
      );
			if (this.div) {
        this.div.style.left = sw.x + "px";
        this.div.style.top = ne.y + "px";
        this.div.style.width = ne.x - sw.x + "px";
        this.div.style.height = sw.y - ne.y + "px";
      }
    }
	}
}