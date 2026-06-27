let panorama;
let currentIndex = 0;
const INTERVAL = 7;

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

  startCountdown();
}

function startCountdown() {
  let timeLeft = INTERVAL;
  const el = document.getElementById("countdown");

  el.textContent = timeLeft;

  setInterval(() => {
    timeLeft--;
    if (timeLeft <= 0) {
      timeLeft = INTERVAL;
      currentIndex = (currentIndex + 1) % LOCATIONS.length;
      panorama.setPano(LOCATIONS[currentIndex]);
    }
    el.textContent = timeLeft;
  }, 1000);
}
