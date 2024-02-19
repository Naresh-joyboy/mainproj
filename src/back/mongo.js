const mongoose=require('mongoose')
mongoose.connect("mongodb://localhost:27017/react-login")
.then(()=>{
    console.log('mongodb connected');
})
.catch(()=>{
    console.log('failed');
})

const newSchema = new mongoose.Schema({
    email:{
        type:string,
        required:true
    },
    password:{
        type:string,
        required:true
    }
})

const collection = mongoose.model("collection",newSchema)

module.exports=collection