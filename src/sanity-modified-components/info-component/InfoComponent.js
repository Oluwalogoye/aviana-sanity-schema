import React from 'react';

import styles from './componentStyles'
import {
   Details
} from './componentStyles'

const InfoComponent = ({ content }) => {

  if (!content) return <div>InfoComponent: content null</div>

  const { header, paragraphs, dots } = content;

  // Convert Sanity Block to plain Text
  function toPlainText(blocks = []) {

    return blocks.map(block => {

      if ( block._type !== 'block' || !block.children ) {

        return '';

      }

      return block.children.map(child => child.text).join('');

    }).join('\n\n');

  }

  const plainTextParagraphs = toPlainText(paragraphs);

  return (
    <div style={styles.advisorContainer}>
      <Details>
        { dots && <img src={dots.asset.url} alt="Decorative dots" />}
      </Details>
      <div style={styles.advisorHeader}>
        <h1 style={styles.advisorHeaderH1}>{header}</h1>
      </div>
      <div style={styles.advisorContent}>
        { plainTextParagraphs.split('\n\n').map((paragraph, index) => (
          <p key = {index} style={styles.paragraph}>{paragraph}</p>
        ))}
      </div>
    </div>
  )
}

export default InfoComponent;