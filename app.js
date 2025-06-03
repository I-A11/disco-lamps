let flashing = {};
let flashAllInterval = null;
let allLampIds = ["lamp1", "lamp2", "lamp3", "lamp4", "lamp5", "lamp6"];

const toggleLamp = (id, color) => {
  const lamp = document.getElementById(id);

  // Stop flashing if this lamp is already flashing
  if (flashing[id]) {
    clearInterval(flashing[id]);
    flashing[id] = null;
  }

  // Turn lamp off if it’s already on
  if (lamp.classList.contains(`on-${color}`)) {
    lamp.className = "lamp";
  } else {
    // Otherwise, turn it on with color
    lamp.className = "lamp on-" + color;
  }
};

const flashLamp = (id, color) => {
  const lamp = document.getElementById(id);

  // If this lamp is already flashing, stop it
  if (flashing[id]) {
    clearInterval(flashing[id]);
    flashing[id] = null;
    lamp.className = "lamp"; // turn it off
  } else {
    // Start flashing every 0.5 seconds (500 ms)
    flashing[id] = setInterval(() => {
      lamp.classList.toggle(`on-${color}`);
    }, 500);
  }
};

const getLampColor = (index) => {
  const colors = ["red", "blue", "green", "yellow", "purple", "cyan"];
  return colors[index % colors.length];
};

const toggleFlashAll = () => {
  if (flashAllInterval) {
    // Stop all flashing
    clearInterval(flashAllInterval);
    flashAllInterval = null;

    // Turn off all lamps
    allLampIds.forEach((id) => {
      document.getElementById(id).className = "lamp";
    });

    // Change button text back
    document.getElementById("flashAllBtn").innerText = "Flash All Lamps";
  } else {
    // Start flashing all lamps
    let on = false;

    flashAllInterval = setInterval(() => {
      on = !on;

      allLampIds.forEach((id, index) => {
        const color = getLampColor(index);
        const lamp = document.getElementById(id);
        lamp.className = on ? `lamp on-${color}` : "lamp";
      });
    }, 500);

    // Update button text
    document.getElementById("flashAllBtn").innerText = "Stop Flashing";
  }
};
