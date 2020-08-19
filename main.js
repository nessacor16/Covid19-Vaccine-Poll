
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://localhost:27017/Covid19-VaccinePoll"


const client = new MongoClient(uri, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true,
 });


// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

client.connect().then(result => {
  const database = client.db("Covid19-VaccinePoll");
  console.log(result);
}, error => {
  console.error(error);
}
  );

