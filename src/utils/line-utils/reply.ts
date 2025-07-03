/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosResponse } from "axios"

/**
 * ส่งข้อความ reply กลับไปยังผู้ใช้ (replyToken)
 * ใช้สำหรับตอบกลับข้อความใน 1:1 หรือ group
 * Limitation: ต้อง reply ภายใน 1 นาทีหลังได้รับ event, ส่งได้สูงสุด 5 ข้อความต่อครั้ง
 */
export const reply = async (token: string, payload: any[]): Promise<any> => {
  const url = `${process.env.LINE_MESSAGING_API}/message/reply`
  const response: AxiosResponse<any> = await axios.post(
    url,
    { replyToken: token, messages: payload },
    {
      headers: {
        Authorization: `Bearer ${process.env.LINE_MESSAGING_ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
      },
    },
  )
  return response.data
}