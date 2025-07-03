// import { PostbackEvent } from '@line/bot-sdk';
// import { lineClient } from '../client';

// export async function handlePostbackEvent(event: PostbackEvent) {
//   const { data, params } = event.postback;

//   if (data === 'action=selectDateTime' && params?.datetime) {
//     return lineClient.replyMessage(event.replyToken, {
//       type: 'text',
//       text: `คุณเลือกวันเวลา: ${params.datetime}`,
//     });
//   }

//   return lineClient.replyMessage(event.replyToken, {
//     type: 'text',
//     text: 'ได้รับข้อมูล postback แล้ว',
//   });
// }
