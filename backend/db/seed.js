let db = require('../models');
const csv = require('csv-parser')
const fs = require('fs')
// let allWines = [];

// fs.createReadStream('./wine_data.csv')
//   .pipe(csv())
//   .on('data', (data) => {
//     try {
//       allWines.push(data);
//     }
//     catch(err) {
//       console.log(`There was an ERROR >>> ${err}`)
//     }
//   })
//   .on('end', () => {
//   //some final operation
//    console.log(allWines)
//   });

let allWines = [
  {
  description: "A taste of hazelnut expands on the palate to meet creamy Tahitian vanilla. Approachably round, this crowd-pleasing wine finishes in measured, integrated oak.",
  points: "90",
  price: "22",
  state: "California",
  region: "Napa Valley",
  variety: "Chardonnay"
  },
  {
    description: "While exuberantly fruity, almost tropical on the nose, there's a crystalline edge to this dry Riesling that renders it especially refreshing.",
    points: "92",
    price: "18",
    state: "New York",
    region: "Finger Lakes",
    variety: "Riesling"
  },
  {
  description: "A taste of hazelnut expands on the palate to meet creamy Tahitian vanilla. Approachably round, this crowd-pleasing wine finishes in measured, integrated oak.",
  points: "90",
  price: "22",
  state: "California",
  region: "Napa Valley",
  variety: "Chardonnay"
  },
  {
    description: "Fresh cranberry and raspberry fruit is framed by herb-tinged tannins. The immaculate craftsmanship and clean direct flavors are light years beyond budget Pinot Noir from most other regions. This is your perfect salmon wine.",
    points: "91",
    price: "17",
    state: "Oregon",
    region: "Willamette Valley",
    variety: "Pinot Noir"
  },
  {
  description: "A taste of hazelnut expands on the palate to meet creamy Tahitian vanilla. Approachably round, this crowd-pleasing wine finishes in measured, integrated oak.",
  points: "90",
  price: "22",
  state: "California",
  region: "Napa Valley",
  variety: "Chardonnay"
  },
  {
    description: "While exuberantly fruity, almost tropical on the nose, there's a crystalline edge to this dry Riesling that renders it especially refreshing.",
    points: "92",
    price: "18",
    state: "New York",
    region: "Finger Lakes",
    variety: "Riesling"
  },
  {
    description: "Fresh cranberry and raspberry fruit is framed by herb-tinged tannins. The immaculate craftsmanship and clean direct flavors are light years beyond budget Pinot Noir from most other regions. This is your perfect salmon wine.",
    points: "91",
    price: "17",
    state: "Oregon",
    region: "Willamette Valley",
    variety: "Pinot Noir"
  },
  {
  description: "A taste of hazelnut expands on the palate to meet creamy Tahitian vanilla. Approachably round, this crowd-pleasing wine finishes in measured, integrated oak.",
  points: "90",
  price: "22",
  state: "California",
  region: "Napa Valley",
  variety: "Chardonnay"
  },
  {
  description: "A taste of hazelnut expands on the palate to meet creamy Tahitian vanilla. Approachably round, this crowd-pleasing wine finishes in measured, integrated oak.",
  points: "90",
  price: "22",
  state: "California",
  region: "Napa Valley",
  variety: "Chardonnay"
  },
  {
    description: "While exuberantly fruity, almost tropical on the nose, there's a crystalline edge to this dry Riesling that renders it especially refreshing.",
    points: "92",
    price: "18",
    state: "New York",
    region: "Finger Lakes",
    variety: "Riesling"
  },
  {
    description: "Fresh cranberry and raspberry fruit is framed by herb-tinged tannins. The immaculate craftsmanship and clean direct flavors are light years beyond budget Pinot Noir from most other regions. This is your perfect salmon wine.",
    points: "91",
    price: "17",
    state: "Oregon",
    region: "Willamette Valley",
    variety: "Pinot Noir"
  },
  {
  description: "A taste of hazelnut expands on the palate to meet creamy Tahitian vanilla. Approachably round, this crowd-pleasing wine finishes in measured, integrated oak.",
  points: "90",
  price: "22",
  state: "California",
  region: "Napa Valley",
  variety: "Chardonnay"
  },
  {
    description: "While exuberantly fruity, almost tropical on the nose, there's a crystalline edge to this dry Riesling that renders it especially refreshing.",
    points: "92",
    price: "18",
    state: "New York",
    region: "Finger Lakes",
    variety: "Riesling"
  },
  {
    description: "Fresh cranberry and raspberry fruit is framed by herb-tinged tannins. The immaculate craftsmanship and clean direct flavors are light years beyond budget Pinot Noir from most other regions. This is your perfect salmon wine.",
    points: "91",
    price: "17",
    state: "Oregon",
    region: "Willamette Valley",
    variety: "Pinot Noir"
  },
  {
    description: "While exuberantly fruity, almost tropical on the nose, there's a crystalline edge to this dry Riesling that renders it especially refreshing.",
    points: "92",
    price: "18",
    state: "New York",
    region: "Finger Lakes",
    variety: "Riesling"
  }
];

db.Wine.remove({}, function(err, wines){
  // code in here runs after all wines are removed
  db.Wine.create(allWines, function(err, wines){
    // code in here runs after all wines are created
    if (err) { return console.log('ERROR', err); }
    console.log("All wines:", wines);
    console.log("created", wines.length, "wines");
    process.exit();
  });
});