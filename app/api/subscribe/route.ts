import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const data = await request.formData();
    const email = data.get("email");

    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // TODO: Wire to Mailchimp or other email provider
    // For now, log the submission and return success
    console.log("Email subscription request:", email);

    // Redirect back to the homepage with a success param
    return NextResponse.redirect(new URL("/?subscribed=1", request.url));
  } catch (error) {
    console.error("Subscribe error:", error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
