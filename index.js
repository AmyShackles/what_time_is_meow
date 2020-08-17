let defaultOptions = {
  pupilColor: 'black',
  leftScleraColor: 'white',
  rightScleraColor: 'white',
  rightPupilColor: 'white',
  leftPupilColor: 'white',
  scleraColor: 'white',
  scleraOutlineWidth: 2,
  scleraOutlineColor: "#000",
  leftFrontPawColor: "yellow",
  leftFrontPawSize: "50px",
  rightFrontPawColor: "yellow",
  rightFrontPawSize: "50px",
  browRidgeWidth: "200px",
  browRidgeHeight: "90px",
  backgroundColor: 'black',
  catMargin: "auto",
  catWidth: '380px',
  leftEarHeight: "70px",
  clockFaceColor: 'rgb(255, 255, 255, 0.3)',
  secondHandPointColor: 'rgba(0, 0, 0, 0)',
  clockOutlineColor: 'black',
  secondHandColor: '#D40000',
  minuteHandColor: 'black',
  hourHandColor: 'black',
  minuteMarksColor: 'black',
  hourMarkColor: 'black',
  leftEarColor: 'yellow',
  rightEarColor: 'yellow',
  headColor: 'yellow',
  catColor: 'yellow',
}
let timeZoneList = [];
let catList = [];
var numCats = -1;


let animation = gsap.timeline({onComplete: animationComplete});
animation
.to(".ears .left-ear", { duration: 3, x: 5, y: 5, skewX: 15, scale: .9, rotation: 25}, "initial")
.to(".ears .right-ear", { duration: 3, x: 5, y: 5, skewX: 15, scale: .9, rotation: 25}, "initial")
.to(".mouth .right-side", { duration: 1, rotation: -20}, "initial")
.to(".mouth .left-side", { duration: 1, rotation: 20}, "initial")
.to(".tail", { duration: 8, rotationY: 180, rotationX: 0, y: 0, x: 220}, "initial")
.to(".ears .left-ear", { duration: 3, x: 0, y: 0, skewY: 25, scale: .9, rotation: -5}, "second")
.to(".ears .right-ear", { duration: 3, x: 0, y: 0, skewY: 35, scale: .9, rotation: -5}, "second")
.to(".mouth .right-side", { duration: 1, rotation: 0}, "second")
.to(".mouth .left-side", { duration: 1, rotation: 0}, "second")
.to(".tail", { duration: 8, rotationY: 0, rotationX: 0, x: 0}, "second")


function animationComplete() {
  animation.restart();
}

function getTimeZone(timeZone) {
  if (timeZone) {
    let options = {
      timeZone,
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    }, toTimeZone = new Intl.DateTimeFormat([], options);
    return new Date(toTimeZone.format(new Date()));
  } else {
    return new Date(Date.now());
  }
}

function updateEye(selector) {
  var element = document.getElementById(selector);
  console.log('element', element, 'selector', selector);
  TweenLite.set(element, {
    transformOrigin: "center"
  });

  var bbox = element.getBBox();
  var centerX = bbox.x + bbox.width / 2;
  var centerY = bbox.y + bbox.height / 2;

  function rotateTo(point) {

    var dx = point.x - centerX;
    var dy = point.y - centerY;

    var angle = Math.atan2(dy, dx);

    TweenLite.to(element, 0.3, {
      rotation: angle + "_rad_short"
    });
  }

  return {
    element: element,
    rotateTo: rotateTo
  };
}
function onFrame() {
  catList.forEach(cat => {
    let { point, leftEye, rightEye, svg, mouse } = cat;
    point = mouse.matrixTransform(svg.getScreenCTM().inverse());
    leftEye = leftEye.rotateTo(point);
    rightEye = rightEye.rotateTo(point);
  })
    requestId = null;
}
window.addEventListener("mousemove", onMouseMove)

function onMouseMove(event) {
  catList.forEach((cat, index) => {
    let { mouse, context, leftEye, rightEye } = cat;
    mouse.x = event.clientX;
    mouse.y = event.clientY;
  })
  
  if(requestId === null) {
    requestId = requestAnimationFrame(onFrame);
  }
}
// function changeCatColor(cat, color) {
//   let leftEar = document.getElementById(`${cat}-left-ear`), rightEar = document.getElementById(`${cat}-right-ear`)
//   leftEar.style.borderBottomColor = color;
//   rightEar.style.borderBottomColor = color;
// }

