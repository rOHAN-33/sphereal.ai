// import { Webhook } from "svix";
// // import connectDB from "../../config/db";
// import User from "../../models/User";
// import { headers } from "next/headers";
// import { NextResponse } from "next/server";
// import connectDB from "../../../config/db.js"
// export async function POST(req) {
//   try {
//     const wh = new Webhook(process.env.CLERK_WEBHOOK_SECRET);
//     const headerPayload = await headers();

//     const svixHeaders = {
//       "svix-id": headerPayload.get("svix-id"),
//       "svix-timestamp": headerPayload.get("svix-timestamp"),
//       "svix-signature": headerPayload.get("svix-signature"),
//     };

//     // Parse body
//     const payload = await req.json();
//     const body = JSON.stringify(payload);

//     // Verify webhook
//     const evt = wh.verify(body, svixHeaders);
//     const { id, email_addresses, first_name, last_name, image_url } = evt.data;

//     const userData = {
//       _id: id,
//       email: email_addresses[0].email_address,
//       name: `${first_name || ""} ${last_name || ""}`.trim(),
//       image: image_url,
//     };

//     await connectDB();

//     switch (evt.type) {
//       case "user.created":
//         await User.create(userData);
//         break;
//       case "user.updated":
//         await User.findByIdAndUpdate(id, userData, { new: true });
//         break;
//       case "user.deleted":
//         await User.findByIdAndDelete(id);
//         break;
//       default:
//         break;
//     }

//     return NextResponse.json({ message: "Event received" }, { status: 200 });
//   } catch (err) {
//     console.error("Webhook error:", err);
//     return NextResponse.json({ error: "Webhook verification failed" }, { status: 400 });
//   }
// }


import { Webhook } from "svix";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import connectDB from "../../../config/db.js"; // ✅ only one import
import User from "../../../models/User";

export async function POST(req) {
  try {
    // Connect DB first
    await connectDB();

    const wh = new Webhook(process.env.CLERK_WEBHOOK_SECRET);
    const headerPayload = headers();

    const svixHeaders = {
      "svix-id": headerPayload.get("svix-id"),
      "svix-timestamp": headerPayload.get("svix-timestamp"),
      "svix-signature": headerPayload.get("svix-signature"),
    };

    // Parse body
    const payload = await req.json();
    const body = JSON.stringify(payload);

    // Verify webhook
    const evt = wh.verify(body, svixHeaders);

    console.log("Clerk Event Received:", evt.type);

    const { id, email_addresses, first_name, last_name, image_url } = evt.data;

    const userData = {
      _id: id, // ensure schema uses String as _id
      email: email_addresses[0].email_address,
      name: `${first_name || ""} ${last_name || ""}`.trim(),
      image: image_url,
    };

    switch (evt.type) {
      case "user.created":
        await User.create(userData);
        console.log("User created in MongoDB:", userData);
        break;
      case "user.updated":
        await User.findByIdAndUpdate(id, userData, { new: true });
        console.log("User updated:", id);
        break;
      case "user.deleted":
        await User.findByIdAndDelete(id);
        console.log("User deleted:", id);
        break;
      default:
        console.log("Unhandled Clerk event:", evt.type);
        break;
    }

    return NextResponse.json({ message: "Event received" }, { status: 200 });
  } catch (err) {
    console.error("Webhook error:", err);
    return NextResponse.json(
      { error: "Webhook verification failed" },
      { status: 400 }
    );
  }
}
