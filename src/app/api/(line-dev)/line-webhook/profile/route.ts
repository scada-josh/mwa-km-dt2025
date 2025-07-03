import { getProfile } from "@/utils/line-utils/getProfile";
import { reply } from "@/utils/line-utils/reply";
import { welcomeBack, welcomeMessage } from "@/utils/messages/message";
import { LineEvent } from "@/utils/types/webhook";
import { NextRequest, NextResponse } from "next/server";

// =========================
//  Webhook /profile Route
// =========================

export async function POST(req: NextRequest) {
  /*
    Step 1: Extract events from request
    Step 2: Validate events array
    Step 3: Loop through events and handle 'follow' event
    Step 4: End the response
  */

  const body = await req.json();
  const events: LineEvent[] = body.events;

  if (!Array.isArray(events)) {
    console.error("Invalid payload: 'events' is not an array", req.body);
    Response.json({ message: "Invalid payload" }, { status: 400 });
    return;
  }

  for (const event of events) {
    
    if (event.type === "follow") {
      const profile = await getProfile(event.source.userId!);
      const message = event.follow?.isUnblocked
        ? welcomeBack(profile.displayName)
        : welcomeMessage(profile.displayName);

      await reply(event.replyToken!, [message]);
    }
  }

  return NextResponse.json({ status: "ok" }, { status: 200 });
}
