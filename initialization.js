let timeZoneList = [];
let catList = [];
let numCats = -1;
document.body.style.backgroundColor = defaultOptions.backgroundColor;
document.body.style.display = "flex";
document.body.style.cursor = defaultOptions.cursor;

  function catInit(options) {
    options = {...defaultOptions, ...options}
    ++numCats;
    const idPrefix = numCats;
    const { svg, clock, cat } = createCat(options, idPrefix);
    document.body.appendChild(cat);
    return { svg, clock, cat}
  }
  let requestId = null;
