import React from 'react'

import CallToAction from '../sanity-modified-components/call-to-action/CallToAction'
import InfoComponent from '../sanity-modified-components/info-component/InfoComponent'

import PegasusComponent from '../sanity-modified-components/pegasus-component/PegasusComponent'
import NewsComponent from '../sanity-modified-components/news-component/NewsComponent'

import FramedCallToAction from '../sanity-modified-components/other/framed-call-to-action/FramedCallToAction'
import EnhancedCallToAction from '../sanity-modified-components/other/enhanced-call-to-action/EnhancedCallToAction'

import Frame from '../sanity-modified-components/other/frame/Frame'
import People from '../sanity-modified-components/other/people/People';

import ContentSection from '../sanity-modified-components/other/content-section/ContentSection';
import PressSection from '../sanity-modified-components/press-section/PressSection'

import Profile from '../sanity-modified-components/other/profile/Profile'

import InfoSection from '../sanity-modified-components/contact-us/InfoSection/InfoSection'
import ContactForm from '../sanity-modified-components/contact-us/ContactForm/ContactForm'

import FeaturedComponent from '../sanity-modified-components/other/featured-component/FeaturedCompany'

// New function to handle component rendering based on block type
const renderComponent = (blockType, content, furtherContent) => {
  switch (blockType) {
    case 'callToAction': 
      return <CallToAction content={content} />
    case 'infoComponent':
      return <InfoComponent content={content} />
    case 'pegasusComponent':
      return <PegasusComponent content={content} />
    case 'newsComponent':
      return <NewsComponent content={furtherContent} />
    case 'featuredComponent':
      return <FeaturedComponent content={furtherContent} />
    case 'frame':
      return <Frame content={furtherContent} />
    case 'framedCallToAction':
      return <FramedCallToAction content={furtherContent} />
    case 'contentSection':
      return <ContentSection content={content} />
    case 'enhancedCallToAction':
      return <EnhancedCallToAction content={furtherContent} />
    case 'people':
      return <People content={content} />
    case 'pressSection':
      return <PressSection content={furtherContent} />
    case 'profile':
      return <Profile content={content} />
    case 'infoSection':
      return <InfoSection content={content} />
    case 'contactForm':
      return <ContactForm content={content}/>
    default:
      return <div>Some Block Type</div>
  }
}

export default renderComponent;