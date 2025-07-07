'use client'

import { useLiffProfilePassport } from "@/utils/liff/useLiffProfilePassport"
import Schedule from "./Schedule"
import FormRegister from "./FormRegister"
// import { useEffect, useState } from "react"

export default function MainRegister() {
  // const [loading, setLoading] = useState(true)
  const { profile, error , isRegister} = useLiffProfilePassport()


  //   useEffect(() => {
  //   // จำลองโหลดจาก API
  //   setTimeout(() => {
      
  //     setLoading(false)
  //   }, 1000)
  // }, [])

  //  if (loading) return <p>⏳ กำลังโหลด...</p>


  if (error) return <p>Error: {error}</p>
  if (!profile) return <p>⏳ Loading...</p>

  return (
    <>
      {isRegister ? (
        <>
          <div className="bg-green-100 p-4 rounded">✅ คุณลงทะเบียนแล้ว</div>
          <Schedule />
        </>
      ) : (
        <>
          {/* <div className="bg-red-100 p-4 rounded">❌ ยังไม่ลงทะเบียน</div> */}
          <FormRegister profile={profile}/>
        </>
      )}
    </>
  )
}