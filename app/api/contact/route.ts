import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const data = await request.formData();
    const name = data.get("name");
    const company = data.get("company");
    const email = data.get("email");
    const message = data.get("message");

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email and message are required" },
        { status: 400 }
      );
    }

    // TODO: Wire to email delivery (Resend, SendGrid, etc.) or CRM
    // For now, log the submission and return success
    console.log("Contact form submission:", { name, company, email, message });

    // Redirect back with success param
    return NextResponse.redirect(new URL("/?contacted=1", request.url));
  } catch (error) {
    console.error("Contact error:", error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
