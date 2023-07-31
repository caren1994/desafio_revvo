import { NextResponse } from "next/server";
export async function GET(){
    const request = await fetch("http://localhost:8000/?url=cursos");
    const response = await request.json(); 
    return NextResponse.json(response);

}

export async function POST(request){
    const body = await request.json();
    console.log(body);
    return NextResponse.json({ message: `Hello ${body.name}` });
}