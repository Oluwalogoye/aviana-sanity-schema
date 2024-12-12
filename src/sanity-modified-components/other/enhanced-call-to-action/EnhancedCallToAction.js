// EnhancedCallToAction.js
import React from 'react';
import styles, { Button } from './componentStyles';
import EnhancedItem from './EnhancedItem/EnhancedItem'

const EnhancedCallToAction = ({content}) => {
  if (content == null)
    return (<div>EnhancedCallToAction: content null</div>)
  
  const {enhancedItems, title, backgroundImage} = content;

  const backgroundImageUrl = backgroundImage?.asset?.url; 

  const additionalStyles = {
    backgroundImage: `url('${backgroundImageUrl}')`
  }
   
    return (
      <div style={{ ...styles.enhancedContainer, ...additionalStyles }}>
         <h2 style={styles.enhancedCtaHeader}>{title}</h2>
         <div style={styles.headersContainer}>
             {enhancedItems && enhancedItems.map((item, index) => (
                <EnhancedItem key={index} content={item} />
          ))}
        </div>
      </div>
    )
}

export default EnhancedCallToAction;