// function styleRightEye(cat, styles) {
//   styles.forEach(([key, value]) => {
//     switch (key) {
//       case "rightPupilColor":
//       case "rightScleraColor":
//         rightEye.style.fill = value;
//         break;
//     }
//   })
// }

// function createLeftEye(options = defaultOptions) {
//     let leftEye = document.createElementNS("http://www.w3.org/2000/svg", "g")
//   leftEye.setAttribute("id", `${idPrefix}-left-eye`);
//   let outerLeftEye = document.createElementNS("http://www.w3.org/2000/svg", "circle");
//   outerLeftEye.setAttribute("class", "eye-outer");
//   outerLeftEye.setAttribute("cx", '15');
//   outerLeftEye.setAttribute("cy", "30");
//   outerLeftEye.setAttribute("r", "20");
//   outerLeftEye.style.fill = options.scleraColor;
//   outerLeftEye.style.strokeWidth = options.scleraOutlineWidth;
//   outerLeftEye.style.stroke = options.scleraOutlineColor;
//   let innerLeftEye = document.createElementNS("http://www.w3.org/2000/svg", "circle");
//   innerLeftEye.setAttribute("class", "eye-inner");
//   innerLeftEye.setAttribute("cx", '25');
//   innerLeftEye.setAttribute("cy", "30");
//   innerLeftEye.setAttribute("r", "10");
//   innerLeftEye.style.fill = options.pupilColor;
//   leftEye.appendChild(outerLeftEye);
//   leftEye.appendChild(innerLeftEye);
//   return leftEye;
// }

// function createRightEye(options = defaultOptions) {
//   let rightEye = document.createElementNS("http://www.w3.org/2000/svg", "g")
//   rightEye.setAttribute("id", `${idPrefix}-right-eye`);
//   let outerRightEye = document.createElementNS("http://www.w3.org/2000/svg", "circle", { class: "eye-inner"});
//   outerRightEye.setAttribute("class", "eye-outer");
//   outerRightEye.setAttribute("cx", '95');
//   outerRightEye.setAttribute("cy", "30");
//   outerRightEye.setAttribute("r", "20");
//   outerRightEye.style.fill = options.scleraColor;
//   outerRightEye.style.strokeWidth = options.scleraOutlineWidth;
//   outerRightEye.style.stroke = options.scleraOutlineColor;
//   let innerRightEye = document.createElementNS("http://www.w3.org/2000/svg", "circle");
//   innerRightEye.setAttribute("class", "eye-inner");
//   innerRightEye.setAttribute("cx", '105');
//   innerRightEye.setAttribute("cy", "30");
//   innerRightEye.setAttribute("r", "10");
//   innerRightEye.style.fill = options.pupilColor;
//   rightEye.appendChild(outerRightEye);
//   rightEye.appendChild(innerRightEye);
//   return rightEye;
// }

