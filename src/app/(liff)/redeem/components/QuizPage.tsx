// app/quiz/page.tsx
'use client';

import { useState } from 'react';

type Question = {
  id: number;
  question: string;
  choices: string[];
  correctIndex: number;
};

const questions: Question[] = [
  {
    id: 1,
    question: 'Knowledge Management (KM) คืออะไร?',
    choices: [
      'A. การบริหารโครงการเพื่อให้เสร็จตรงเวลา',
      'B. การจัดการและถ่ายทอดองค์ความรู้ในองค์กร',
      'C. การจัดซื้อจัดจ้างอย่างเป็นระบบ',
    ],
    correctIndex: 1,
  },
  {
    id: 2,
    question: 'วัตถุประสงค์หลักของการทำ Knowledge Map คืออะไร?',
    choices: [
      'A. แสดงตำแหน่งที่ตั้งของพนักงานในแผนกต่าง ๆ',
      'B. ระบุตำแหน่งและความเชื่อมโยงขององค์ความรู้ที่สำคัญในองค์กร',
      'C. จัดตารางเวรของพนักงานแต่ละคน',
    ],
    correctIndex: 1,
  },
  {
    id: 3,
    question: 'ข้อใดเป็นตัวอย่างของ "Tacit Knowledge"?',
    choices: [
      'A. คู่มือการใช้งานโปรแกรม',
      'B. รายงานประจำเดือน',
      'C. เทคนิคเฉพาะตัวของช่างที่ไม่มีในเอกสาร',
    ],
    correctIndex: 2,
  },
];

export default function QuizPage() {
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>(Array(questions.length).fill(-1));
  const [showFeedback, setShowFeedback] = useState<boolean[]>(Array(questions.length).fill(false));

  const handleSelect = (qIndex: number, choiceIndex: number) => {
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[qIndex] = choiceIndex;
    setSelectedAnswers(updatedAnswers);

    const updatedFeedback = [...showFeedback];
    updatedFeedback[qIndex] = true;
    setShowFeedback(updatedFeedback);
  };

  const isAllCorrect = selectedAnswers.every((ans, idx) => ans === questions[idx].correctIndex);

  const handleSubmit = () => {
    alert('✅ ยินดีด้วย! คุณตอบถูกทุกข้อแล้ว');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-12">
      <div className="max-w-3xl w-full space-y-6">
        <h1 className="text-2xl font-bold mb-4 text-center text-blue-800">
          แบบทดสอบ Knowledge Management
        </h1>

        {questions.map((q, qIndex) => (
          <div
            key={q.id}
            className="bg-white shadow-md rounded-2xl p-6 border border-gray-200 space-y-4"
          >
            <p className="text-lg font-medium text-gray-800">
              คำถามที่ {qIndex + 1}: {q.question}
            </p>

            <div className="space-y-2">
              {q.choices.map((choice, choiceIndex) => {
                const isSelected = selectedAnswers[qIndex] === choiceIndex;
                const isCorrect = q.correctIndex === choiceIndex;
                const show = showFeedback[qIndex];

                return (
                  <button
                    key={choiceIndex}
                    onClick={() => handleSelect(qIndex, choiceIndex)}
                    className={`
                      w-full text-left px-4 py-2 rounded-md border transition
                      ${
                        isSelected
                          ? isCorrect && show
                            ? 'bg-green-100 border-green-500 text-green-800'
                            : !isCorrect && show
                            ? 'bg-red-100 border-red-500 text-red-800'
                            : 'bg-blue-100 border-blue-400 text-blue-800'
                          : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
                      }
                    `}
                  >
                    {choice}
                  </button>
                );
              })}
            </div>
          </div>
        ))}

        <button
          onClick={handleSubmit}
          disabled={!isAllCorrect}
          className={`w-full py-3 rounded-xl text-white font-semibold text-lg transition 
            ${isAllCorrect ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-400 cursor-not-allowed'}
          `}
        >
          ส่งคำตอบ
        </button>
      </div>
    </div>
  );
}
