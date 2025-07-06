'use client'

import { useEffect, useState } from 'react'
import liff from '@line/liff'
import { LiffProfileProps } from '@/types/liff'

export function useLiffProfileRedeem() {
  const [profile, setProfile] = useState<LiffProfileProps | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const initLiff = async () => {
      try {
        await liff.init({ liffId: process.env.NEXT_PUBLIC_LIFF_ID_REDEEM! })

        if (!liff.isLoggedIn()) {
          // liff.login()
          const destinationUrl = window.location.href;
          liff.login({ redirectUri: destinationUrl})
          return
        }

        const profile = await liff.getProfile()
        setProfile(profile)
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

  return { profile, error }
}
