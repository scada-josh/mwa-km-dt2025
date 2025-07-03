import crypto from 'crypto'

/**
 * ตรวจสอบความถูกต้องของ LINE signature ที่แนบมากับ webhook
 * ใช้สำหรับยืนยันว่า request มาจาก LINE จริง
 * Limitation: ต้องใช้ rawBody ที่ยังไม่ถูก parse และ channel secret ที่ถูกต้อง
 */
export function validateLineSignature(rawBody: Buffer | string, signature: string): boolean {

      const expectedSignature = crypto.createHmac('SHA256', process.env.LINE_MESSAGING_CHANNEL_SECRET!)
                    .update(rawBody)
                    .digest('base64');

  return expectedSignature === signature;
}