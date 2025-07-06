// app/success/page.tsx
'use client';

import { useRouter } from 'next/navigation';
import { CheckCircle } from 'lucide-react';

export default function SuccessPage() {
  const router = useRouter();

  const handleClose = () => {
    router.push('/'); // กลับหน้าแรก หรือเปลี่ยนเส้นทางตามที่ต้องการ
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md w-full text-center space-y-6">
        <div className="flex justify-center">
          <CheckCircle className="w-16 h-16 text-green-500" />
        </div>

        <h2 className="text-2xl font-bold text-gray-800">บันทึกข้อมูลสำเร็จ!</h2>
        <p className="text-gray-600 text-lg">ขอแสดงความยินดี 🎉</p>
        <p className="text-gray-500">คุณสามารถไปรับของที่ระลึกได้ที่ <br/> <b>KM/IM Exchange Corner</b></p>
        

        <button
          onClick={handleClose}
          className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-lg font-medium transition"
        >
          ปิด
        </button>
      </div>
    </div>
  );
}
