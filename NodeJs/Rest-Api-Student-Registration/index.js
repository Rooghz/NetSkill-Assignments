const express = require("express");
const app = express();
require('./connection');
const Student = require('./students');
const port = process.env.PORT || 3000;

app.use(express.json());

//Register a Student
app.post("/reg", (req, res) => {
    console.log(req.body);
    const user = new Student(req.body);

    user.save().then(() => {
        res.status(201).send(user);
    }).catch((e) => {
        res.status(400).send(e);
    })
})


//Port Listener
app.listen(port, () => {
  console.log(`Listening on port no ${port}`);

})
