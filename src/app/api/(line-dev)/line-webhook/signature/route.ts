import { validateLineSignature } from "@/utils/line-utils/validateLineSignature";
import { NextRequest, NextResponse } from "next/server";

// =========================
//  Webhook /signature Route
// =========================

export async function POST(req: NextRequest) {
  // const body = await req.json();

  /*
    Step 1: Log request headers and body
    Step 2: Validate LINE signature
    Step 3: End the response
  */

  /*
    Copy line 197-214 Import to postman

    curl --location 'https://c8c99a7f6dae.ngrok.app/demo-line-chatbot-workshop/asia-northeast1/api/webhook/signature' \
    --header 'Content-Type: application/json' \
    --data '{
      "destination": "Ud2117845b3c428bf20c0beae43835bfc",
      "events": [
        {
          "type": "message",
          "message": [],
          "webhookEventId": "01JWD9EX2K26V548ZJZ69H9ZEH",
          "deliveryContext": [],
          "timestamp": 1748497822608,
          "source": [],
          "replyToken": "9220c7d53d644e74a26500841912757b",
          "mode": "active"
        }
      ]
      }
    '
    
    */

  const signature = req.headers.get('x-line-signature');

  if (!signature) {
    return new Response('Missing signature', { status: 400 });
  }

  const rawBody = await req.arrayBuffer();
  const bodyText = Buffer.from(rawBody).toString();

  if (!validateLineSignature(bodyText, signature)) {
       return new Response('Invalid signature', { status: 401 });
  }

  console.log("Signature validated successfully.");

  return NextResponse.json({ status: "ok" }, { status: 200 });
}


