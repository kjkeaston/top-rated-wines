const models = require("../models");
const Wine = models.Wine;

// Get count of documents(total wines) in the DB
function index(req, res) {
  Wine.countDocuments().exec((err, count) => {
    if (err) {
      res.send(err);
      return;
    }
    console.log("COUNT >>> ", count)
    res.json(count);
  });
}

// Original index function to get all wines from DB
// function index(req, res) {
//   Wine.find({}, function(err, wines) {
//     if (err) res.send(err);
//     else {
//       res.json(wines);
//     }
//   });
// }

function indexByPage(req, res) {
  let pageOptions = {
    page: req.query.page,
    limit: req.query.limit || 15
  } 
    Wine.find()
    .sort( { _id: -1 } )
    .skip(pageOptions.page*pageOptions.limit)
    .limit(pageOptions.limit)
    .exec(function (err, doc) {
        if(err) { res.status(500).json(err); return; };
        res.status(200).json(doc);
    })
}

function show(req, res) {
  Wine.findById(req.params.wine_id, function(err, wine){
    if (err) res.send(err);
    else res.json(wine);
  });  
}

function create(req, res) {
  Wine.create(req.body, function(err, wine){
    if (err) res.send(err);
    else res.json(wine);
  });
}

function update(req, res) {
  Wine.findByIdAndUpdate(req.params.wine_id, 
    {$set: req.body}, function(err, wine){
    if (err) res.send(err);
    else res.json(wine);
  });
}

function destroy(req, res) {
  Wine.findByIdAndRemove(req.params.wine_id, function(err, wine){
    if (err) res.send(err);
    else res.send("wine deleted");
  }); 
}

module.exports.index = index;
module.exports.indexByPage = indexByPage;
module.exports.show = show;
module.exports.create = create;
module.exports.update = update;
module.exports.destroy = destroy;
