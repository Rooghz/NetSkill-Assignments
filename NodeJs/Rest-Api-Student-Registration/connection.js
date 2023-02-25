const mongoose = require('mongoose');

mongoose.set('strictQuery', false);


mongoose.connect('mongodb://127.0.0.1:27017/student-reg').then(()=>{
    console.log(`successfully connected`);
    }).catch((e)=>{
    console.log(`not connected`);
    });


