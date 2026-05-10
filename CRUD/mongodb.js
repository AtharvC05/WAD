const{MongoClient} = require('mongodb');

module.exports = async()=>{
    const client =  await MongoClient.connect("mongodb://localhost:27017/");
    return client.db('student').collection('profile');
}