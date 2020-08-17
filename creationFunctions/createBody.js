function createBody(options, idPrefix) {
    options = {...defaultOptions, ...options};
    let body = document.createElement("div");
    body.setAttribute("class", "body");
    body.setAttribute("id", `cat${idPrefix}-body`)
    // Ensure that body does not cover up cat face
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