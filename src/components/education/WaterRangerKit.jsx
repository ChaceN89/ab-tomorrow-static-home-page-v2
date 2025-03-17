import React from 'react'
import waterRangers from '../../assets/ui-elements/water-rangers-kit.jpg';


export default function WaterRangerKit() {
  return (
    <div className="mt-16 flex flex-wrap items-center justify-center gap-10">
      <img
        src={waterRangers} // Update this with the correct image path
        alt="Water Rangers Testing Kit"
        className="w-full md:w-1/3 rounded-lg shadow-lg"
      />
      <div className="max-w-lg text-left text-gray-200">
        <h3 className="text-2xl font-bold">Water Rangers Testing Kits</h3>
        <p className="mt-2">
          Do you want to take your students out to test water but don’t have the equipment? No problem!
          Check out our Water Rangers test kits. Not only are you getting great testing equipment, you are
          helping Alberta Tomorrow at the same time! A percentage of sales goes back to Alberta Tomorrow to keep the platform completely free for you!
        </p>
      </div>
    </div>
  )
}
