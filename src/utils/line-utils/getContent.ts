/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosResponse } from "axios"

/**
 * ดึง binary content (image, video, file ฯลฯ) จาก messageId
 * ใช้สำหรับดึงไฟล์ที่ผู้ใช้ส่งมา
 * Limitation: ใช้ได้เฉพาะ message ที่ยังไม่หมดอายุ (7 วัน), ต้องใช้ access token ที่ถูกต้อง
 */
export const getContent = async (messageId: string): Promise<Buffer> => {
  try {
    const url = `${process.env.LINE_DATA_MESSAGING_API}/message/${messageId}/content`

    console.log('url', url)
    const response: AxiosResponse<Buffer> = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${process.env.LINE_MESSAGING_ACCESS_TOKEN}`,
      },
      responseType: 'arraybuffer',
    })
    return response.data
  } catch (error: any) {
    console.error('Error fetching content:', error.response?.data || error.message)
    throw error
  }
}