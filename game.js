let panorama;
let currentIndex = 0;

function initPano() {
  panorama = new google.maps.StreetViewPanorama(
    document.getElementById("pano"),
    {
      pano: LOCATIONS[currentIndex],
      pov: {
        heading: 90,
        pitch: 0
      },
      zoom: 1,
      addressControl: false,
      linksControl: false,
      clickToGo: false,
      showRoadLabels: false,
      fullscreenControl: false,
      enableCloseButton: false
    }
  );

  setInterval(nextLocation, 30000);
}

function nextLocation() {
  currentIndex = (currentIndex + 1) % LOCATIONS.length;
  panorama.setPano(LOCATIONS[currentIndex]);
}
