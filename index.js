const express = require('express')
const app= express()
const cors = require('cors')
const fs= require('fs')
const path = require('path')


const port = 5000

app.use(cors())


app.get('/data',(req, res)=>{
    fs.readFile(path.join(__dirname,'data.json'),'utf8',(err,data)=>{
        if(err){
            return res.status(400).send('error reading data file')
        }
        else{
             const jsonData=JSON.parse(data)
            res.send(jsonData)
        }
    })
})

app.listen(port,()=>{
    console.log(`server is running : localhost:${port}`)
})