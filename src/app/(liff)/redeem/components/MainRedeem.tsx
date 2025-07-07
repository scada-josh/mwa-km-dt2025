'use client'

import { useLiffProfileRedeem } from "@/utils/liff/useLiffProfileRedeem";
import QuizPage from "./QuizPage";
import RedeemPage from "./RedeemPage";

export default function MainRedeem() {
  const { profile, error , isQuiz} = useLiffProfileRedeem()

  if (error) return <p>Error: {error}</p>
  if (!profile) return <p>⏳ Loading...</p>

  return (
    <>
      {isQuiz ? (
        <>
          <div className="bg-green-100 p-4 rounded">✅ คุณทำแบบทดสอบ Knowledge Management แล้ว</div>
          <RedeemPage />
        </>
      ) : (
        <>
          {/* <div className="bg-red-100 p-4 rounded">❌ ยังไม่ได้ทำแบบทดสอบ Knowledge Management</div> */}
          <QuizPage profile={profile} />
        </>
      )}
    </>
  );
}