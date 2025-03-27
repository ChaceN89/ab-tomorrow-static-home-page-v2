import React from 'react'
import QuestionDropdown from '../page-components/QuestionDropdown'
import { faqData } from '../../data/faqData'
import PageTitle from '../routing/PageTitle'
import PageHeader from '../common/PageHeader'

export default function FAQs() {

  return (
    <div className='page-width '>
      <PageTitle title='FAQs'/>
      <div className='page'>
        <PageHeader title='Frequently Asked Questions' subtitle="Find answers to common questions about Alberta Tomorrow." />
        {faqData.map((faq, index) => (
        <QuestionDropdown key={index} question={faq.question} answer={faq.answer} />
      ))}
      </div>
    </div>
  )
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
