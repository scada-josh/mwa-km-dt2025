'use client'

import { useLiffProfileLur } from "@/utils/liff/useLiffProfileLur";
import ReflectionPage from "./ReflectionPage";

export default function MainLur() {
  const { profile, error } = useLiffProfileLur()

  if (error) return <p className="text-red-600 p-4">Error: {error}</p>
  if (!profile) return <p className="p-4">Loading...</p>

console.log('xxx')
  console.log(profile.userId)

  return (
    <ReflectionPage profile={profile}/>
  );
}