import React from 'react';
import HexList from '../TeacherTools/HexList';
import CurriculumCards from '../TeacherTools/CurriculumCards';
import { keyFeatures, additionalResources, courseCurriculumConnections } from '../../../data/teacherToolsData';

export default function TeacherTools() {
  return (
    <div id='intro' className="bg-primary py-16 px-6 lg:px-20 overflow-hidden">
      <div className='flex'>
      <HexList title={"Key features"} hexList={keyFeatures} />
      <div className='space-y-6'> 
        <p>All Lesson Plans can be found in the Teacher Resources Section in the simulator.</p>
        <p>For a complete list of Alberta Program of Studies Connections and Suggested Activities click here.</p>
        <p>There are curriculum links to many other grades and subjects. New lesson plans and materials are continually under development.</p>
        <HexList hexList={additionalResources} />

        <a href="https://simulator.albertatomorrow.ca" target="_blank" rel="noopener noreferrer" className="btn-blue inline-block">
          Sign up
        </a>
        <a href=" https://simulator.albertatomorrow.ca/#/dashboard/resources" target="_blank" rel="noopener noreferrer" className="btn-blue inline-block">
          Lesson Plans
        </a>


        </div>

      </div>
<CurriculumCards list={courseCurriculumConnections} />
    </div>
  )

}