function createClock(ctx, now, options = defaultOptions) {
  ctx.save();
  ctx.clearRect(0, 0, 300, 300);
  ctx.translate(140, 75);
  ctx.scale(.8, .4);
  ctx.rotate(-Math.PI / 2);
  ctx.lineWidth = 8;
  ctx.lineCap = 'round';
  // Hour marks
  ctx.save();
  for (var i = 0; i < 12; i++) {
    ctx.beginPath();
    ctx.rotate(Math.PI / 6);
    ctx.moveTo(100, 0);
    ctx.lineTo(120, 0);
    ctx.strokeStyle = options.hourMarkColor;
    ctx.stroke();
  }
  ctx.restore();

  // Minute marks
  ctx.save();
  ctx.lineWidth = 5;
  for (i = 0; i < 60; i++) {
    if (i % 5 != 0) {
      ctx.beginPath();
      ctx.moveTo(117, 0);
      ctx.lineTo(120, 0);
      ctx.strokeStyle = options.minuteMarkColor;
      ctx.stroke();
    }
    ctx.rotate(Math.PI / 30);
  }
  ctx.restore();

  var sec = now.getSeconds();
  var min = now.getMinutes();
  var hr = now.getHours();
  hr = hr >= 12 ? hr - 12 : hr;

  // write Hours
  ctx.save();
  ctx.rotate(hr * (Math.PI / 6) + (Math.PI / 360) * min + (Math.PI / 21600) * sec);
  ctx.lineWidth = 14;
  ctx.beginPath();
  ctx.moveTo(-20, 0);
  ctx.lineTo(80, 0);
  ctx.strokeStyle = options.hourHandColor;
  ctx.stroke();
  ctx.restore();

  // write Minutes
  ctx.save();
  ctx.rotate((Math.PI / 30) * min + (Math.PI / 1800) * sec);
  ctx.lineWidth = 10;
  ctx.beginPath();
  ctx.moveTo(-28, 0);
  ctx.lineTo(112, 0);
  ctx.strokeStyle = options.minuteHandColor;
  ctx.stroke();
  ctx.restore();

  // Write seconds
  ctx.save();
  ctx.rotate(sec * Math.PI / 30);
  ctx.strokeStyle = options.secondHandColor;
  ctx.fillStyle = options.secondHandColor;
  ctx.lineWidth = 6;
  ctx.beginPath();
  ctx.moveTo(-30, 0);
  ctx.lineTo(83, 0);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(0, 0, 10, 0, Math.PI * 2, true);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(95, 0, 10, 0, Math.PI * 2, true);
  ctx.stroke();
  ctx.fillStyle = options.secondHandPointColor;
  ctx.arc(0, 0, 3, 0, Math.PI * 2, true);
  ctx.fill();
  ctx.restore();

  ctx.beginPath();
  ctx.lineWidth = 14;
  ctx.strokeStyle = options.clockOutlineColor;

  ctx.arc(0, 0, 142, 0, Math.PI * 2, true);
  ctx.fillStyle = options.clockFaceColor;
  ctx.fill();
  ctx.stroke();

  ctx.restore();

}

function catsInit(options = defaultOptions) {
  let cats = document.createElement('div');
  cats.setAttribute('id', 'cats');
  cats.setAttribute('class', 'cats');
  cats.style.height = "100vh";
  cats.style.width = "100vw";
  cats.style.display = "flex";

  let svg = document.createElementNS("http://www.w3.org/2000/svg", 'svg');
  svg.setAttribute("id", "svg");
  svg.setAttribute("viewBox", "0 0 1000 1000");
  cats.appendChild(svg);
  document.body.appendChild(cats);
  document.body.style.backgroundColor = options.backgroundColor
}

