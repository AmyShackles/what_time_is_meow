let timeZoneList = [];
let catList = [];
let numCats = -1;
const cats = document.createElement('div');
cats.style.display = "flex";
document.body.style.backgroundColor = defaultOptions.backgroundColor;
document.body.style.cursor = defaultOptions.cursor;
document.body.appendChild(cats);

  function catInit(options) {
    options = {...defaultOptions, ...options}
    ++numCats;
    const idPrefix = numCats;
    const { svg, clock, cat } = createCat(options, idPrefix);
    cats.appendChild(cat);
    return { svg, clock, cat}
  }
  let requestId = null;
