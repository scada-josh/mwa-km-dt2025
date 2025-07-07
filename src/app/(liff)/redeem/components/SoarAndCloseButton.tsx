'use client';

import { useRef } from 'react';

export default function SoarAndCloseButton() {
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleClick = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }

    // รอให้เสียงเล่นก่อน แล้วค่อยปิด (delay ~800ms)
    setTimeout(() => {
      window.close();
    }, 800);
  };

  return (
    <div className="text-center">
      {/* เสียง: วางไฟล์ใน /public/audio/soar.mp3 */}
      <audio ref={audioRef} src="/audio/soar.mp3" preload="auto" />

      <button
        onClick={handleClick}
        className="block mx-auto mt-8 px-6 py-3 text-white bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full shadow-lg text-xl font-semibold items-center gap-2 transform transition hover:-translate-y-2 hover:shadow-2xl active:scale-95"
      >
        🚀 แล้วกันใหม่นะทุกคน
      </button>
    </div>
  );
}
