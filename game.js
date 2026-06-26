function initPano() {
  new google.maps.StreetViewPanorama(
    document.getElementById("pano"),
    {
      pano: "dA-MQfp7MBJ5J8gAZ_BFOw",
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
}
