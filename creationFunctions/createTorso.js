function createTorso(options) {
    options = {...defaultOptions, ...options};
    let torso = document.createElement("div");
    torso.setAttribute("class", "torso");
    torso.style.backgroundColor = options.torsoColor ?? options.catColor;
    torso.style.height = options.torsoHeight;
    torso.style.width = options.torsoWidth;
    torso.style.borderRadius = options.torsoBorderRadius;
    torso.style.display = "flex";
    torso.style.alignItems = "center";
    function clockInit() {
      let clock = document.createElement("canvas");
      clock.setAttribute("class", "clock");
      clock.style.height = options.clockHeight;
      clock.style.width = options.clockWidth;
      return clock;
    }
    let clock = clockInit();
    torso.appendChild(clock);
    return {torso, clock}
  }