import mongoose from 'mongoose'

export const ConnectDB = async()=>{
    await mongoose.connect('mongodb+srv://blogNext:ZSqVK8pjUE40gDZv@cluster0.0xcir2l.mongodb.net/blog-app')
    console.log('DB Connected')
}


