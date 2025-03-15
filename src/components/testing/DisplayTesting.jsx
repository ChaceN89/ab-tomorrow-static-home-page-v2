/**
 * @file DisplayTesting.jsx
 * @module DisplayTesting
 * @description A React component that conditionally renders development-only testing components.
 * This component checks the `VITE_ENVIRONMENT` environment variable to ensure it only renders in development mode.
 * It includes components for testing purposes, such as `TailwindBreakPoints` and `DarkModeTestingToggle`.
 * 
 * @notes
 * - This component ensures the `TailwindBreakPoints` and `DarkModeTestingToggle` components are only visible in development mode.
 * - Checks the `VITE_ENVIRONMENT` environment variable for the value `development`.
 * 
 * @author Chace Nielson
 * @since 1.0
 * @created 2025-01-22
 * @updated 2025-01-22
 */
import React from 'react'
import TailwindBreakPoints from './TailwindBreakPoints'


export default function DisplayTesting() {
  // Check if the environment is development
  const isDevelopment = import.meta.env.VITE_ENVIRONMENT === 'development';

  // Render children only if in development mode
  if (!isDevelopment) return null;

  // Change title to append "Dev | " to front if in development mode to differentiate tabs when looking at the deployed site
  if (isDevelopment && !document.title.startsWith('Dev | ')) {
    document.title = `Dev | ${document.title}`;
  }

  return ( <TailwindBreakPoints/> );
  
}

/*
 return (
    <div >

<DisplayTesting/>

    <div>
    <div className="icomoon">The Alberta Tomorrow simulator is an educational tool that helps you to understand the process of sustainable planning to balance land-uses such as agriculture, o</div>
    <div className="icomn">The Alberta Tomorrow simulator is an educational tool that helps you to understand the process of sustainable planning to balance land-uses such as agriculture, o</div>
    <div className="icomoon-"></div>
    <div className="icomoon-"></div>


    </div>



<ColorBoxes/>

    <div className="flex justify-center items-center h-96  bg-gradient-to-r from-green-400 to-blue-500 gap-2 flex-wrap">
      <h1 className="p-10 border-2 bg-avocado-400">avocado-400</h1>
      <h1 className="p-10 border-2 bg-primary">primary</h1>
      <h1 className="p-10 border-2 bg-mixed">Mixed</h1>
      <h1 className="p-10 border-2 bg-[#FFD700]">[#FFD700]</h1>
      <h1 className="p-10 border-2 bg-red-500/60">red-500 60% opacity</h1>
      <div class="size-24 rounded-full bg-conic/decreasing from-violet-700 via-lime-300 to-violet-700"></div>
      <div class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-10">aaa</div>

    </div>



    <ColorSlider/>


    
    <div className="bg-[url('https://picsum.photos/600/500')] ">
      <div className="text-white font-bold mix-blend-difference p-20">Overlapping Content - Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ipsa dignissimos exercitationem illum repellat. Omnis, rem adipisci, reiciendis optio natus nam numquam unde, alias ad architecto recusandae fuga cum veritatis? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos dolorum doloribus architecto impedit accusantium consequuntur, aspernatur, eligendi, corrupti adipisci commodi possimus aliquid tempora quaerat et labore dolor cum rem perferendis?</div>
    </div>




    </div>
  )

*/
