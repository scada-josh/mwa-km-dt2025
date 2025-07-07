'use client'

import { useEffect, useState } from 'react'
import liff from '@line/liff'
import { LiffProfileProps } from '@/types/liff'
import { handleCheckQuiz } from '../actions'

export function useLiffProfileRedeem() {
  const [profile, setProfile] = useState<LiffProfileProps | null>(null)
  const [error, setError] = useState<string | null>(null)

  const [isQuiz, setIsQuiz] = useState(false)

  useEffect(() => {
    const initLiff = async () => {
      try {
        await liff.init({ liffId: process.env.NEXT_PUBLIC_LIFF_ID_REDEEM! })

        if (!liff.isLoggedIn()) {
          liff.login()
          // const destinationUrl = window.location.href;
          // liff.login({ redirectUri: destinationUrl})
          return
        }

        const profile = await liff.getProfile()
        setProfile(profile)

        const chkQuiz = await handleCheckQuiz(profile.userId)
        console.log(chkQuiz)
        setIsQuiz(chkQuiz == "ทำแล้ว");

      } catch (err) {
        if (err instanceof Error) {
          setError(err.message)
        } else {
          setError('Unknown error')
        }
      }
    }

    initLiff()
  }, [])

  return { profile, error , isQuiz}
}
