import { ConnectDB } from "@/lib/config/db";
import { NextResponse } from "next/server";
import {writeFile} from 'fs/promises'
import BlogModel from "@/lib/models/BlogModel";
import fs from "fs";


const loadDB = async()=>{
    await ConnectDB()
}
loadDB();


// Gete method api 
export async function GET(request) {
    const blogId = request.nextUrl.searchParams.get("id")
    if(blogId){
        const blog = await BlogModel.findById(blogId)
        return NextResponse.json(blog);
    }
    else{
        const blogs = await BlogModel.find({})
        return NextResponse.json({blogs})
   
   }
}

// delete api

export async function DELETE(request){
    const id = await request.nextUrl.searchParams.get('id');
    const blog = await BlogModel.findById(id);
    fs.unlink(`./public${blog.image}`,()=>{});
    await BlogModel.findByIdAndDelete(id);
    return NextResponse.json({msg:"Blog Delete"})

}


// post method api
export async function POST(request) {
    try {
        const formData = await request.formData();
        const timestamp = Date.now();

        const image = formData.get('image');
        if (!image) {
            throw new Error('No image file found in form data');
        }

        const imageByteData = await image.arrayBuffer();
        const buffer = Buffer.from(imageByteData);

        const imagePath = `./public/${timestamp}_${image.name}`;
        await writeFile(imagePath, buffer);

        const imgUrl = `/${timestamp}_${image.name}`;
        
        const blogData = {
            title: `${formData.get('title')}`,
            description: `${formData.get('description')}`,
            category: `${formData.get('category')}`,
            author: `${formData.get('author')}`,
            image: `${imgUrl}`,
            authorImage: `${formData.get('authorImage')}`,
        };

        await BlogModel.create(blogData);
        console.log('Blog Saved');
        return NextResponse.json({ success: true, msg: 'Blog added' });

    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json({ success: false, msg: error.message });
    }
}
