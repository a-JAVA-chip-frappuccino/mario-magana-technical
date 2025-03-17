import { NextResponse } from "next/server";

export type User = {
    id: number;
    name: string;
    email: string;
    avatar_url: string;
    job_title: string;
}

const user: User = {
    id: 1,
    name: "John Doe",
    email: "johndoe@offsite.com",
    job_title: "100x Vibe Coder",
    avatar_url: "https://accommodation-testimonial-pictures.s3.us-east-1.amazonaws.com/trystan%40joinoffsite.com/trystan%40joinoffsite.com.jpg"
};

export async function GET() {
    await new Promise(resolve => setTimeout(resolve, Math.random() * 1000 + 500));
    return NextResponse.json(user);
}