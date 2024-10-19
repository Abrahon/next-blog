import mongoose from "mongoose";

const Schema = new mongoose.Schema({
  
    email:{
        type:String,
        required:true 
    },
    date:{
        type:Date,
        default:Date.now()
    }
})

const EmailModel = mongoose.models.email || mongoose.model('email',Schema);
// const BlogModel = mongoose.models.blog || mongoose.model('blog',Schema);
export default EmailModel;