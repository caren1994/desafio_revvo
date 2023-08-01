import { NextResponse } from "next/server";
export async function GET(request,{params:{id}}){
    const result = await fetch("http://localhost:8000/?url=cursos/"+id);
    const response = await result.json(); 
    return NextResponse.json(response);

}