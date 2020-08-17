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