const dbConnect = require('./mongodb');
const express = require('express');
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// GET API
app.get('/', async (req, res) => {
    let result = await dbConnect();
    result = await result.find().toArray();
    res.send(result);
});

// POST API
app.post('/:name', async (req, res) => {
    let result = await dbConnect();
    result = await result.insertOne(req.body);
    res.send("Data Inserted Successfully");
});

// Start server on port 3000
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

//put api
app.put('/:name', async (req, res) =>{

        let result=await dbConnect();
        result=await result.updateOne({name:req.params.name},{$set:req.body});
        res.send("Data is Updated Successfully")

})

app.delete('/:name',async(req,res)=>{

    let result=await dbConnect();
    result=await result.deleteOne({name:req.params.name});
    res.send("Data Deleted Successfully")

})


//node index.js
// {
//     "name":"vabz",
//     "email":"fgh@gmail.com",
//     "city":"satara"
// }