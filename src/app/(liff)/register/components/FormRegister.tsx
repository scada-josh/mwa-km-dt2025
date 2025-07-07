'use client'

import { LiffProfileProps } from "@/types/liff";
import { registerUser } from "@/utils/actions";
import Image from 'next/image'
import { useActionState, useState } from "react";
import { useFormStatus } from "react-dom";

interface Props {
  profile: LiffProfileProps
}

const SubmitButton = () => {
  const { pending } = useFormStatus()
  return <button type='submit' disabled={pending} className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
    {pending ? 'Submitting...' : 'ลงทะเบียนร่วมลุ้น Lucky Draw'}
  </button>
}

export default function FormRegister({ profile }: Props) {
    const [fullname, setFullname] = useState('');
    const [message, formAction] = useActionState(registerUser, null)
    
  return (
    <>
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

          <div className="flex items-center justify-center">
            <form className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md space-y-6" action={formAction}>
                {/* <h2 className="text-2xl font-semibold text-gray-800 text-center">Register</h2> */}

                <input type="hidden" name="userId" value={profile.userId} />

                <div>
                    <label htmlFor="fullname" className="block text-sm font-medium text-gray-700 mb-1 text-left">
                    ชื่อ - สกุล
                    </label>
                    <input
                    type="text"
                    id="fullname"
                    name="fullname"
                    placeholder="Enter your full name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={fullname}
                    onChange={(e) => setFullname(e.target.value)}
                    required
                    />
                </div>

                {/* <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                    ลงทะเบียนร่วมลุ้น Lucky Draw
                </button> */}
                <SubmitButton />

                { message && <h1>{message}</h1>} 
            </form>

          </div>



        </div>
    </>
  );
}