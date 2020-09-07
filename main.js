
// Using MongoClient Class
const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb://localhost:27017/Covid19-VaccinePoll"


const client = new MongoClient(process.env.ATLAS_URI, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true,
 });


// Establish a Connection
client.connect().then(result => {
  const database = client.db("Covid19-VaccinePoll");
  const collection = database.collection("States")
  console.log(result);
}, error => {
  console.error(error);
}
  );

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
