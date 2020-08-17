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