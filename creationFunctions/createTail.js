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
    // Ensure that tail appears behind the cat's body
    tail.style.zIndex = "-2";
    return tail;
  }