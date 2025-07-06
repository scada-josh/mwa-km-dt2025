'use client'

import { useLiffProfilePassport } from "@/utils/liff/useLiffProfilePassport";
import KMIMPassport from "./components/KMIMPassport";


export default function KMIMPassportPage() {
  const { profile, error } = useLiffProfilePassport()

  if (error) return <p className="text-red-600 p-4">Error: {error}</p>
  if (!profile) return <p className="p-4">Loading...</p>

  return <KMIMPassport />
}