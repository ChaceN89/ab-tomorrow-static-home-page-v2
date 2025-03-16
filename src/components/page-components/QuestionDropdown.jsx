import React, { useState } from 'react'

export default function QuestionDropdown({ question, answer }) {
  // State to manage the visibility of the answer
  const [isOpen, setIsOpen] = useState(false)

  const toggleAnswer = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="w-full max-w-4xl border-b-2 p-4 border-2 rounded-lg border-gray-200">
      <div className="flex justify-between items-center cursor-pointer" onClick={toggleAnswer}>
        <h3 className="text-xl font-semibold">{question}</h3>
        <span className="text-xl">{isOpen ? '-' : '+'}</span>
      </div>
      <div
        className={`mt-4 text-gray-700 transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
        dangerouslySetInnerHTML={{ __html: answer }}
      />
    </div>
  )
}
