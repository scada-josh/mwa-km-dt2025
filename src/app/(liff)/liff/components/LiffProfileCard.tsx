'use client'

import { LiffProfileProps } from '@/types/liff'
import Image from 'next/image'

interface Props {
  profile: LiffProfileProps
}

export default function LiffProfileCard({ profile }: Props) {
  return (
    <div className="p-4 text-center">
      {profile.pictureUrl ? (
        <Image
          src={profile.pictureUrl}
          alt="Profile"
          width={100}
          height={100}
          className="rounded-full mx-auto"
        />
      ) : (
        <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto" />
      )}
      <h2 className="text-xl font-bold mt-2">{profile.displayName}</h2>
      <p className="text-sm text-gray-600">{profile.userId}</p>
      {profile.statusMessage && (
        <p className="text-sm italic text-gray-500 mt-1">{profile.statusMessage}</p>
      )}
    </div>
  )
}
