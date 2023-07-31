import { NextResponse } from "next/server";
export async function GET(request,{params:{id}}){
    const request = await fetch("http://localhost:8000/?url=cursos/"+id);
    const response = await request.json(); 
    return NextResponse.json(response);

}