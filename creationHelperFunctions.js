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
  eyes.style.width = options.browRidgeWidth;
  let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute("viewBox", "0 0 120 120");
  let leftEye = createLeftEye(options);
  leftEye.setAttribute("id", `cat${idPrefix}-left-eye`)
  let rightEye = createRightEye(options);
  rightEye.setAttribute("id", `cat${idPrefix}-right-eye`)
  svg.appendChild(leftEye);
  svg.appendChild(rightEye);
  eyes.appendChild(svg);
  return { eyes, svg };
}
function createMouth(options) {
  options = {...defaultOptions, ...options};
  let mouth = document.createElement("div")
  mouth.setAttribute("class", "mouth");
  let leftSide = document.createElement("div");
  leftSide.setAttribute("class", "left-side");
  let rightSide = document.createElement("div");
  rightSide.setAttribute("class", "right-side");
  mouth.appendChild(leftSide);
  mouth.appendChild(rightSide);
  return mouth;
}

function createNose(options) {
  options = {...defaultOptions, ...options};
  let nose = document.createElement('div');
  nose.setAttribute("class", "nose");
  let roundBit = document.createElement('div');
  roundBit.setAttribute("class", "round-bit");
  let nostril1 = document.createElement('div');
  nostril1.setAttribute("class", "nostril");
  let nostril2 = document.createElement("div");
  nostril2.setAttribute("class", "nostril");
  roundBit.appendChild(nostril1);
  roundBit.appendChild(nostril2);
  nose.appendChild(roundBit);
  let straightBit = document.createElement("div");
  straightBit.setAttribute("class", "straight-bit");
  nose.appendChild(straightBit);
  return nose;
}

function createLeftEar(options) {
  options = {...defaultOptions, ...options};
  let leftEar = document.createElement("div");
  leftEar.setAttribute("class", "left-ear");
  leftEar.style.borderBottomColor = options.catColor;
  leftEar.style.borderBottomWidth = options.leftEarHeight;
  leftEar.style.borderBottomStyle = "solid";
  return leftEar;
}

function createRightEar(options) {
  options = {...defaultOptions, ...options};
  let rightEar = document.createElement("div");
  rightEar.setAttribute("class", "right-ear");
  rightEar.style.borderBottomColor = options.catColor;
  rightEar.style.borderBottomWidth = options.leftEarHeight;
  rightEar.style.borderBottomStyle = "solid";
  return rightEar;
}

function createEars(options, idPrefix) {
  options = {...defaultOptions, ...options};
  let ears = document.createElement("div");
  ears.setAttribute("class", "ears");
  ears.setAttribute("id", `${idPrefix}-ears`)
  let leftEar = createLeftEar(options);
  leftEar.setAttribute("id", `cat${idPrefix}-left-ear`)
  let rightEar = createRightEar(options);
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
  head.style.backgroundColor = options.catColor;
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

function createLeftArm(options) {
  options = {...defaultOptions, ...options};
  let leftArm = document.createElement("div");
  leftArm.setAttribute("class", "left-arm");
  leftArm.style.backgroundColor = options.catColor;
  leftArm.style.height = options.leftFrontPawSize;
  leftArm.style.width = options.leftFrontPawSize;
  return leftArm;
}

function createRightArm(options) {
  options = {...defaultOptions, ...options};
  let rightArm = document.createElement("div");
  rightArm.setAttribute("class", "right-arm");
  rightArm.style.backgroundColor = options.catColor;
  rightArm.style.height = options.rightFrontPawSize;
  rightArm.style.width = options.rightFrontPawSize;
  return rightArm;
}

function createTorso(options) {
  options = {...defaultOptions, ...options};
  let torso = document.createElement("div");
  torso.setAttribute("class", "torso");
  torso.style.backgroundColor = options.catColor;
  function createClock() {
    let clock = document.createElement("canvas");
    clock.setAttribute("class", "clock");
    return clock;
  }
  let clock = createClock();
  torso.appendChild(clock);
  return {torso, clock}
}

function createBody(options, idPrefix) {
  options = {...defaultOptions, ...options};
  let body = document.createElement("div");
  body.setAttribute("class", "body");
  body.setAttribute("id", `cat${idPrefix}-body`)
  let leftArm = createLeftArm(options);
  leftArm.setAttribute("id", `cat${idPrefix}-left-arm`)
  let { torso, clock } = createTorso(options);
  torso.setAttribute("id", `cat${idPrefix}-torso`);
  clock.setAttribute("id", `cat${idPrefix}-clock`)
  let rightArm = createRightArm(options);
  rightArm.setAttribute("id", `cat${idPrefix}-right-arm`)
  body.appendChild(leftArm);
  body.appendChild(torso);
  body.appendChild(rightArm);
  return { body, clock };
}

function createLeftLeg(options) {
  options = {...defaultOptions, ...options};
  let leftLeg = document.createElement("div");
  leftLeg.setAttribute("class", "left-leg");
  leftLeg.style.backgroundColor = options.catColor;
  return leftLeg;
}

function createRightLeg(options) {
  options = {...defaultOptions, ...options};
  let rightLeg = document.createElement("div");
  rightLeg.setAttribute("class", "right-leg");
  rightLeg.style.backgroundColor = options.catColor;
  return rightLeg;
}

function createLegs(options, idPrefix) {
  options = {...defaultOptions, ...options};
  let legs = document.createElement("div");
  legs.setAttribute("class", "legs");
  legs.setAttribute("id", `cat${idPrefix}-legs`)
  let leftLeg = createLeftLeg(options);
  leftLeg.setAttribute("id", `cat${idPrefix}-left-leg`)
  let rightLeg = createRightLeg(options);
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
  tail.style.borderColor = options.catColor;
  return tail;
}

function createCat(options, idPrefix) {
  options = {...defaultOptions, ...options};
  let cat = document.createElement("div");
  cat.setAttribute("id", `cat${idPrefix}`);
  cat.setAttribute("class", "cat");
  cat.style.margin = options.catMargin;
  cat.stylemwidth = options.catWidth;
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