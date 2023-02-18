const express = require('express')
const app = express();
const {area} = require('./circle_area')
const {prime} = require('./prime_number')

const PORT = 5000;


//Area of Circle
//It can be accessed via - http://localhost:5000/circle_area?r=1

app.get('/circle_area',(req,res) =>{
    let r = req.query.r;
    let s = area(r);

    res.send({"Sum is": s});
});

//Output - 
// {
//     "Sum is": 12.566370614359172
// }



//Prime Number
//It can be accessed via - http://localhost:5000/prime_number?p=7

app.get('/prime_number', (req,res) =>{
    let p = req.query.p;
    let r = prime(p);

    res.send({"Is it Prime?": r});
})

//Output
// {
//     "Is it Prime?": "Yes"
// }



//PORT Listener

app.listen(PORT,() =>{
    console.log(`server is listening on port ${PORT}`)
})