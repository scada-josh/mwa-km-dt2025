'use client'

import { useLiffProfileLur } from "@/utils/liff/useLiffProfileLur";
// import { useLiffProfileLur } from "@/utils/liff/useLiffProfilePassport";
import ReflectionPage from "./components/ReflectionPage";


export default function LurPage() {
  const { profile, error } = useLiffProfileLur()

  if (error) return <p className="text-red-600 p-4">Error: {error}</p>
  if (!profile) return <p className="p-4">Loading...</p>

  return <ReflectionPage />
}