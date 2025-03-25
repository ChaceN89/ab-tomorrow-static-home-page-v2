/**
 * @file introData.js
 * @module introData
 * @desc Contains structured content for the Intro page, including title, description, and media blocks
 *
 * @author Chace Nielson
 * @created Mar 25, 2025
 * @updated Mar 25, 2025
 */

import simHistoric from '../assets/simulator-screenshots/sim-8-new-historic.jpg';
import simClimate from '../assets/simulator-screenshots/sim-7-new-climate-planning.jpg';

export const introData = {
  title: "Shape the Alberta of Tomorrow",
  description: (
    <>
      <p>
        Alberta’s rapid growth has built a strong economy — but it’s also placed pressure on the 
        <span className="font-semibold text-accent-alt"> forests, grasslands, and rivers</span> that sustain it.
      </p>
      <p>
        <span className="font-semibold text-accent-alt">Alberta Tomorrow</span> is an interactive educational simulator that helps you explore sustainable land-use planning. Compare past and present landscapes, create your own development plans, and analyze the impact of agriculture, oil and gas, forestry, and more. You can even geotag photos, videos, and water data as part of your learning journey.
      </p>
    </>
  ),
  media: [
    {
      type: "video",
      src: "MHDH_m0agFM",
      title: "Award-Winning Education",
      description: (
        <p>
          The <span className='font-semibold text-accent-alt'>Alberta Emerald Foundation </span>recognized Alberta Tomorrow for its impact on sustainability education, emphasizing its role in fostering awareness and understanding of responsible land use and environmental stewardship.
        </p>
      ),
    },
    {
      type: "video",
      src: "Q6-l7HymJTQ",
      title: "Planning for a Better Future",
      description: (
        <div className="space-y-2">
          <p>
            The Alberta Tomorrow simulator is an educational tool that helps users explore sustainable land-use planning.
          </p>
          <p>
            It shows how agriculture, oil and gas, and forestry impact the environment over time, using real landscape imagery. Users can also collect and save water data, images, videos, and other field observations.
          </p>
        </div>
      ),
    },
    {
      type: "image",
      src: simHistoric,
      alt: "Historic Landscape Simulation",
      title: "Historic Landscape Simulation",
      description: (
        <p>
          Visualize historical changes in Alberta’s natural landscapes using real imagery. See the current landscape in 30+ areas in Alberta.
        </p>
      ),
    },
    {
      type: "image",
      src: simClimate,
      alt: "Climate Planning Simulation",
      title: "Climate Planning Simulation",
      description: (
        <p>
          Draw your own plan for Alberta and see the potential outcomes!
        </p>
      ),
    },
  ],
};
