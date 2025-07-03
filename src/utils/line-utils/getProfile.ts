/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosResponse } from "axios"
import { LineProfile } from "../types/line"

/**
 * ดึงข้อมูลโปรไฟล์ผู้ใช้จาก userId
 * ใช้สำหรับดึง displayName, pictureUrl ฯลฯ ของ user
 * Limitation: ต้องใช้ access token ที่ถูกต้อง, ใช้ได้เฉพาะ user ที่ add bot แล้ว
 */
export const getProfile = async (userId: string): Promise<LineProfile> => {
  try {
    const url = `${process.env.LINE_MESSAGING_API}/profile/${userId}`
    const response: AxiosResponse<LineProfile> = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${process.env.LINE_MESSAGING_ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
      },
    })
    return response.data
  } catch (error: any) {
    console.error('Error fetching user profile:', error.response?.data || error.message)
    throw error
  }
}