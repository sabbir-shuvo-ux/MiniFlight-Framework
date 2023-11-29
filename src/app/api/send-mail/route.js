import { NextResponse } from "next/server";

export const POST = async (request) => {
  try {
    const data = await request.json();

    console.log(data);
    return NextResponse.json(
      { message: "no SMTP config found", suceess: true },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { message: err.message, suceess: false },
      { status: 500 }
    );
  }
};
