import React from 'react'
import QuestionDropdown from '../faq/QuestionDropdown'
import { faqData } from '../../data/faqData'

export default function FAQs() {
  return (
    <div className="section grid grid-cols-1 lg:grid-cols-2 gap-10">
      {/* Loop through faqData */}
      {faqData.map((faq, index) => (
        <QuestionDropdown key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  )
}
