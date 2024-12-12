import React from 'react';
import styles, { Button } from './componentStyles'; // Import styles and Button
import { toCamelCase } from '../../utils' 


const CallToAction = ({ content }) => {
  if (content == null) 
    return (<div>CallToAction: content null</div>)
  

  const { logo, title, descriptions, hideLogo, backgroundImage, link, buttonName } = content;
  
  console.log("content", content);

  const backgroundImageUrl = backgroundImage?.asset?.url;
  const backgroundStyle = {
    backgroundImage: `url('${backgroundImageUrl}')`
  }

  const logoImageUrl = logo?.asset?.url;
  // const logoImageStyle = {
  //   backgroundImage: `url('${logoImageUrl}')`
  // }



  // Convert Sanity Block to plain paragraph
  function toPlainText(blocks = []) {
    return blocks
      // loop through each block
      .map(block => {
        // if it's not a text block with children, 
        // return nothing
        if (block._type !== 'block' || !block.children) {
          return ''
        }
        // loop through the children spans, and join the
        // text strings
        return block.children.map(child => child.text).join('')
      })
      // join the paragraphs leaving split by two linebreaks
      .join('\n\n')
  }

  const plainTextDescriptions = descriptions ? toPlainText(descriptions): '';

  const logoClass =  hideLogo ? styles.logoHidden : styles.logo;
  return (
    <div style={{ ...styles.rollinsContainer, ...backgroundStyle }}>
      {!hideLogo && <img src={logoImageUrl} style={{...logoClass}} alt="Logo" />}
      <h3 style={styles.title}>{title}</h3>
      {
        plainTextDescriptions.split('\n\n').map((description, index) => (
          <p key={index} style={styles.description}>{description}</p>
        ))
      }
      
      {buttonName && (
        <Button>
          <span>{buttonName}</span>
        </Button>
        
      )}
    </div>
  )
}

export default CallToAction;