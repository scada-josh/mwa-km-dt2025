import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json();
  console.log(JSON.stringify(req.body, null, 2))

  // ตรวจสอบว่าเป็นข้อความประเภท text หรือไม่
  const events = body.events;
  for (const event of events) {
    if (event.type === 'message' && event.message.type === 'text') {
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
  }

  return NextResponse.json({ status: 'ok' });
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