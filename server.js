const express =  require('express')
const app = express()
app.get("/", (req,res) => res.send("helloworld"))
app.listen(3000, ()=>{
    console.log("My rest api is running on port 3000");
})