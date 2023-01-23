const express = require('express');

const app = express();


// app.use((req, res, next)=>{
//     console.log('first middleware');
//     next()
// })

// app.use((req, res, next)=>{
//     console.log('second middleware');
// })

app.use('/home', (req, res, next)=>{
    res.send('home')
})

app.use('/', (req, res, next)=>{
    res.send('nothing')
})


app.listen(3000)