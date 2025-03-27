import React from 'react'
import DonateButton from '../navbar/DonateButton'
import enviromentalPartner from '@/assets/external-logos/1ftp-EnvironmentalPartner-horizontal-FullColor.png';


export default function SupportUs() {
  return (
    <div>
      <h3 className="text-xl font-semibold">Support Alberta Tomorrow</h3>
      <p className="mt-2 text-sm">Help keep Alberta Tomorrow FREE by making a donation!</p>
      <div className="mt-4 flex  gap-2 justify-start items-center " >
        <DonateButton footer/>
        <img src={enviromentalPartner} alt="Tru Earth" className=" w-36 lg:w-40 " />
      </div>
    </div>
  )
}
