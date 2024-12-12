import React from 'react'
import styles, { MainContainer, NewsContainer } from './componentStyles'

import CardComponent from './NewsCard/CardComponent'

function NewsComponent({ content }) {
  if (content == null)
    return (<div>PegasusComponent: content null</div>)
  
  const { title, newsItems, dots } = content; 
  console.log("In NewsComponent, content is", content);
  
  return (
    <MainContainer style={{}}>
      {dots && <img src={dots} style={styles.mainContainer.dots} alt="Decorative dots"/>}
      {title && <h3>{title}</h3>}
      <h3></h3> {/*This seems redundant, consideer removing */} 

      <NewsContainer>
        {newsItems?.length && newsItems.map((item, index) => {
          return (
            <CardComponent
              key={index}
              title={item.title}
              imageSrc={item.imageSrc}
              caption={item.caption}
              buttonText={item.buttonText || ''}
              // Removed: onButtonClick and onClick // No click actions in preview
            />
        )})}
      </NewsContainer>
    </MainContainer>
  )
} 

// ... {rest of the code with defaultProps and propTypes remains the same}

export default NewsComponent

