import { NextResponse } from "next/server";

export async function GET(){
    const request = await fetch("http://localhost:8000/?url=cursos");
    const response = await request.json(); 
    return NextResponse.json(response);

};

export async function POST(request){
    const {data} = await request.json();
    const array= data.join("&");
    const result = await fetch('http://localhost:8000/?url=cursos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },body:array
      });
    const response = await result.json(); 
    return NextResponse.json(response);

};

export async function PUT(request){
    const {data} = await request.json();
    const array= data.join("&");
    const result = await fetch('http://localhost:8000/?url=cursos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },body:array
      });
    const response = await result.json(); 
    return NextResponse.json(response);

};

export async function DELETE(request){
    const {data} = await request.json();
    const array= data.join("&");
    const result = await fetch('http://localhost:8000/?url=cursos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },body:array
      });
    const response = await result.json(); 
    return NextResponse.json(response);

};