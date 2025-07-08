
import { handleCheckBeaconBrodcast, handleSaveBeaconBrodcast } from "@/utils/actions";
import { reply } from "@/utils/line-utils/reply";
import { LineProfile } from "@/utils/types/line";
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

      console.log('Received event:', event);
      
      try {
        if (event.type === "beacon") {
          switch (event.beacon?.type) {
            case "enter":

              if (event.type === 'beacon' && event.beacon && event.source && event.source.userId) {
                    console.log("[LINE BEACON]", {
                      userId: event.source.userId,
                      hwid: event.beacon.hwid,
                      type: event.beacon.type,
                      timestamp: event.timestamp,
                    });

                    // Get user profile from LINE
                      try {

                        console.log(` Fetch from : ${process.env.LINE_MESSAGING_API}/profile/${event.source.userId}`)
                        console.log(`Authorization: Bearer ${process.env.LINE_MESSAGING_ACCESS_TOKEN}`)

                        const profileRes = await fetch(
                          `${process.env.LINE_MESSAGING_API}/profile/${event.source.userId}`,
                          {
                            headers: {
                              Authorization: `Bearer ${process.env.LINE_MESSAGING_ACCESS_TOKEN}`,
                              'Content-Type': 'application/json',
                            },
                            cache: "no-store",
                          }
                        );

                        const profileResData = await profileRes.json();
                        console.log(`profileResData : ${profileResData}`)

                        // const profileRes = await axios.get(
                        //     `${process.env.LINE_MESSAGING_API}/profile/${event.source.userId}`,
                        //     {
                        //     headers: {
                        //         Authorization: `Bearer ${process.env.LINE_MESSAGING_ACCESS_TOKEN}`,
                        //         'Content-Type': 'application/json',
                        //     },
                        // }
                        // );
                        const { userId, displayName, pictureUrl } = profileResData;
                        console.log('LINE profile:', { userId, displayName, pictureUrl });
                        
                        // checkins.push({ userId, displayName, pictureUrl, timestamp: Date.now() });
                        // broadcastCheckins();

                        // ส่ง Flex Message กลับไปยังผู้ใช้
                        // const flexMsg = createFlexProfileCard({ displayName, pictureUrl, timestamp: Date.now() });

                        // 👇 เรียก LINE Messaging API
                        // await fetch('https://api.line.me/v2/bot/message/reply', {
                        //   method: 'POST',
                        //   headers: {
                        //     'Content-Type': 'application/json',
                        //     Authorization: `Bearer ${process.env.LINE_MESSAGING_ACCESS_TOKEN}`,
                        //   },
                        //   body: JSON.stringify({
                        //     replyToken: event.replyToken!,
                        //     messages: [flexMsg],
                        //   }),
                        // });
                        await handleEnterBeaconWithFlexEvent(event, profileResData);

                      } catch (e) {
                        console.error('LINE profile error', e);
                      }


              }

              // await handleEnterBeaconEvent(event);
              break;
            default:
              console.warn(`Unhandled beacon type: ${event.beacon?.type}`);
          }
        } else if (event.type === 'message' && event.message!.type === 'text') {
            const replyToken = event.replyToken;
            // const userMessage = event.message.text;
            console.log(event)
            console.log(event.type)
            console.log(event.replyToken)
          //   console.log(replyToken);
          //   console.log(userMessage);

          //   // ส่งข้อความตอบกลับ
          //   await replyToUser(replyToken, `คุณกล่าวว่า: ${userMessage}`);
          if (event.type === 'message' && replyToken) {
            await replyToUser(replyToken, 'ตอบกลับข้อความ');
          } else {
            console.warn('event นี้ไม่มี replyToken หรือไม่ใช่ message event');
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

// async function handleEnterBeaconEvent(event: LineEvent) {
//   console.log('Beacon enter event detected:', event)
//   // Add logic to handle the 'enter' beacon event
//   // Example: Send a welcome message or log the event
//   await reply(event.replyToken!, [
//     {
//       type: 'text',
//       text: `📡 Welcome! You just entered the beacon zone (${event.beacon?.hwid}).`,
//     } as Message,
//   ])
// }

async function handleEnterBeaconWithFlexEvent(event: LineEvent, profileData: LineProfile) {
  console.log('Beacon enter event detected:', event)
  // Add logic to handle the 'enter' beacon event
  // Example: Send a welcome message or log the event

  const {displayName, pictureUrl } = profileData;
  const flexMsg = createFlexProfileCard({ displayName, pictureUrl: pictureUrl ?? '', timestamp: Date.now() });

  const resultChkBeacon = await handleCheckBeaconBrodcast(profileData.userId)
  console.log(resultChkBeacon)

  if(resultChkBeacon == "ส่งข้อความไปแล้ว"){

    // await reply(event.replyToken!, [{
    //     type: 'text',
    //     text: `📡 Welcome! You just entered the beacon zone (ส่งข้อความไปแล้ว) (${event.beacon?.hwid} ${profileData.userId}).`,
    //   } as Message,
    //   flexMsg])

  } else {

    const resultSaveBeacon = await handleSaveBeaconBrodcast(profileData.userId)
    console.log(resultSaveBeacon)
    await reply(event.replyToken!, [{
        type: 'text',
        text: `📡 Welcome! You just entered the beacon zone (${event.beacon?.hwid}).`,
      } as Message,
      flexMsg])
  }

}

// ฟังก์ชันสร้าง Flex Message Card Profile
function createFlexProfileCard({ displayName, pictureUrl, timestamp }: { displayName: string; pictureUrl: string; timestamp: number }) {
  const date = new Date(timestamp);
  const dateStr = date.toLocaleDateString('th-TH', { year: 'numeric', month: 'short', day: 'numeric' });
  const timeStr = date.toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit' });
  return {
    type: 'flex',
    altText: 'คุณได้เข้า พื้นที่แล้ว',
    contents: {
      type: 'bubble',
      size: 'mega',
      hero: {
        type: 'image',
        url: pictureUrl,
        size: 'full',
        aspectRatio: '1:1',
        aspectMode: 'cover',
      },
      body: {
        type: 'box',
        layout: 'vertical',
        spacing: 'md',
        contents: [
          {
            type: 'text',
            text: displayName,
            weight: 'bold',
            size: 'xl',
            align: 'center',
            wrap: true,
          },
          {
            type: 'text',
            text: 'คุณได้เข้า พื้นที่แล้ว',
            size: 'md',
            color: '#00B900',
            align: 'center',
            margin: 'md',
          },
          {
            type: 'box',
            layout: 'baseline',
            spacing: 'sm',
            margin: 'md',
            contents: [
              {
                type: 'text',
                text: 'กิจกรรม',
                color: '#aaaaaa',
                size: 'sm',
                flex: 2,
              },
              {
                type: 'text',
                text: 'การจัดการความรู้และนวัตกรรม สายงานเทคโนโลยีดิจิทัล 2568',
                wrap: true,
                color: '#333333',
                size: 'sm',
                flex: 5,
              },
            ],
          },
          {
            type: 'box',
            layout: 'baseline',
            spacing: 'sm',
            contents: [
              {
                type: 'text',
                text: 'วันเวลา',
                color: '#aaaaaa',
                size: 'sm',
                flex: 2,
              },
              {
                type: 'text',
                text: `${dateStr} ${timeStr} น.`,
                wrap: true,
                color: '#333333',
                size: 'sm',
                flex: 5,
              },
            ],
          },
        ],
      },
    },
  };
}


async function replyToUser(replyToken: string, message: string) {
  const LINE_MESSAGING_ACCESS_TOKEN = process.env.LINE_MESSAGING_ACCESS_TOKEN;
//   console.log(LINE_MESSAGING_ACCESS_TOKEN)

  await fetch('https://api.line.me/v2/bot/message/reply', {
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
