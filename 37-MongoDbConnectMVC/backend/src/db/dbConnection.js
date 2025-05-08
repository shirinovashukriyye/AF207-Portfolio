import mongoose from "mongoose";

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("connect mongoose");
});

console.log(process.env.MONGO_URI);
// .catch(()=>{
//      console.log("not connect mongodb")
//  })
