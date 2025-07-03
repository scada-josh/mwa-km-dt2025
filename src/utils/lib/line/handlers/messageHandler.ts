// import { MessageEvent } from '@line/bot-sdk';
// import { lineClient } from '../client';

// export async function handleMessageEvent(event: MessageEvent) {
//   const text = event.message.text;

//   if (text.toLowerCase().includes('เวลา')) {
//     return lineClient.replyMessage(event.replyToken, {
//       type: 'text',
//       text: 'กรุณาเลือกวันและเวลา',
//       quickReply: {
//         items: [
//           {
//             type: 'action',
//             action: {
//               type: 'datetimepicker',
//               label: 'เลือกวันเวลา',
//               data: 'action=selectDateTime',
//               mode: 'datetime',
//               initial: '2025-06-01T12:00',
//               min: '2025-06-01T00:00',
//               max: '2025-12-31T23:59',
//             },
//           },
//         ],
//       },
//     });
//   }

//   return lineClient.replyMessage(event.replyToken, {
//     type: 'text',
//     text: `คุณพิมพ์ว่า: ${text}`,
//   });
// }
