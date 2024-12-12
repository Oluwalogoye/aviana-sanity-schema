import React from 'react';
import styles from './componentStyles'

const FramedCallToAction = ({ content }) => {
  const {backgroundImg, framedItems} = content;

  const imageUrl = backgroundImg?.asset?.url
  const additionalStyles = {
    backgroundImage: `url('${imageUrl}')`
  }

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


  return (
    // <div>Hello</div>
    <div style={{ ...styles.framedCallToAction, ...additionalStyles }}>
      {framedItems && framedItems.map(({ title, description }, index) => (
        
        <div key={index} style={styles.ctaItem}>
          <h3 style={styles.ctaTitle}>{title}</h3>
          {
            description && toPlainText(description).split('\n\n').map((description, index) => (
              <p key={index} style={styles.ctaDescription}>{description}</p>
            ))
          }
        </div>
      ))}
    </div>
  )

};

export default FramedCallToAction;