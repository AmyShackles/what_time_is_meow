let timeZoneList = [];
let catList = [];
let numCats = -1;

function catsInit() {
    options = defaultOptions;
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
    document.body.style.backgroundColor = options.backgroundColor;
    document.body.style.cursor = options.cursor;
  }

  function catInit(options) {
    options = {...defaultOptions, ...options}
    ++numCats;
    const idPrefix = numCats;
    const { svg, clock, cat } = createCat(options, idPrefix);
    let cats = document.getElementById("cats");
    cats.appendChild(cat);
    return { svg, clock, cat}
  }
  let requestId = null;
// catsInit creates the first div that all others attach to
catsInit();