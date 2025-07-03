import { LineEvent } from '@/utils/types/webhook';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json();

  /*
   * Step 1: Log the received events
   */
  const events: LineEvent[] = body.events;
  // console.log("Received Events:", JSON.stringify(events));

    /*
   * Step 2: Check if the events is an array
   */

  if (!Array.isArray(events)) {
    console.error("Invalid payload: 'events' is not an array", req.body);
    Response.json({ message: "Invalid payload" }, { status: 400 });
    return;
  }

    /*
   * Step 3: Loop through the events and handle each event type
   */

  for (const event of events) {
    /*
     * Step 4: Handle each event type
     * - follow
     * - unfollow
     * - join
     * - leave
     * - memberJoined
     * - memberLeft
     * - message
     */
    switch (event.type) {
      case "follow":
        console.log("[follow] Event:", JSON.stringify(event));
        break;
      case "unfollow":
        console.log("[unfollow] Event:", JSON.stringify(event));
        break;
      case "join":
        console.log("[join] Event:", JSON.stringify(event));
        break;
      case "leave":
        console.log("[leave] Event:", JSON.stringify(event));
        break;
      case "memberJoined":
        console.log("[memberJoined] Event:", JSON.stringify(event));
        break;
      case "memberLeft":
        console.log("[memberLeft] Event:", JSON.stringify(event));
        break;
      case "message":
        // console.log("[message] Event:", JSON.stringify(event));
        // console.log(event.type)
        // console.log(event.message?.type)

        // ตรวจสอบว่าเป็นข้อความประเภท text หรือไม่
        if (event.type === 'message' && event.message?.type === 'text') {
          const replyToken = event.replyToken;
          const userMessage = event.message.text;
          console.log(replyToken)
          console.log(userMessage)

          // ส่งข้อความตอบกลับ
          await replyToUser(replyToken!, `คุณกล่าวว่า: ${userMessage}`);
        }
        break;
      default:
        console.log("[unknown] Event type:", event.type, event);
        break;
    }
  }


  /*
    * Step 5: End the response
    * The LINE Platform sent a webhook to the bot server,
    * but the bot server didn't return a response within 2 seconds. 
    * For more information, see The reason is request_timeout section.
  */

  return NextResponse.json({ status: 'ok' }, { status: 200 });
}

async function replyToUser(replyToken: string, message: string) {
  const LINE_MESSAGING_ACCESS_TOKEN = process.env.LINE_MESSAGING_ACCESS_TOKEN;

  await fetch(`${process.env.LINE_MESSAGING_API}/message/reply`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${LINE_MESSAGING_ACCESS_TOKEN}`,
    },
    body: JSON.stringify({
      replyToken,
      messages: [
        {
          type: 'text',
          text: message,
        },
      ],
    }),
  });
}