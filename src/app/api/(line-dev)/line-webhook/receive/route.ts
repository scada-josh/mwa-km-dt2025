/* eslint-disable @typescript-eslint/no-unused-vars */
import { getContent } from "@/utils/line-utils/getContent";
import { isAnimationLoading } from "@/utils/line-utils/isAnimationLoading";
import { reply } from "@/utils/line-utils/reply";
import { LineEvent, Message } from "@/utils/types/webhook";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();

  /*
   * Step 1: Log the received events
   */
  const events: LineEvent[] = body.events;
  console.log("Received Events:", JSON.stringify(events));

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
    if (event.source.type !== "group") {
      await isAnimationLoading(event.source.userId!);
      console.log(event.source.type);
      console.log(event.source.userId);
    }

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
        console.log("[message] Event:", JSON.stringify(event));
        // console.log(event.type)
        // console.log(event.message?.type)

        // // ตรวจสอบว่าเป็นข้อความประเภท text หรือไม่
        // if (event.type === "message" && event.message?.type === "text") {
        //   const replyToken = event.replyToken;
        //   const userMessage = event.message.text;

        //   // ส่งข้อความตอบกลับ
        //   await replyToUser(replyToken!, `คุณกล่าวว่า: ${userMessage}`);
        //   // await reply(event.replyToken!, [
        //   //   {
        //   //     type: "text",
        //   //     text: `คุณกล่าวว่า: ${userMessage}`,
        //   //   },
        //   // ]);
        // }
        // break;

        await handleMessage(event.message!, event.replyToken!, event.source.userId!)
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

  return NextResponse.json({ status: "ok" }, { status: 200 });
}

