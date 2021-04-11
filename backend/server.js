const express = require('express')
const app = express

app.get('/',(req,res)=>{
    res.send('check')
})

app.listen(5000,(err)=>{
    if (err) throw new Error('SERVER NOT CONNECTED')
    console.log('server connected')
})