/**
 * @file BoardOfDirectors.jsx
 * @module BoardOfDirectors
 * @desc Displays the Board of Directors section with individual member cards.
 *
 * @author Chace Nielson
 * @created Mar 14, 2025
 * @updated Mar 14, 2025
 */

import React from 'react'
import { boardOfDirectors } from '../../data/boardOfDirectorsData'
import MemberCard from '../page-components/MemberCard'
import PageTitle from '../routing/PageTitle'
import PageHeader from '../common/PageHeader'

export default function BoardOfDirectors() {

  return (
    <div className='page-width '>
      <PageTitle title='Board of Directors'/>
      <div className='page'>
        <PageHeader title='Board of Directors' subtitle="Meet the individuals guiding Alberta Tomorrow’s mission for sustainable land-use planning." />
      </div>
    </div>
  )

  return (
    <section className='px-6 max-w-7xl mx-auto mt-20'>
      <PageTitle title='Board of Directors'/>
      <h1 className='text-4xl font-semibold text-center mb-12'>Board of Directors</h1>
      <p className="text-center text-lg text-gray-700 mb-10">
        Meet the individuals guiding Alberta Tomorrow’s mission for sustainable land-use planning.
      </p>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center'>
        {boardOfDirectors.map((member, index) => (
          <MemberCard key={index} member={member} />
        ))}
      </div>
    </section>
  )
}
