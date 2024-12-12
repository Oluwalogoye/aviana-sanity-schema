import React from 'react'

import { 
  FeaturedLogosContainer
} from './componentStyles'
import FeaturedCompany from './featured-company/FeaturedCompany'

const FeaturedComponent = ({ content }) => {

  const { title, featuredCompanies } = content;

  return (
    <FeaturedLogosContainer>
      <h2>{title}</h2>
      <div className="logos">
        {featuredCompanies.map(({logo, url}, index) => (
          <FeaturedCompany 
            key={index}
            logo={logo}
            url={url}
          />
        ))}
      </div>
    </FeaturedLogosContainer>
  )

}

export default FeaturedComponent;