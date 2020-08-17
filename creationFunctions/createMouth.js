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
    leftLip.setAttribute('class', 'left-side');
    let rightLip = createLip(options, 'right');
    rightLip.setAttribute('class', 'right-side');
    mouth.appendChild(leftLip);
    mouth.appendChild(rightLip);
    return mouth;
  }