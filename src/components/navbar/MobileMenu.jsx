import React, { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { dropdownVariants, scrollLinks, toolsDropDown, learnMoreDropDown } from "../../data/navData";
import LinkItem from './LinkItem';
import { FaChevronDown } from "react-icons/fa";
import { RiScrollToBottomLine } from "react-icons/ri";

import DonateButton from './DonateButton';

function MobileMenuSection({ title, items, isRouter }) {
  return (
    <div className="">
      <div className="text-accent text-sm uppercase tracking-wider mb-2">{title}</div>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index}>
            <LinkItem
              {...(isRouter ? { router: item.router } : { href: item.href })}
              scrollTo={item.scrollTo}
              className="flex items-center gap-2 text-white hover:text-accent-alt w-fit"
            >
              {item.icon}
              {item.label}
            </LinkItem>
          </li>
        ))}
      </ul>
    </div>
  )
}

function MobileMenu({ isOpen }) {
  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isOpen)
    return () => document.body.classList.remove("overflow-hidden")
  }, [isOpen])

  return (
    <div className="md:hidden w-full z-30">
      

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={dropdownVariants}
            className="w-full"
          >
            {/* Sticky Top Divider */}
            <div className="sticky top-0 z-10 ">
              <hr className="border-white border-1 rounded-4xl mt-4 mx-2" />
            </div>
            <div className="absolute sm:hidden bottom-2 right-2 text-secondary">
                        <RiScrollToBottomLine size={24} />
                      </div>

            {/* Scrollable Content */}
            <div className="p-4 max-h-[26rem] overflow-y-auto scroll-element relative grid sm:grid-cols-2 gap-y-4">
              <MobileMenuSection title="Navigation" items={scrollLinks} />
              <MobileMenuSection title={toolsDropDown.title} items={toolsDropDown.list} />  
              <MobileMenuSection title={learnMoreDropDown.title} items={learnMoreDropDown.list} isRouter />
              <div className='py-4'>
                <DonateButton />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default MobileMenu
