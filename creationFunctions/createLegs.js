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