function createRightEye(options) {
  options = {...defaultOptions, ...options};
  let rightEye = document.createElementNS("http://www.w3.org/2000/svg", "g");
  let outerRightEye = document.createElementNS("http://www.w3.org/2000/svg", "circle", { class: "eye-inner" });
  outerRightEye.setAttribute("class", "eye-outer");
  outerRightEye.setAttribute("cx", '95');
  outerRightEye.setAttribute("cy", "30");
  outerRightEye.setAttribute("r", "20");
  outerRightEye.style.fill = options.scleraColor;
  outerRightEye.style.strokeWidth = options.scleraOutlineWidth;
  outerRightEye.style.stroke = options.scleraOutlineColor;
  let innerRightEye = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  innerRightEye.setAttribute("class", "eye-inner");
  innerRightEye.setAttribute("cx", '105');
  innerRightEye.setAttribute("cy", "30");
  innerRightEye.setAttribute("r", "10");
  innerRightEye.style.fill = options.pupilColor;
  rightEye.appendChild(outerRightEye);
  rightEye.appendChild(innerRightEye);
  return rightEye;
}

function createLeftEye(options) {
  options = {...defaultOptions, ...options}
    let leftEye = document.createElementNS("http://www.w3.org/2000/svg", "g")
  let outerLeftEye = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  outerLeftEye.setAttribute("class", "eye-outer");
  outerLeftEye.setAttribute("cx", '15');
  outerLeftEye.setAttribute("cy", "30");
  outerLeftEye.setAttribute("r", "20");
  outerLeftEye.style.fill = options.scleraColor;
  outerLeftEye.style.strokeWidth = options.scleraOutlineWidth;
  outerLeftEye.style.stroke = options.scleraOutlineColor;
  let innerLeftEye = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  innerLeftEye.setAttribute("class", "eye-inner");
  innerLeftEye.setAttribute("cx", '25');
  innerLeftEye.setAttribute("cy", "30");
  innerLeftEye.setAttribute("r", "10");
  innerLeftEye.style.fill = options.pupilColor;
  leftEye.appendChild(outerLeftEye);
  leftEye.appendChild(innerLeftEye);
  return leftEye;
}

function createEyes(options, idPrefix) {
  options = {...defaultOptions, ...options};
  let eyes = document.createElement('div');
  eyes.setAttribute("class", "eyes");
  eyes.style.height = options.browRidgeHeight;
  let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute("viewBox", "0 0 120 120");
  svg.style.position = options.eyesSVGPosition;
  svg.style.height = options.eyesSVGHeight;
  svg.style.width = options.eyesSVGWidth;
  svg.style.paddingTop = options.eyesSVGPaddingTop;
  svg.style.paddingLeft = options.eyesSVGPaddingLeft;
  let leftEye = createLeftEye(options);
  leftEye.setAttribute("id", `cat${idPrefix}-left-eye`)
  let rightEye = createRightEye(options);
  rightEye.setAttribute("id", `cat${idPrefix}-right-eye`)
  svg.appendChild(leftEye);
  svg.appendChild(rightEye);
  eyes.appendChild(svg);
  return { eyes, svg };
}
function createLip(options, side) {
  let lip = document.createElement("div");
  lip.setAttribute("class", `${side}-lip`);
  if (side === "left") {
    lip.style.marginLeft = "36%";
  }
  lip.style.width = options.lipWidth;
  lip.style.height = options.lipHeight;
  lip.style.borderBottomLeftRadius = options.lipBottomLeftRadius;
  lip.style.borderBottomRightRadius = options.lipBottomRightRadius;
  lip.style.border = options.lipBorder;
  lip.style.borderTop = options.lipBorderTop;
  return lip;
}
function createMouth(options) {
  options = {...defaultOptions, ...options};
  let mouth = document.createElement("div")
  mouth.setAttribute("class", "mouth");
  mouth.style.display = "flex";
  mouth.style.justifyContent = "center";
  mouth.style.margin = options.mouthMargin;
  let leftLip = createLip(options, 'left');
  let rightLip = createLip(options, 'right');
  mouth.appendChild(leftLip);
  mouth.appendChild(rightLip);
  return mouth;
}

