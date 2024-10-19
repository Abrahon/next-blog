import { ConnectDB } from "@/lib/config/db";
import EmailModel from "@/lib/models/EmailModel";
import { NextResponse } from "next/server";


const loadDB = async()=>{
    await ConnectDB()
}
loadDB();


export async function POST(request){
    const formData = await request.formData();
    // console.log(formData)
    const emailData = {email:`${formData.get('email')}`}
    console.log(emailData)
    await EmailModel.create(emailData);
    return NextResponse.json({success:true, msg:"email subscription"})
}


//data get
export async function GET(request){
    const email = await EmailModel.find({})
    return NextResponse.json({email})

}

// Delete
export async function DELETE(request){
    const id = await request.nextUrl.searchParams.get('id');
    await EmailModel.findByIdAndDelete(id);
    return NextResponse.json({msg:"Email Delete"})

}