async function replyToUser(replyToken: string, message: string) {
  const LINE_MESSAGING_ACCESS_TOKEN = process.env.LINE_MESSAGING_ACCESS_TOKEN;

  await fetch(`${process.env.LINE_MESSAGING_API}/message/reply`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${LINE_MESSAGING_ACCESS_TOKEN}`,
    },
    body: JSON.stringify({
      replyToken,
      messages: [
        {
          type: "text",
          text: message,
        },
      ],
    }),
  });
}


// =========================
//  Handle Message Function
// =========================

/**
 * handleMessage
 * ฟังก์ชันนี้ใช้จัดการข้อความที่ได้รับจาก LINE Messaging API
 * - รองรับข้อความประเภท: text, image, video, audio, file, location, sticker
 * - สามารถขยาย logic เพิ่มเติมได้ตามต้องการ
 *
 * ตัวอย่าง:
 * - ถ้าได้รับข้อความ text จะ reply กลับด้วยเนื้อหาข้อความนั้น
 * - ถ้าได้รับ location จะ reply กลับด้วยข้อความและพิกัด
 * - ถ้าได้รับ sticker จะ reply กลับด้วย sticker อื่น
 */
async function handleMessage(message: Message, replyToken: string, userId: string): Promise<void> {
  /*
    Step 1: Switch by message type (text, image, video, audio, file, location, sticker)
    Step 2: Handle each message type accordingly
  */

  switch (message.type) {
    case 'text':

      /*step remove this function reply line234-240*/
      await reply(replyToken, [
        {
          type: 'text',
          text: `${JSON.stringify(message)}`,
          quoteToken: `${message.quoteToken}`,
        },
      ])


      /* Step Uncomment line 245-351 the following lines to handle specific text commands */
      
      // if (message.text === 'profile') {
      //   const profile = await getProfile(userId)
      //   console.log('🙋‍♂️ User Profile:', profile)

      //   await reply(replyToken, [
      //     {
      //       type: 'text',
      //       text: 'สวัสดีครับคุณ ' + profile.displayName,
      //     },
      //   ])
      // } else if (message.text === 'menu') {
      //   await reply(replyToken, [
      //     {
      //       type: 'text',
      //       text: 'Select your favorite food category or send me your location!',
      //       quickReply: {
      //         items: [
      //           {
      //             type: 'action',
      //             imageUrl: 'https://example.com/sushi.png',
      //             action: {
      //               type: 'message',
      //               label: 'Sushi',
      //               text: 'Sushi',
      //             },
      //           },
      //           {
      //             type: 'action',
      //             imageUrl: 'https://example.com/sushi.png',
      //             action: {
      //               type: 'postback',
      //               label: 'Postback',
      //               data: 'action=buy&itemid=111',
      //               text: 'Buy',
      //             },
      //           },
      //           {
      //             type: 'action',
      //             action: {
      //               type: 'camera',
      //               label: 'Camera',
      //             },
      //           },
      //           {
      //             type: 'action',
      //             action: {
      //               type: 'cameraRoll',
      //               label: 'Camera Roll',
      //             },
      //           },
      //           {
      //             type: 'action',
      //             action: {
      //               type: 'location',
      //               label: 'Send location',
      //             },
      //           },
      //           {
      //             type: 'action',
      //             action: {
      //               type: 'uri',
      //               label: 'Phone order',
      //               uri: 'tel:00000000',
      //             },
      //           },
      //           {
      //             type: 'action',
      //             action: {
      //               type: 'uri',
      //               label: 'Recommend to friends',
      //               uri: 'https://line.me/R/nv/recommendOA/@linedevelopers',
      //             },
      //           },
      //         ],
      //       },
      //     },
      //   ])
      // } else if (message.text === 'service') {
      //   await reply(replyToken, [service()])
      // } else if (message.text === 'bill') {
      //   await reply(replyToken, [bill()])
      // } else if (message.text === 'queue') {
      //   await reply(replyToken, [queue()])
      // } else if (message.text === 'booking') {
      //   await reply(replyToken, [booking()])
      // } else if (message.text === 'report') {
      //   await reply(replyToken, [report()])
      // } else if (message.text === 'vdo') {
      //   await reply(replyToken, [vdo()])
      // } else if (message.text === 'profile2') {
      //   const profile = await getProfileCache(userId)
      //   console.log('🙋‍♂️ User Profile2:', profile)
      //   await reply(replyToken, [
      //     {
      //       type: 'text',
      //       text: 'สวัสดีครับคุณ ' + profile.displayName,
      //     },
      //   ])
      // } else {
      //   await reply(replyToken, [
      //     {
      //       type: 'text',
      //       text: `${JSON.stringify(message)}`,
      //       quoteToken: `${message.quoteToken}`,
      //     },
      //   ])
      // }
      break

    case 'image':
      console.log('🖼️ Received Image Message with ID:', message.id)
      const buffer = await getContent(message.id)
      console.log(`📦 Content size: ${buffer.length} bytes`)
      await reply(replyToken, [
        {
          type: 'text',
          text: `เราได้รับไฟล์ ${message.type} แล้ว ขนาด: ${buffer.length} bytes`,
        },
      ])
      break

    case 'video':
      console.log('🎥 Received Video Message with ID:', message.id, '| Duration:', message.duration)
      break

    case 'audio':
      console.log('🔊 Received Audio Message with ID:', message.id, '| Duration:', message.duration)
      break

    case 'file':
      console.log('📁 Received File Message:', message.fileName, '| Size:', message.fileSize)
      break

    case 'location':
      // ตอบกลับด้วยข้อความและข้อมูล location ที่ได้รับ
      await reply(replyToken, [
        {
          type: 'location',
          title: message.title || 'ตำแหน่งที่คุณส่งมา',
          address: message.address || 'ไม่ระบุที่อยู่',
          latitude: message.latitude,
          longitude: message.longitude,
        },
        {
          type: 'text',
          text: `ได้รับ location: ${message.title || ''} (${message.latitude}, ${message.longitude})`,
        },
      ])
      break

    case 'sticker':
      // ตอบกลับด้วย sticker (ตัวอย่าง: ส่ง sticker หมายเลข 52002745)
      // ref https://developers.line.biz/en/docs/messaging-api/sticker-list/#send-sticker
      await reply(replyToken, [
        {
          type: 'sticker',
          packageId: '11537',
          stickerId: '52002745',
        },
        {
          type: 'text',
          text: `ได้รับสติกเกอร์ packageId: ${message.packageId}, stickerId: ${message.stickerId}`,
        },
      ])
      break

    default:
      console.warn('⚠️ Unhandled message type:', message.type)
      break
  }
}