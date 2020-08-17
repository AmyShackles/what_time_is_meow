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