function catInit(options) {
  options = {...defaultOptions, ...options}
  ++numCats;
  const idPrefix = numCats;

  let newCat = document.createElement("div");
  newCat.setAttribute("id", `cat${idPrefix}`);
  newCat.setAttribute("class", "cat");
  newCat.style.margin = options.catMargin;
  newCat.stylemwidth = options.catWidth;
  let ears = document.createElement("div");
  ears.setAttribute("class", "ears");
  let leftEar = document.createElement("div");
  leftEar.setAttribute("id", `cat${idPrefix}-left-ear`);
  leftEar.setAttribute("class", "left-ear");
  leftEar.style.borderBottomColor = options.catColor;
  leftEar.style.borderBottomWidth = options.leftEarHeight;
  leftEar.style.borderBottomStyle = "solid";
  let rightEar = document.createElement("div");
  rightEar.setAttribute("id", `cat${idPrefix}-right-ear`);
  rightEar.setAttribute("class", "right-ear");
  rightEar.style.borderBottomColor = options.catColor;
  rightEar.style.borderBottomWidth = options.leftEarHeight;
  rightEar.style.borderBottomStyle = "solid";
  ears.appendChild(leftEar);
  ears.appendChild(rightEar);
  newCat.appendChild(ears);

  // Head
  let head = document.createElement('div');
  head.setAttribute("class", "head");
  head.style.backgroundColor = options.catColor;

  // Eyes
  let eyes = document.createElement('div');
  eyes.setAttribute("class", "eyes");
  eyes.style.height = options.browRidgeHeight;
  eyes.style.width = options.browRidgeWidth;
  let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute("viewBox", "0 0 120 120");

  // Left eye
  let leftEye = document.createElementNS("http://www.w3.org/2000/svg", "g");
  leftEye.setAttribute("id", `cat${idPrefix}-left-eye`);
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
  svg.appendChild(leftEye);

  // Right eye
  let rightEye = document.createElementNS("http://www.w3.org/2000/svg", "g");
  rightEye.setAttribute("id", `cat${idPrefix}-right-eye`);
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
  svg.appendChild(rightEye);
  eyes.appendChild(svg);
  head.appendChild(eyes);

  // Nose
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
  head.appendChild(nose);

  // Mouth
  let mouth = document.createElement("div")
  mouth.setAttribute("class", "mouth");
  let leftSide = document.createElement("div");
  leftSide.setAttribute("class", "left-side");
  let rightSide = document.createElement("div");
  rightSide.setAttribute("class", "right-side");
  mouth.appendChild(leftSide);
  mouth.appendChild(rightSide);
  head.appendChild(mouth);

  newCat.appendChild(head);

  // Body
  let body = document.createElement("div");
  body.setAttribute("class", "body");
  let leftArm = document.createElement("div");
  leftArm.setAttribute("class", "left-arm");
  leftArm.style.backgroundColor = options.catColor;
  leftArm.style.height = options.leftFrontPawSize;
  leftArm.style.width = options.leftFrontPawSize;
  let torso = document.createElement("div");
  torso.setAttribute("class", "torso");
  torso.style.backgroundColor = options.catColor;
  let clock = document.createElement("canvas");
  clock.setAttribute("class", "clock");
  let rightArm = document.createElement("div");
  rightArm.setAttribute("class", "right-arm");
  rightArm.style.backgroundColor = options.catColor;
  rightArm.style.height = options.rightFrontPawSize;
  rightArm.style.width = options.rightFrontPawSize;
  body.appendChild(leftArm);
  torso.appendChild(clock);
  body.appendChild(torso);
  body.appendChild(rightArm);
  newCat.appendChild(body);

  // Legs
  let legs = document.createElement("div");
  legs.setAttribute("class", "legs");
  let leftLeg = document.createElement("div");
  leftLeg.setAttribute("class", "left-leg");
  leftLeg.style.backgroundColor = options.catColor;
  let rightLeg = document.createElement("div");
  rightLeg.setAttribute("class", "right-leg");
  rightLeg.style.backgroundColor = options.catColor;
  legs.appendChild(leftLeg);
  legs.appendChild(rightLeg);
  newCat.appendChild(legs);

  // Tail
  let tail = document.createElement("div");
  tail.setAttribute("class", "tail");
  tail.style.borderColor = options.catColor;
  newCat.appendChild(tail);

  let cats = document.getElementById("cats");
  cats.appendChild(newCat);
  return { svg, clock, cat: newCat }
}
let requestId = null;

class Cat {
  constructor(svg, clock, context, leftEye, rightEye, mouse, point, cat) {
    this.svg = svg;
    this.clock = clock;
    this.context = context;
    this.leftEye = leftEye;
    this.rightEye = rightEye;
    this.mouse = mouse;
    this.point = point;
    this.cat = cat;
  }
  styleEye(style, side) {
    let [attribute, value] = style;
    let innerEye = this[`${side}Eye`].element.querySelector('.eye-inner');
    let outerEye = this[`${side}Eye`].element.querySelector('.eye-outer');
    let partInference = /inner/gi.test(attribute) ? innerEye : outerEye;
    switch (attribute) {
      case `${side}PupilSize`:
        innerEye.setAttribute("r", value);
        break;
      case `${side}PupilColor`:
      case `${side}EyeColor`:
        innerEye.style.fill = value;
        break;
      case `${side}ScleraColor`:
        outerEye.style.fill = value;
        break;
      case `${side}ScleraOutlineWidth`:
        outerEye.style.strokeWidth = value;
        break;
      case `${side}ScleraOutlineColor`:
        outerEye.style.stroke = value;
        break;
      default:
        attribute = convertAttributeToStyleProp(attribute);
        partInference.style[attribute] = value;
        break;
    }
    return this;
  }
  styleLimb(style, side, limbType) {
    let [attribute, value] = style;
    let limb = this.cat.querySelector(`.${side}-${limbType}`);
    let limbDescription = /arm/.test(limbType) ? 'FrontPaw' : 'BackPaw';
    // If a number is passed in for size, assume measurement is in px
    if (typeof value === 'number') {
      value += 'px'
    }
    switch (attribute) {
      case `${side}${limbDescription}Size`:
        limb.style.width = value;
        limb.style.height = value;
        break;
      case `${side}${limbDescription}Color`:
        limb.style.backgroundColor = value;
        break;
      default:
        attribute = convertAttributeToStyleProp(attribute);
        limb.style[attribute] = value;
        break;
    }
    return this;
  }
  styleEyes([attribute, value]) {
    const eyes = this.cat.querySelector('.eyes');
    attribute = attribute.replace(/(?:browridge)|(?:eyes)/gi, '');
    attribute = attribute[0].toLowerCase() + attribute.slice(1);
    eyes.style[attribute] = value;
    return this;
  }
  addStyles(styles) {
    console.log('styles', styles)
    Object.entries(styles).forEach(([key, value]) => {
      let side = /right/.test(key) ? 'right' : 'left';
      if (/sclera|pupil|eye/gi.test(key)) {
        this.styleEye([key, value], side);
      }
      if (/FrontPaw/gi.test(key)) {
        this.styleLimb([key, value], side, 'arm');
      } else if (/BackPaw/gi.test(key)) {
        this.styleLimb([key, value], side, 'leg');
      } else if (/(?:browridge)|(?:eyes)/gi.test(key)) {
        this.styleEyes([key, value])
      }
    });
    return this;
  }
}



