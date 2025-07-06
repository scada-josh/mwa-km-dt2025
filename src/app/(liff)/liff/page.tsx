'use client'

// import { useLiffProfile } from './components/useLiffProfile.ts.bak'
import { useLiffProfileRedeem } from '@/utils/liff/useLiffProfileRedeem'
import LiffProfileCard from './components/LiffProfileCard'

export default function LiffPage() {
  const { profile, error } = useLiffProfileRedeem()

  if (error) return <p className="text-red-600 p-4">Error: {error}</p>
  if (!profile) return <p className="p-4">Loading...</p>

  return <LiffProfileCard profile={profile} />
}
