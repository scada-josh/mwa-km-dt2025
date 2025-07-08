'use client'

import { LiffProfileProps } from "@/types/liff";
import { reflectionLur } from "@/utils/actions";
// import { insertLur } from "@/utils/actions/insertLur";
import { useActionState, useState } from "react";
import { useFormStatus } from "react-dom";

interface Props {
  profile: LiffProfileProps
}

const SubmitButton = () => {
  const { pending } = useFormStatus()
  return <button type="submit" disabled={pending} className="w-full bg-blue-600 text-white font-semibold py-3 rounded-xl hover:bg-blue-700 transition">
    {pending ? 'Submitting...' : 'ส่ง Reflection (สะท้อนการเรียนรู้)'}
  </button>
}


export default function ReflectionPage({ profile }: Props) {
  const [lurMessage, lurFormAction] = useActionState(reflectionLur, null)

  console.log(lurMessage)

  

  const [formData, setFormData] = useState({
    learn: "",
    unlearn: "",
    relearn: "",
  });


  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   // TODO: connect to backend, API or store

  //   // console.log("Reflection Submitted:", formData);
  //   alert("ขอบคุณสำหรับการสะท้อนการเรียนรู้ของคุณ!");
  // };

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-blue-50 p-4 md:p-12">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-8 space-y-6 border border-blue-100">

        {lurMessage && <h3>{lurMessage}</h3> }
        

        <h1 className="text-3xl font-bold text-blue-700 text-center mb-2">
          ✍️ Reflection <br/>(สะท้อนการเรียนรู้)
        </h1>
        
        <p className="text-center text-gray-500 mb-6">
          กระซิบดังๆ ให้เรารู้ <br/>เพื่อพัฒนาและเรียนรู้ไปด้วยกัน
        </p>

        {/* <form onSubmit={handleSubmit} className="space-y-6" action={reflectionLur}> */}
        <form  className="space-y-6" action={lurFormAction}>
          <div>
            <input type="hidden" name="userId" value={profile.userId} />

            <label className="block font-medium text-gray-700 mb-1">
              1. ความรู้ที่ฉันได้เรียนรู้ใหม่ (Learn)
            </label>
            <textarea
              name="learn"
              rows={3}
              className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-blue-400"
              value={formData.learn}
              onChange={handleChange}
              placeholder="พิมพ์สิ่งที่คุณได้เรียนรู้ใหม่..."
              required
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-1">
              2. ความเชื่อเดิมที่ฉันควรเปลี่ยน (Unlearn)
            </label>
            <textarea
              name="unlearn"
              rows={3}
              className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-blue-400"
              value={formData.unlearn}
              onChange={handleChange}
              placeholder="พิมพ์ความเชื่อเดิมที่ควรเปลี่ยน..."
              required
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-1">
              3. สิ่งที่ฉันจะนำกลับไปปรับใช้ (Relearn)
            </label>
            <textarea
              name="relearn"
              rows={3}
              className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-blue-400"
              value={formData.relearn}
              onChange={handleChange}
              placeholder="พิมพ์สิ่งที่คุณจะนำไปปรับใช้..."
              required
            />
          </div>

          <SubmitButton />
          {/* <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-xl hover:bg-blue-700 transition"
          >
            ส่ง Reflection (สะท้อนการเรียนรู้)
          </button> */}
        </form>
      </div>
    </main>
  );
}
