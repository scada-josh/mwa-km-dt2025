/* eslint-disable @next/next/no-img-element */
// app/redeem/page.tsx
'use client';

import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LiffProfileProps } from '@/types/liff';
import { handleSaveRedeem } from '@/utils/actions';

interface Props {
  profile: LiffProfileProps
}

export default function RedeemPage({ profile }: Props) {
  const [redeemed, setRedeemed] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleRedeem = () => {
    console.log("Redeem")

    handleSaveRedeem(profile.userId)
    // console.log(profile.userId)

    setRedeemed(true);
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-100 to-white px-4 py-12">
      {/* Audio Element */}
      <audio ref={audioRef} src="/audio/congrats.mp3" preload="auto" />

      {/* Logo */}
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md text-center space-y-6 border-b border-dashed border-gray-300">
        <img
        src="/images/km-passport-logo.png"
        alt="KM Logo"
        className="w-100 sm:w-100 md:w-[500px] lg:w-[600px] xl:w-[700px] h-auto mx-auto mb-12"
        />
        </div>

      {/* Redeem Card */}
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md text-center space-y-6">
        <h1 className="text-2xl font-bold text-indigo-700">แลกรับของรางวัล</h1>
        <p className="text-gray-600">กดปุ่มด้านล่างเพื่อรับของรางวัลของคุณ</p>

        <button
          onClick={handleRedeem}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-xl shadow transition-transform transform hover:scale-105 disabled:opacity-50"
          disabled={redeemed}
        >
          {redeemed ? 'รับรางวัลแล้ว' : 'Redeem'}
        </button>

        <AnimatePresence>
          {redeemed && (
            <motion.div
              className="text-green-600 font-semibold mt-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              🎉 ยินดีด้วย! คุณได้รับรางวัลเรียบร้อยแล้ว 🎁
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
