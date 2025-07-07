/* eslint-disable @next/next/no-img-element */
export default function KMIMPassport() {
  const booths = [
    { id: 1, label: "บูธที่ 1" },
    { id: 2, label: "บูธที่ 2" },
    { id: 3, label: "บูธที่ 3" },
    { id: 4, label: "บูธที่ 4" },
    { id: 5, label: "บูธที่ 5" },
    { id: 6, label: "บูธที่ 6" },
    { id: 7, label: "บูธที่ 7" },
    { id: 8, label: "บูธที่ 8" },
    { id: 9, label: "QR Code" },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-blue-50 text-gray-800 font-sans">

      {/* แถวที่ 1: โลโก้และ Quote */}
      {/* <section className="px-4 py-8 text-center space-y-4">
        <img
          src="/images/km-passport-logo.png"
          alt="KM/IM Logo"
          className="mx-auto w-28 sm:w-36 md:w-44 lg:w-52 h-auto"
        />
        <blockquote className="text-lg md:text-xl font-medium italic text-gray-600 max-w-3xl mx-auto">
          “ทุกบูธ คือ จุดหมายของการเดินทาง เรียนรู้ใหม่ไปด้วยกัน ในโลกที่ความรู้ไม่หยุดนิ่ง”
        </blockquote>
      </section> */}

<section className="px-4 py-8 text-center space-y-4">
  <div className="w-full max-w-4xl mx-auto">
    <img
      src="/images/km-passport-logo.png"
      alt="KM/IM Logo"
      className="w-full h-auto object-contain"
    />
  </div>
  <blockquote className="text-lg md:text-xl font-medium italic text-gray-600 max-w-3xl mx-auto">
    “ทุกบูธ คือ จุดหมายของการเดินทาง เรียนรู้ใหม่ไปด้วยกัน ในโลกที่ความรู้ไม่หยุดนิ่ง”
  </blockquote>
</section>

      {/* แถวที่ 2: วัตถุประสงค์ */}
      <section className="bg-white rounded-2xl shadow-md p-6 md:p-10 mx-4 md:mx-16 mb-6 space-y-4">
        <h2 className="text-2xl font-bold text-blue-700">วัตถุประสงค์</h2>
        <ul className="list-disc list-inside text-lg space-y-2">
          <li>ช่วยให้คุณได้เยี่ยมชมบูธ/กิจกรรมทั้งหมด</li>
          <li>ส่งเสริมการแลกเปลี่ยนความรู้</li>
          <li>มีสิทธิ์ลุ้นรับของรางวัลเมื่อทำภารกิจครบ</li>
        </ul>
      </section>

      {/* แถวที่ 3: วิธีใช้ */}
      <section className="bg-white rounded-2xl shadow-md p-6 md:p-10 mx-4 md:mx-16 mb-6 space-y-4">
        <h2 className="text-2xl font-bold text-green-700">วิธีใช้</h2>
        <ul className="list-disc list-inside text-lg space-y-2">
          <li>เยี่ยมชมบูธและกิจกรรม</li>
          <li>รับตราประทับ / QR stamp จากแต่ละจุด</li>
          <li>เมื่อสะสมครบตามเงื่อนไข</li>
          <li>
            นำไปแลกของรางวัลได้ที่ <span className="font-semibold">“KM/IM Exchange Corner”</span>
          </li>
        </ul>
      </section>

      {/* แถวที่ 4: ตารางภารกิจ + ช่องสะสมแต้ม */}
      <section className="bg-white rounded-2xl shadow-md p-6 md:p-10 mx-4 md:mx-16 mb-6">
        <h2 className="text-2xl font-bold text-purple-700 text-center mb-6">
          ตารางภารกิจ + ช่องสะสมแต้ม
        </h2>
        <div className="grid grid-cols-3 gap-y-6 gap-x-4 place-items-center">
          {booths.map((booth) => (
            <div key={booth.id} className="flex flex-col items-center space-y-2">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-blue-100 flex items-center justify-center shadow-md">
                {booth.id === 9 ? (
                  <img
                    src="/images/qr-final.png"
                    alt="QR Code"
                    className="w-10 h-10"
                  />
                ) : (
                  <span className="text-xl font-bold text-blue-800">{booth.id}</span>
                )}
              </div>
              <span className="text-sm md:text-base font-medium text-gray-700">
                {booth.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* แถวที่ 5: Footer */}
      <footer className="bg-blue-700 text-white text-center py-4 mt-10">
        <p className="text-sm md:text-base font-semibold">
          KM/IM DAY Digital Technology 2025 | 9 JULY 2025
        </p>
      </footer>
    </main>
  );
}
