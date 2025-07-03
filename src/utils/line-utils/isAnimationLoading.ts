/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosResponse } from 'axios'
import { AnimationLoadingResponse } from "../types/line"


/**
 * ส่ง animation loading (typing...) ให้ user
 * ใช้สำหรับแสดงสถานะกำลังประมวลผล
 * Limitation: จำกัดเวลาสูงสุด 60 วินาที, ต้องใช้ stateless access token
 */
export const isAnimationLoading = async (userId: string): Promise<AnimationLoadingResponse> => {
  try {

    const url = `${process.env.LINE_MESSAGING_API}/chat/loading/start`
    const payload = {
      chatId: userId,
      loadingSeconds: 10, // allowed values: 5,10,15,...,60
    }

    const response: AxiosResponse<AnimationLoadingResponse> = await axios.post(url, payload, {
      headers: {
        Authorization: `Bearer ${process.env.LINE_MESSAGING_ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
      },
    })

    if (response.status === 202) {
      return response.data
    } else {
      throw new Error(`❌ Failed to send animation loading. Status: ${response.status}`)
    }
  } catch (error: any) {
    console.error('🔥 Error sending animation loading:', error.response?.data || error.message)
    throw error
  }
}