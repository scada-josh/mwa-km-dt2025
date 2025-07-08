/* eslint-disable @next/next/no-img-element */
'use client'

import { Ticket } from 'lucide-react'

export default function Schedule() {
  return (
    <main className="flex flex-col">
      {/* ส่วนที่ 1: Hero Image */}

        <section className="px-0 py-0 text-center space-y-4">
        <div className="w-full  margin-auto">
            <img
            src="/images/hero.jpg"
            alt="KM/IM Logo"
            className="w-full h-auto object-contain"
            />
        </div>
        </section>

      {/* ส่วนที่ 2-4: กำหนดการ */}
      <section className="w-full bg-[#bbcace] px-6 py-6">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* กำหนดการ 08.30 */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
            <div className="font-semibold bg-indigo-600 text-white px-2 py-1 rounded inline-block">
                08.30 - 09.00 น.
            </div>
            <div className="md:col-span-3">
              <h2 className="font-bold text-lg text-gray-900">ลงทะเบียน</h2>
              <ul className="list-disc list-inside text-gray-800 mt-0">
                <li>ชมนิทรรศการ / กิจกรรมเกม / รับประทานอาหารว่าง</li>
              </ul>
            </div>
          </div>

          {/* กำหนดการ 09.00 */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
            <div className="font-semibold bg-indigo-600 text-white px-2 py-1 rounded inline-block ">
                09.00 - 09.15 น.
            </div>
            {/* <div className="inline-flex items-start justify-start bg-indigo-600 text-white px-4 py-2 rounded-md font-semibold">
                09.00 - 09.15 น.
            </div> */}
            <div className="md:col-span-3">
              <h2 className="font-bold text-lg text-gray-900">พิธีเปิดงาน KM/IM Day 2025 <br/> สายงานเทคโนโลยีดิจิทัล</h2>
              <ul className="list-disc list-inside text-gray-800 mt-0 space-y-1">
                <li>ประธานคณะทำงานย่อยฯ กล่าวรายงาน วัตถุประสงค์ของงาน</li>
                <li>ผวก. กล่าวเปิดงาน)</li>
                <li>จับรางวัลพิเศษ (Special Lucky Draw)</li>
              </ul>
            </div>
          </div>

          {/* กำหนดการ 09.15 */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
            <div className="font-semibold bg-indigo-600 text-white px-2 py-1 rounded inline-block">
                09.15 - 09.30 น.
            </div>
            <div className="md:col-span-3">
              <h2 className="font-bold text-lg text-gray-900">พิธีกร ชี้แจงรายละเอียดงาน ภาพรวมของงาน</h2>
              <ul className="list-inside text-gray-800 mt-0 space-y-1">
                <li className="flex items-start gap-2">
                  <Ticket className="w-5 h-5 text-green-700 mt-1" />
                  Lucky Draw (ครั้งที่ 1)
                </li>
              </ul>
            </div>
          </div>

          {/* กำหนดการ 09.30 */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
            <div className="font-semibold bg-indigo-600 text-white px-2 py-1 rounded inline-block">
                09.30 - 10.00 น.
            </div>
            <div className="md:col-span-3">
              <h2 className="font-bold text-lg text-gray-900">KM/IM Show and Share (ทีมละ 7 นาที)</h2>
              <ul className="list-disc list-inside text-gray-800 mt-0 space-y-1">
                <li>ฝคท., ฝพท., ฝยท. นำเสนอผลงาน 1 ฝ่าย 1 นวัตกรรม</li>
              </ul>
            </div>
          </div>

          {/* กำหนดการ 10.00 */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
            <div className="font-semibold bg-indigo-600 text-white px-2 py-1 rounded inline-block">
                10.00 - 10.15 น.
            </div>
            <div className="md:col-span-3">
              <h2 className="font-bold text-lg text-gray-900">KM Talk (ช่วงที่ 1)</h2>
              <ul className="list-disc list-inside text-gray-800 mt-0 space-y-1">
                <li>ถอดความรู้ผู้เกษียณ (พี่ซ้ง, พี่สม)</li>
              </ul>
            </div>
          </div>

          {/* กำหนดการ 10.15 */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
            <div className="font-semibold bg-indigo-600 text-white px-2 py-1 rounded inline-block">
                10.15 - 10.25 น.
            </div>
            <div className="md:col-span-3">
              <h2 className="font-bold text-lg text-gray-900">ประกาศผลผู้ชนะ KM/IM Show and Share</h2>
              <ul className="list-inside text-gray-800 mt-0 space-y-1">
                <li className="flex items-start gap-2">
                  <Ticket className="w-5 h-5 text-green-700 mt-1" />
                  Lucky Draw (ครั้งที่ 2)
                </li>
              </ul>
            </div>
          </div>

          {/* กำหนดการ 10.25 */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
            <div className="font-semibold bg-indigo-600 text-white px-2 py-1 rounded inline-block">
                10.25 - 10.50 น.
            </div>
            <div className="md:col-span-3">
              <h2 className="font-bold text-lg text-gray-900">อัพเดท Technology Trend 2025 (ช่วงที่ 1)</h2>
              <ul className="list-disc list-inside text-gray-800 mt-0 space-y-1">
                <li>
                  <b>คุณศักดิ์ประเสริฐ อภิวัฒนเดช</b> - The Bright and The Dark Side of AI
                </li>
              </ul>
            </div>
          </div>

          {/* กำหนดการ 10.50 */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
            <div className="font-semibold bg-indigo-600 text-white px-2 py-1 rounded inline-block">
                10.50 - 11.15 น.
            </div>
            <div className="md:col-span-3">
              <h2 className="font-bold text-lg text-gray-900">อัพเดท Technology Trend 2025 (ช่วงที่ 2)</h2>
              <ul className="list-disc list-inside text-gray-800 mt-0 space-y-1">
                <li>
                  <b>คุณกล้า ตั้งสุวรรณ</b> - Strategic Moves in the AI Era with Data-Driven Insights
                </li>
              </ul>
            </div>
          </div>

          {/* กำหนดการ 11.15 */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
            <div className="font-semibold bg-indigo-600 text-white px-2 py-1 rounded inline-block">
                11.15 - 11.30 น.
            </div>
            <div className="md:col-span-3">
              <h2 className="font-bold text-lg text-gray-900">KM Talk (ช่วงที่ 2)</h2>
              <ul className="list-disc list-inside text-gray-800 mt-0 space-y-1">
                <li>สัมภาษณ์พี่ช่าง กปน.</li>
                <li>ผู้ชนะจากการประกวด KM Reward</li>
              </ul>
            </div>
          </div>

          {/* กำหนดการ 11.30 */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
            <div className="font-semibold bg-indigo-600 text-white px-2 py-1 rounded inline-block">
                11.30 - 11.45 น.
            </div>
            <div className="md:col-span-3">
              <h2 className="font-bold text-lg text-gray-900">OPA/LL Talk</h2>
              <ul className="list-disc list-inside text-gray-800 mt-0 space-y-1">
                <li>ผู้เข้ารอบสุดท้าย 6 ทีม (จากการประกวด OPA/LL) ร่วมแลกเปลี่ยนเรียนรู้บนเวที</li>
              </ul>
            </div>
          </div>

          {/* กำหนดการ 11.45 */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
            <div className="font-semibold bg-indigo-600 text-white px-2 py-1 rounded inline-block">
                11.45 - 11.55 น.
            </div>
            <div className="md:col-span-3">
              <h2 className="font-bold text-lg text-gray-900">ประกาศผลผู้ชนะ OPA/LL</h2>
              <ul className="list-inside text-gray-800 mt-0 space-y-1">
                <li className="flex items-start gap-2">
                  <Ticket className="w-5 h-5 text-green-700 mt-1" />
                  Lucky Draw (ครั้งที่ 3)
                </li>
              </ul>
            </div>
          </div>

          {/* กำหนดการ 12.00 */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
            <div className="font-semibold bg-indigo-600 text-white px-2 py-1 rounded inline-block">
                11.55 - 12.00 น.
            </div>
            <div className="md:col-span-3">
              <h2 className="font-bold text-lg text-gray-900">พิธีปิด</h2>
              <ul className="list-inside text-gray-800 mt-0 space-y-1">
                <li>- ชวก.(ท) กล่าวปิดงาน</li>
                <li className="flex items-start gap-2">
                  <Ticket className="w-5 h-5 text-green-700 mt-1" />
                  Lucky Draw (ครั้งที่ 4)
                </li>
              </ul>
            </div>
          </div>

          {/* กำหนดการ 12.00 */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
            <div className="font-semibold bg-indigo-600 text-white px-2 py-1 rounded inline-block">
                12.00 - 12.15 น.
            </div>
            <div className="md:col-span-3">
              <h2 className="font-bold text-lg text-gray-900">ผู้เข้าร่วมงานเยี่ยมชมนิทรรศการ (ด้านนอกห้อง)</h2>
              <ul className="list-disc list-inside text-gray-800 mt-0 space-y-1">
                <li>ชมนิทรรศการ / กิจกรรมเกม / รับของที่ระลึก</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

<footer className="relative text-white py-8 overflow-hidden">
  {/* พื้นหลัง SVG ลวดลายแบบ tech */}
  <div className="absolute inset-0 z-0 bg-blue-700">
    <svg
      className="absolute inset-0 w-full h-full opacity-10"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      viewBox="0 0 100 100"
    >
      <defs>
        <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
          <path d="M10 0L0 0 0 10" stroke="white" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  </div>

  {/* เนื้อหา Footer */}
  <div className="relative z-10 max-w-4xl mx-auto text-center space-y-2">
    <p className="text-xl font-semibold">KM/IM DAY Digital Technology 2025</p>
    <p className="text-sm">9 JULY 2025</p>
  </div>
</footer>


    </main>
  )
}