function createNose(options) {
  options = {...defaultOptions, ...options};
  let nose = document.createElement('div');
  nose.setAttribute("class", "nose");
  let roundBit = document.createElement('div');
  roundBit.setAttribute("class", "round-bit");
  roundBit.style.width = options.noseWidth;
  roundBit.style.height = options.noseHeight;
  roundBit.style.backgroundColor = options.noseColor;
  roundBit.style.borderRadius = options.noseBorderRadius;
  roundBit.style.margin = options.noseMargin;
  roundBit.style.display = "flex";
  roundBit.style.justifyContent = "space-evenly";
  let nostril1 = document.createElement('div');
  nostril1.setAttribute("class", "nostril");
  nostril1.style.backgroundColor = options.nostrilColor;
  nostril1.style.borderRadius = options.nostrilBorderRadius;
  nostril1.style.marginTop = options.nostrilMarginTop;
  nostril1.style.height = options.nostrilHeight;
  nostril1.style.width = options.nostrilWidth;
  let nostril2 = document.createElement("div");
  nostril1.setAttribute("class", "nostril");
  nostril2.style.backgroundColor = options.nostrilColor;
  nostril2.style.borderRadius = options.nostrilBorderRadius;
  nostril2.style.marginTop = options.nostrilMarginTop;
  nostril2.style.height = options.nostrilHeight;
  nostril2.style.width = options.nostrilWidth;
  roundBit.appendChild(nostril1);
  roundBit.appendChild(nostril2);
  nose.appendChild(roundBit);
  let philtrum = document.createElement("div");
  philtrum.setAttribute("class", "straight-bit");
  philtrum.style.backgroundColor = options.philtrumColor ?? options.noseColor;
  philtrum.style.height = options.philtrumHeight;
  philtrum.style.width = options.philtrumWidth;
  philtrum.style.margin = options.philtrumMargin;
  nose.appendChild(philtrum);
  return nose;
}

function createEar(options, side) {
  options = {...defaultOptions, ...options};
  const ear = document.createElement("div");
  ear.setAttribute("class", `${side}-ear`);
  ear.style.borderBottomColor = options[`${side}EarColor`] ?? options.catColor;
  ear.style.borderBottomWidth = options[`${side}EarHeight`];
  ear.style.borderBottomStyle = "solid";
  ear.style.borderLeftColor = "transparent";
  ear.style.borderRightColor = "transparent";
  ear.style.borderLeftWidth = "40px";
  ear.style.borderRightWidth = "40px";
  ear.style.borderRightStyle = "solid";
  ear.style.borderLeftStyle = "solid";
  ear.style.height = "0";
  ear.style.width = "0";
  // Ensure ear appears behind head
  ear.style.zIndex = "-1"
  if (side === "left") {
    ear.style.marginLeft = "30%";
  } else {
    ear.style.marginRight = "30%";
  }
  return ear;
}

function createEars(options, idPrefix) {
  options = {...defaultOptions, ...options};
  let ears = document.createElement("div");
  ears.setAttribute("class", "ears");
  ears.setAttribute("id", `${idPrefix}-ears`)
  ears.style.display = "flex";
  ears.style.justifyContent = "space-between";
  ears.style.width = "380px";
  let leftEar = createEar(options, 'left');
  leftEar.setAttribute("id", `cat${idPrefix}-left-ear`)
  let rightEar = createEar(options, 'right');
  rightEar.setAttribute("id", `cat${idPrefix}-right-ear`)
  ears.appendChild(leftEar);
  ears.appendChild(rightEar);
  return ears;
}

function createHead(options, idPrefix) {
  options = {...defaultOptions, ...options};
  let head = document.createElement('div');
  head.setAttribute("class", "head");
  head.setAttribute("id", `${idPrefix}-head`)
  head.style.backgroundColor = options.headColor ?? options.catColor;
  head.style.width = options.headWidth;
  head.style.height = options.headHeight;
  head.style.borderRadius = options.headBorderRadius;
  head.style.margin = options.headMargin;
  let { eyes, svg } = createEyes(options, idPrefix);
  eyes.setAttribute("id", `cat${idPrefix}-eyes`);
  svg.setAttribute("id", `cat${idPrefix}-svg`);
  let nose = createNose(options);
  nose.setAttribute("id", `cat${idPrefix}-nose`);
  let mouth = createMouth(options);
  mouth.setAttribute("id", `cat${idPrefix}-mouth`);
  head.appendChild(eyes);
  head.appendChild(nose);
  head.appendChild(mouth);
  return { head, svg };
}
function createArm(options, side) {
  options = {...defaultOptions, ...options};
  let arm = document.createElement("div");
  arm.setAttribute("class", `${side}-arm`);
  arm.style.backgroundColor = options[`${side}FrontPawColor`] ?? options.catColor;
  arm.style.height = options[`${side}FrontPawSize`];
  arm.style.width = options[`${side}FrontPawSize`];
  if (side === 'left') {
    arm.style.marginRight = options.leftFrontPawMarginRight;
  } else {
    arm.style.marginLeft = options.rightFrontPawMarginLeft;
  }
  arm.style.borderRadius = options[`${side}FrontPawRadius`];
  return arm;
}

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

