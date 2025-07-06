'use client'

import { useLiffProfileRedeem } from "@/utils/liff/useLiffProfileRedeem";
// import LiffProfile from "./components/LiffProfile";
import QuizPage from "./components/QuizPage";
// import SuccessPage from "./components/SuccessPage"


export default function RedeemPage() {
  const { profile, error } = useLiffProfileRedeem()

  if (error) return <p className="text-red-600 p-4">Error: {error}</p>
  if (!profile) return <p className="p-4">Loading...</p>

  // return  <LiffProfile profile={profile} /> 
  return <QuizPage />
  // return <SuccessPage />
}