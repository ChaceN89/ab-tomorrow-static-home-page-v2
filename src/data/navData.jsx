/*

*/


import { FaVideo, FaGlobe, FaBolt, FaPaw, FaBook,  } from "react-icons/fa";
import { GiFlatPawPrint } from "react-icons/gi";

import { FaQuestionCircle } from "react-icons/fa";     // FAQs
import { FaUsers } from "react-icons/fa";              // Board of Directors
import { FaHandshake } from "react-icons/fa";          // Partners
import { FaCalendarAlt } from "react-icons/fa";        // Events
import { FaEnvelope } from "react-icons/fa";           // Contact



export const scrollLinks = [
  { label: "Home", scrollTo: "hero" },
  { label: "Intro", scrollTo: "intro" },
  { label: "Tools", scrollTo: "tools" },
  { label: "Education", scrollTo: "education" },
  { label: "About", scrollTo: "about" }
];

export const toolsDropDown = {
  title: "Tools",
  list:[
    {label: "Videos", icon: <FaVideo />, href: "https://www.simulator.albertatomorrow.ca/#/dashboard/videos" },
    {label: "Land Use Simulator", icon: <FaGlobe />, href: "https://www.simulator.albertatomorrow.ca" },
    {label: "Energy Tomorrow", icon: <FaBolt />, href: "https://www.simulator.albertatomorrow.ca" },
    {label: "Wildlife Tomorrow", icon: <GiFlatPawPrint />, href: "https://www.simulator.albertatomorrow.ca" },
    {label: "Lesson Plans", icon: <FaBook />, href: "https://www.simulator.albertatomorrow.ca/#/lesson-plans" },
  ]
}

export const learnMoreDropDown = {
  title: "Learn More",
  list:[
    { label: "FAQs", icon: <FaQuestionCircle />, router: "/FAQs" },
    { label: "Board of Directors", icon: <FaUsers />, router: "/Board-of-Directors" },
    { label: "Partners", icon: <FaHandshake />, router: "/Partners" },
    { label: "Events", icon: <FaCalendarAlt />, router: "/Events" },
    { label: "Contact", icon: <FaEnvelope />, router: "/Contact" },
  ]
}