function createBody(options, idPrefix) {
  options = {...defaultOptions, ...options};
  let body = document.createElement("div");
  body.setAttribute("class", "body");
  body.setAttribute("id", `cat${idPrefix}-body`)
  body.style.zIndex = "-1";
  body.style.display = "flex";
  body.style.justifyContent = "center";
  body.style.alignItems = "center";
  let leftArm = createArm(options, 'left');
  leftArm.setAttribute("id", `cat${idPrefix}-left-arm`)
  let { torso, clock } = createTorso(options);
  torso.setAttribute("id", `cat${idPrefix}-torso`);
  clock.setAttribute("id", `cat${idPrefix}-clock`)
  let rightArm = createArm(options, 'right');
  rightArm.setAttribute("id", `cat${idPrefix}-right-arm`)
  body.appendChild(leftArm);
  body.appendChild(torso);
  body.appendChild(rightArm);
  return { body, clock };
}

function createLeg(options, side) {
  options = {...defaultOptions, ...options};
  let leg = document.createElement("div");
  leg.setAttribute("class", `${side}-leg`);
  leg.style.backgroundColor = options[`${side}BackPawColor`] ?? options.catColor;
  leg.style.marginTop = options[`${side}BackPawMarginTop`];
  leg.style.borderRadius = options[`${side}BackPawBorderRadius`];
  leg.style.width = options[`${side}BackPawWidth`];
  leg.style.height = options[`${side}BackPawHeight`];
  return leg;
}

function createLegs(options, idPrefix) {
  options = {...defaultOptions, ...options};
  let legs = document.createElement("div");
  legs.setAttribute("class", "legs");
  legs.setAttribute("id", `cat${idPrefix}-legs`);
  legs.style.display = "flex";
  legs.style.justifyContent = "space-around";
  let leftLeg = createLeg(options, 'left');
  leftLeg.setAttribute("id", `cat${idPrefix}-left-leg`)
  let rightLeg = createLeg(options, 'right');
  rightLeg.setAttribute("id", `cat${idPrefix}-right-leg`)
  legs.appendChild(leftLeg);
  legs.appendChild(rightLeg);
  return legs;
}

function createTail(options, idPrefix) {
  options = {...defaultOptions, ...options};
  let tail = document.createElement("div");
  tail.setAttribute("class", "tail");
  tail.setAttribute("id", `cat${idPrefix}-tail`)
  tail.style.borderColor = options.tailColor ?? options.catColor;
  tail.style.borderRightWidth = options.tailRightBorderWidth;
  tail.style.borderBottomWidth = options.tailBottomBorderWidth;
  tail.style.borderRightStyle = "solid";
  tail.style.width = options.tailWidth;
  tail.style.height = options.tailHeight;
  tail.style.alignSelf = "center";
  tail.style.marginRight = options.tailMarginRight;
  tail.style.borderBottomRightRadius = options.tailCurve;
  tail.style.marginTop = options.tailMarginTop;
  return tail;
}

function createCat(options, idPrefix) {
  options = {...defaultOptions, ...options};
  let cat = document.createElement("div");
  cat.setAttribute("id", `cat${idPrefix}`);
  cat.setAttribute("class", "cat");
  cat.style.margin = options.catMargin;
  cat.style.width = options.catWidth;
  cat.style.display = "flex";
  cat.style.flexDirection = "column";
  cat.style.zIndex = "1";
  let ears = createEars(options, idPrefix);
  let { head, svg } = createHead(options, idPrefix);
  let { body, clock } = createBody(options, idPrefix);
  let legs = createLegs(options);
  let tail = createTail(options);
  cat.appendChild(ears);
  cat.appendChild(head);
  cat.appendChild(body);
  cat.appendChild(legs);
  cat.appendChild(tail);
  return { svg, clock, cat}
}