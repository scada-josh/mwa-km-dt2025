/* eslint-disable @next/next/no-img-element */
// app/redeem/page.tsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function RedeemPage() {
  const [redeemed, setRedeemed] = useState(false);

  const handleRedeem = () => {
    setRedeemed(true);
  };

  return (
    <main className=" flex flex-col items-center justify-center bg-gradient-to-br from-indigo-100 to-white px-4 py-3">
      {/* Logo */}
      <img
        src="/images/km-passport-logo.png"
        alt="KM Logo"
        className="md:w-48 mb-8"
      />

      {/* Card */}
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md text-center space-y-6">
        <h1 className="text-2xl font-bold text-indigo-700">แลกรับของรางวัล</h1>

        <p className="text-gray-600">กดปุ่มด้านล่างเพื่อรับของรางวัลของคุณ</p>

        <button
          onClick={handleRedeem}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-xl shadow transition-transform transform hover:scale-105"
          disabled={redeemed}
        >
          {redeemed ? 'รับรางวัลแล้ว' : 'Redeem'}
        </button>

        {/* Success Message */}
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
