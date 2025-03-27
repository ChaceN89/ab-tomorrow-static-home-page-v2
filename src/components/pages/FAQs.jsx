import React from 'react'
import QuestionDropdown from '../page-components/QuestionDropdown'
import { faqData } from '../../data/faqData'
import PageTitle from '../routing/PageTitle'

export default function FAQs() {
  return (
    <div className="section grid grid-cols-1 lg:grid-cols-2 gap-10 mt-20">
      <PageTitle title="FAQs" />
      {/* Loop through faqData */}
      {faqData.map((faq, index) => (
        <QuestionDropdown key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  )
}
