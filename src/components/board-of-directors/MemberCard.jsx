/**
 * @file MemberCard.jsx
 * @module MemberCard
 * @desc Renders an individual board member’s profile card.
 *
 * @author Chace Nielson
 * @created Mar 14, 2025
 * @updated Mar 14, 2025
 */

import React from 'react'

export default function MemberCard({ member }) {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center text-center transition hover:shadow-xl border-1 border-black ">
      <img
        src={`/board-of-directors/${member.image}`}
        alt={member.name}
        className="w-52 h-52 object-cover rounded-full border-4 border-gray-300 shadow-md mb-4"
      />
      <h3 className="text-xl font-semibold">{member.name}</h3>
      <p className="text-sm text-gray-600 font-medium">{member.title}</p>
      <div className="w-full h-[2px] bg-black opacity-50 mt-1.5"></div>

      <p className="text-sm text-gray-700 mt-3">{member.bio}</p>
    </div>
  )
}
