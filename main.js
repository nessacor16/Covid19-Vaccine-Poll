
// Using MongoClient Class
const mongodb = require("mongodb");
const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();





const uri = "mongodb+srv://<titanPlanet>:<Missionpossible16%21>@covid19-vaccinepoll.tcjgy.mongodb.net/<Covid19-VaccinePoll>?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true,  useUnifiedTopology: true });


client.connect(err => {
  const database = client.db("sample_airbnb")
  const collection = database.collection("listingsAndReviews");
  client.close();
  console.log(collection);
});















// (async ()=> {
//   await client.connect();
//   const database = client.db("Covid19-VaccinePoll");
//   const collection = database.collection("states");
//   const result = await collection.insertOne({
//     "name": "Alabama",
//     "Value": "Yes",
//     "Value": "No",
//     "Value": "Maybe"
//   })

// })();
