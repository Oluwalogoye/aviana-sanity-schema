import React, {useState, useEffect} from "react"
import { fetchImage } from '../../../query';
import styles, { Card, LymeLink } from './componentStyles'

import htm from 'htm'
import vhtml from 'vhtml'
import {toHTML, uriLooksSafe} from '@portabletext/to-html'

const html = htm.bind(vhtml)
import { PortableText } from '@portabletext/react'


const myPortableTextComponents = {
  types: {
    image: ({value}) => <img src={value.imageUrl} />,
    callToAction: ({value, isInline}) =>
      isInline
        ? <a href={value.url}>{value.text}</a>
        : <div className="callToAction">{value.text}</div>,
  },

  marks: {
    link: ({children, value}) => {
      // ⚠️ `value.href` IS NOT "SAFE" BY DEFAULT ⚠️
      // ⚠️ Make sure you sanitize/validate the href! ⚠️
      const href = value.href || ''

      if (uriLooksSafe(href)) {
        const rel = href.startsWith('https://') ? undefined : 'noreferrer noopener'
        return <LymeLink href={href} rel={rel}>{children}</LymeLink>; 
      }

      // If the URI appears unsafe, render the children (eg, text) without the link
      return children
    },
    // strong: ({children}) => {
    //   return html`<b style="font-weight: bold;">${children}</b>`
    // }
  },
  block: {
    strong: ({children}) => <b>{children}</b>
  }
}


const CardComponent = ({ title, imageSrc, caption, buttonText, onButtonClick, onClick }) => {
  const [image, setImage] = useState(null);

  const imageRef = imageSrc?.asset?._ref;
  useEffect(() => {
    if (imageRef) {
      fetchImage(imageRef).then(image => {
        setImage(image?.url);
      })
    } else {
      setImage(imageSrc?.asset?.url);
    }

  }, [imageSrc])

  if (!image && imageRef) return (<div>Loading...</div>)

  // const formattedCaption = toHTML(caption, {components: myPortableTextComponents})
  // const cardImageUrl = imageSrc?.asset?.url;
  const cardImageUrl = image;
  console.log("In CardComponent, here image is", image);

  return (
  // <div className="card" onClick={onClick}> {/* Use the onClick prop here */}
  <Card>
    <img alt="Event" style={styles.cardImage} src={cardImageUrl}/>
    <div style={styles.cardContent}>
      <h2 style={styles.cardTitle}>{title}</h2>
      {/* <div style={styles.cardCaption} dangerouslySetInnerHTML={{ __html: formattedCaption }} /> */}
      <PortableText value={caption} components={myPortableTextComponents} />
      {/* <div onClick={(e) => { e.stopPropagation(); onButtonClick(); }} className="card-button"> */}
      <div style={styles.clickButton}>
        {buttonText}
      </div>
    </div>
  </Card>
  )
}

export default CardComponent;