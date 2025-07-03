import { reply } from "@/utils/line-utils/reply";
import { LineEvent, Message } from "@/utils/types/webhook";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {

    console.log('Hello Beacon');

  try {
    const body = await req.json();
    const events: LineEvent[] = body.events;

    console.log(body)

    if (!Array.isArray(events)) {
      console.error("Invalid payload: 'events' is not an array", req.body);
      Response.json({ message: "Invalid payload" }, { status: 400 });
      return;
    }

    for (const event of events) {
      try {
        if (event.type === "beacon") {
          switch (event.beacon?.type) {
            case "enter":
              await handleEnterBeaconEvent(event);
              break;
            default:
              console.warn(`Unhandled beacon type: ${event.beacon?.type}`);
          }
        }
      } catch (eventError) {
        console.error("Error handling event:", event, eventError);
      }
    }

    return NextResponse.json({ status: 'ok' }, { status: 200 });
  } catch (error) {
    console.error("Error processing webhook:", error);
    Response.json({ message: "Internal Server Error" }, { status: 500 });
  }
}

async function handleEnterBeaconEvent(event: LineEvent) {
  console.log('Beacon enter event detected:', event)
  // Add logic to handle the 'enter' beacon event
  // Example: Send a welcome message or log the event
  await reply(event.replyToken!, [
    {
      type: 'text',
      text: `📡 Welcome! You just entered the beacon zone (${event.beacon?.hwid}).`,
    } as Message,
  ])
}