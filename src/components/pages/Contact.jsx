import React from 'react';

import PageHeader from '../common/PageHeader';
import SupportUs from '../footer/SupportUs';
import SocialMediaIcons from '../footer/SocialMediaIcons';
import ContactInfo from '../common/ContactInfo';
import PageTitle from '../routing/PageTitle';

export default function Contact() {

  return (
    <div className='page-width'>
      <PageTitle title='Contact Us'/>
      <div className='page'>
        <PageHeader
          title="Connect With Us"
          subtitle="Have a question or want to get involved? Reach out to us!"
        />
        <div className='grid  grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10'>
          <ContactInfo address/>
          <SupportUs/>
          <SocialMediaIcons title="Follow Us"/>
        </div>
      </div>
    </div>
  )
}
