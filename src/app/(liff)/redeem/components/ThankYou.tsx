/* eslint-disable @next/next/no-img-element */
'use client';

import SoarAndCloseButton from "./SoarAndCloseButton";

export default function SuccessPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white via-indigo-50 to-indigo-100 px-4 py-12 text-center">
      {/* Logo */}


     <div className="relative p-[2px] rounded-2xl bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-500 shadow-xl">
        <div className="bg-white shadow-xl rounded-2xl p-8 md:p-12 max-w-xl space-y-6 ">
            <img
            src="/images/km-passport-logo.png"
            alt="KM Logo"
            className="w-100 sm:w-100 md:w-[500px] lg:w-[600px] xl:w-[700px] h-auto mx-auto mb-12"
            />

        {/* Thank you message */}
        <h1 className="text-3xl sm:text-4xl font-bold text-indigo-700">
          🎉 ขอบคุณ<br/>ที่ร่วมเดินทางไปกับเรา!
        </h1>

        <p className="text-gray-700 text-lg leading-relaxed">
          คุณได้ร่วมกิจกรรมครบทุกบูธในงาน <strong className="text-indigo-600">KM/IM Day</strong> แล้ว!
          <br />
          เราหวังว่าคุณจะได้รับความรู้ แรงบันดาลใจ <br/>และประสบการณ์ดี ๆ ติดกลับไป 💡
        </p>

        <hr className="border-dashed border-gray-300 my-4" />

        {/* Closing statement */}
        <p className="italic text-gray-600 text-lg">
          “Learn – Unlearn – Relearn”
        </p>

        <div className="text-center">
  <SoarAndCloseButton />
</div>
        </div>
      </div>

      

    </main>
  );
}
