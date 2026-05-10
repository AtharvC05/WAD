const express = require ('express');
const dbConnect = require ('./mongodb');
const app = express();
app.use(express.json())

app.get('/',async(req,res) => {
    let result = await dbConnect();
    result =  await result.find().toArray();
    res.send(result);
})

app.post('/',async(req,res)=>{
    let result = await dbConnect();
    result = await result.insertOne(req.body);
    res.send('Data successfully inserted');
})

app.put('/:Name',async(req,res)=>{
    let result = await dbConnect();
    result =  await result.updateOne({Name:req.params.Name},{$set:req.body});
    res.send('Data Succesfully updated');
})

app.delete('/:Name',async(req,res)=>{
    let result = await dbConnect();
    result =  await result.deleteOne({Name:req.params.Name});
    res.send("Data successfully deleted");
})

const port = 3000;
app.listen(port,()=>{
    console.log(`app listening on port http://localhost:${port}`)
})