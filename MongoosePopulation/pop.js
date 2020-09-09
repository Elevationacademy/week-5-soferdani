const mongoose = require('mongoose')
const Schema = mongoose.Schema

mongoose.connect('mongodb://localhost/galaxy', { useNewUrlParser: true, useUnifiedTopology: true })



const PlanetSchema = new Schema ({
  name: String,
  system: {type: Schema.Types.ObjectId, ref: 'SolarSystem'},
  visitors: [{type: Schema.Types.ObjectId, ref: 'Visitor'}]
})

const VisitorSchema = new Schema ({
  name: String,
  homePlanet: {type: Schema.Types.ObjectId, ref: 'Planet'},
  visitedPlanets: [{type: Schema.Types.ObjectId, ref: 'Planet'}]
})


const SolarSystemSchema = new Schema ({
  planets:[{type: Schema.Types.ObjectId, ref: 'Planet'}],
  SolarSystemName: String
})


const Planet = mongoose.model('Planet',PlanetSchema)
const Visitor = mongoose.model('Visitor',VisitorSchema)
const SolarSystem = mongoose.model('SolarSystem',SolarSystemSchema)

//**good until here */

// Visitor -> visitedPlanets(planet) -> visitors - > name
//** */

Planet.findOne({}).populate("visitors").exec(function(err,visi){
  // visi.visitors
  
  console.log(visi);
})

function pause (milliseconds) {
  var date = new Date();
  while ((new Date()) - date <= milliseconds) { 
    /* Do nothing */ 
  }
};



let s1 = new SolarSystem ({
  planets: [],
  SolarSystemName:"Kuiper belt"
})

let p1 = new Planet ({
  name:"erth",
  system: s1,
  visitors: []
})

let p2 = new Planet ({
  name:"Pluto",
  system: s1,
  visitors: []
})

let v1 = new Visitor ({
  name: "Dani",
  homePlanet: p1,
  visitedPlanets: []
}) 

let v2 = new Visitor ({
  name: "Amiti",
  homePlanet: p1,
  visitedPlanets: []
}) 


// s1.planets.push(p1,p2)
// v1.visitedPlanets.push(p1,p2)
// v2.visitedPlanets.push(p1,p2)
// p1.visitors.push(v1,v2)
// p2.visitors.push(v1,v2)




// let toSave = [s1,v1,v2,p2,p1]
// toSave.forEach(s=>{s.save()})
// console.log("finish");

//**Qeris */

//exe1 



// console.log(toSave);

// const bookSchema = new Schema({ 
//     title: String,
//     author: String,
//     reviews: [{type: Schema.Types.ObjectId, ref: 'Review'}] //reference to an array of Review documents
//   })
  
//   const reviewSchema = new Schema({ 
//     book: {type: Schema.Types.ObjectId, ref: 'Book'}, //reference to a Book document
//     reviewText: String,
//     critic: {type: Schema.Types.ObjectId, ref: 'Critic'} //reference to a Critic document
//   })
  
//   const criticSchema = new Schema({ 
//     name: String,
//     reviews: [{type: Schema.Types.ObjectId, ref: 'Review'}], //reference to an array of Review documents
//   })


//   const Review = mongoose.model('Review',reviewSchema)
//   const Critic = mongoose.model('Critic',criticSchema)
//   const Book = mongoose.model('Book',bookSchema)
  

//   let b1 = new Book({
//     title: "Name of the Wind",
//     author: "Patrick Rothfuss",
//     reviews: []
// })

// let c1 = new Critic({
//     name: "William Jeffery",
//     reviews: []
// })

// let r1 = new Review({
//     book: b1,
//     critic: c1,
//     reviewText: "Excellent Book"
// })

// b1.reviews.push(r1)
// c1.reviews.push(r1)

// r1.save()
// c1.save()
// b1.save()

// Review.find({}, function(err, books){
//     console.log(books)
// })
// let dataBuety 

// Book.findOne({})
//     .populate("reviews")
//     .exec(function (err, book) {
//         dataBuety = book.reviews
//         console.log(book.reviews)
//     })


//     console.log(`${dataBuety} this isi asd `);
//**this is ok now */
// Book.findOne({})
//     .populate('reviews')
//     .exec(function (err, book) {
//         console.log(book.reviews[0])
//     })

// Review.find({})
//     .populate('book critic')
//     .exec(function (err, reviews) {
//         console.log(reviews)
//     })



// Critic.findOne({}, function(err,critic){
//     critic.populate('reviews', function() {
//         console.log(critic.reviews[0])
//       })
// })
