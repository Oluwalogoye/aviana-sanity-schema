import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkedAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import styles from './componentStyles'

const InfoSection = ({ content }) => {
  if (content == null)
    return (<div>InfoSection: content null</div>)

  const {
    address,
    descriptions, 
    addressLink, 
    phoneNumber, 
    emailAddress, 
    backgroundImage 
  } = content;

  const backgroundImageUrl = backgroundImage?.asset?.url;
  const additionalStyles = {
    backgroundImage: `url(${backgroundImageUrl})`
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

  const plainTextDescriptions = toPlainText(descriptions);

  return (
    <div style={{ ...styles.pageContainer, ...additionalStyles }}> {/* Apply both styles */}
      <main style={styles.mainContent}>
        {
          descriptions && plainTextDescriptions.split('\n\n').map((description, index) => (
            <h1 key={index}>{description}</h1>
            /* Other content */
          ))
        }
      </main>
      <footer style={styles.pageFooter}>
        {emailAddress && (
          <p style={styles.pageFooterP}>
            <FontAwesomeIcon icon={faEnvelope} style={styles.faIcon} />
            {/* <FontAwesomeIcon icon={'envelope-square'} style={styles.faIcon} /> */}
            <a style={styles.pageFooterLink} href={`mailto:${emailAddress}`}>{emailAddress}</a>
          </p>
        )}
        {address && (
          <p style={styles.pageFooterP}>
            {/* <FontAwesomeIcon icon={faMapMarketAlt} style={styles.faIcon} /> */}
            <FontAwesomeIcon icon={faMapMarkedAlt} style={styles.faIcon} />
            {/* <FontAwesomeIcon icon={'map-pin'} style={styles.faIcon} /> */}
            <a style={styles.pageFooterLink} href={addressLink}>{address}</a>
          </p>
        )}
        {phoneNumber && (
          <p style={styles.pageFooterP}>
            <FontAwesomeIcon icon={faPhone} style={styles.faIcon} />
            {/* <FontAwesomeIcon icon={'phone'} style={styles.faIcon} /> */}
            <a style={styles.pageFooterLink} href={`tel:${phoneNumber}`}>{phoneNumber}</a>
          </p>
        )}
      </footer>
    </div>
  );
}

export default InfoSection;