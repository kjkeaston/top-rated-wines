const db = require("../models");
const csv = require("csv-parser");
const fs = require("fs");
let allWines = [];

fs.createReadStream("./wine_data.csv")
  .pipe(csv({delimiter: ','}))
  .on('data', function(csvrow) {
  //do something with csvrow
    allWines.push(csvrow);
  })
  .on('end',function() {
  // do something wiht allWines
    console.log(allWines.length);
    db.Wine.remove({}, function(err, wines){
      // code in here runs after all wines are removed
      db.Wine.create(allWines, function(err, wines){
        // code in here runs after all wines are created
        if (err) { return console.log("ERROR", err); }
        console.log("created", wines.length, "wines");
        process.exit();
      });
    });
  });

// // fs.createReadStream("./wine_data.csv")
// fs.createReadStream("./wine_list_big.csv")
//   .pipe(csv())
//   .on("data", (data) => {
//     try {
//       allWines.push(data);
//     }
//     catch(err) {
//       console.log(`There was an ERROR >>> ${err}`);
//     }
//   })
//   .on("end", () => {
//    console.log(`Created ${allWines.length} from CSV file`);
//   });


// let testWith3Wines = [
//   {
//   description: "A taste of hazelnut expands on the palate to meet creamy Tahitian vanilla. Approachably round, this crowd-pleasing wine finishes in measured, integrated oak.",
//   points: "90",
//   price: "22",
//   state: "California",
//   region: "Napa Valley",
//   variety: "Chardonnay"
//   },
//   {
//     description: "While exuberantly fruity, almost tropical on the nose, there's a crystalline edge to this dry Riesling that renders it especially refreshing.",
//     points: "92",
//     price: "18",
//     state: "New York",
//     region: "Finger Lakes",
//     variety: "Riesling"
//   },
//   {
//   description: "A taste of hazelnut expands on the palate to meet creamy Tahitian vanilla. Approachably round, this crowd-pleasing wine finishes in measured, integrated oak.",
//   points: "90",
//   price: "22",
//   state: "California",
//   region: "Napa Valley",
//   variety: "Chardonnay"
//   }
// ]


// db.Wine.remove({}, function(err, wines){
//   // code in here runs after all wines are removed
//   db.Wine.create(allWines, function(err, wines){
//     // code in here runs after all wines are created
//     if (err) { return console.log("ERROR", err); }
//     // console.log("All wines:", wines);
//     console.log("created", wines.length, "wines");
//     process.exit();
//   });
// });
