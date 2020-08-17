// Initialize the cat factory
let catFactory = new CatFactory();

// Create whatever cats you'd like, passing in whatever options you'd like
let localCat = catFactory.create();
let sidneyCat = catFactory.create(`Australia/Sydney`, {catColor: 'green'});
let londonCat = catFactory.create('Europe/London', {catColor: 'red'});
let berlinCat = catFactory.create('Europe/Berlin', {catColor: 'rebeccapurple', tailColor: 'green'});

// Cats pushed to an array in order to access them by index
catList.push(localCat);
catList.push(sidneyCat);
catList.push(londonCat);
catList.push(berlinCat);
catList.push(catFactory.create('America/Chicago'))

catList[2].addStyles({leftEyeColor: 'blue', minuteMarkColor: 'grey', headColor: 'fuchsia',});
catList[1].addStyles({leftBackPawColor: "red", secondHandColor: "white", clockFaceColor: "rgb(23, 25, 22, 0.3)"});