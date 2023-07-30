import { NextResponse } from "next/server";
export async function GET(){
    return NextResponse.json({ message: "Hello" });

}

export async function POST(request){
    const body = await request.body.json();
    return NextResponse.json({ message: `Hello ${body.name}` });
}