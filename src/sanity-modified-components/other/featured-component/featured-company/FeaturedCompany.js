import React from 'react';

const FeaturedCompany = ({name, logo, url}) => {
  
  return (
    <a href={url}>
      <img src={logo.asset.url} alt={name}/>
    </a>
  )
}

export default FeaturedCompany;