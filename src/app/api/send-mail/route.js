import formValidation from "@/utils/formValidation";
import { mailOptions, transporter } from "@/utils/mail";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  try {
    const { name, email, phone, message } = await request.json();

    const res = formValidation(name, email, message, phone);

    await transporter.sendMail({
      ...mailOptions,
      html: `<h1>Mail from website</h1><h3>${name}</h3><h3><a href="mailto:${email}">${email}</a></h3><h3><a href="tel:${phone}">${phone}</a></h3><h3>${message}</h3>`,
    });

    return NextResponse.json(
      { message: "Mail suceessfully sent", success: true },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { message: err.message, success: false },
      { status: 500 }
    );
  }
};