function CatFactory() {
  this.create = function (timeZone, options) {
    const { svg, clock, cat } = catInit(options);
    let context = clock.getContext("2d");
    timeZoneList.push(timeZone);
    let timeZoneLabel = document.createElement("P");
    timeZoneLabel.style.color = 'white';
    timeZoneLabel.style.textAlign = "center";
    timeZoneLabel.style.fontSize = '20px';
    if (timeZone) {
      timeZoneLabel.innerText = timeZone;
    } else {
      timeZoneLabel.innerText = 'Local Time';
    }
    cat.prepend(timeZoneLabel);
    console.log('cat Id', cat.id);
    let time = getTimeZone(timeZone);
    createClock(context, time, options);
    let mouse = svg.createSVGPoint();
    let leftEye = updateEye(`${cat.id}-left-eye`);
    let rightEye = updateEye(`${cat.id}-right-eye`);
    let point = mouse.matrixTransform(svg.getScreenCTM().inverse());
    return new Cat(svg, clock, context, leftEye, rightEye, mouse, point, cat);
  }
}

function convertAttributeToStyleProp(style) {
  if (/FrontPaw/gi.test(style)) {
    style = style.replace(/((?:left)|(?:right))FrontPaw/gi, '');
    return style[0].toLowerCase() + style.slice(1);
  } else if (/BackPaw/gi.test(style)) {
    style = style.replace(/((?:left)|(?:right))BackPaw/gi, '');
    return style[0].toLowerCase() + style.slice(1);
  } else if (/arm/gi.test(style)) {
    style = style.replace(/((?:left)|(?:right))arm/gi, '');
    return style[0].toLowerCase() + style.slice(1);
  } else if (/leg/gi.test(style)) {
    style = style.replace(/((?:left)|(?:right))leg/gi, '');
    return style[0].toLowerCase() + style.slice(1);
  } else if (/(?:eyes)|(?:browridge)/gi.test(style)) {
    style = style.replace(/(?:eyes)|(?:browridge)/gi, '');
    return style[0].toLowerCase() + style.slice(1);
  } else if (/eye/gi.test(style)) {
    style = style.replace(/((?:left)|(?:right))(?:inner)?(?:outer)?eye/gi, '');
    return style[0].toLowerCase() + style.slice(1);
  }
}

function clock() {
  let clocks = document.querySelectorAll('.clock');
  clocks.forEach((clock, index) => {
    let context = clock.getContext('2d');
    let time = getTimeZone(timeZoneList[index]);
    createClock(context, time);
  });
  window.requestAnimationFrame(clock);
}

window.requestAnimationFrame(clock);
catsInit();
let catFactory = new CatFactory();
catList.push(catFactory.create())
catList.push(catFactory.create('Australia/Sydney', {catColor: 'green'}));
catList.push(catFactory.create('Europe/London', {catColor: 'red'}))
catList.push(catFactory.create('Europe/Berlin', {catColor: 'rebeccapurple'}))