import React, {useState, useEffect} from "react"
import styles, { PressReleaseContainer } from './componentStyles'
import { fetchImage } from '../../query'

import { uriLooksSafe } from '@portabletext/to-html'
import { PortableText } from '@portabletext/react'

const myPortableTextComponents = {
  types: {
    image: ({value}) => <img src={value.imageUrl} />,
    callToAction: ({value, isInline}) => 
      isInline
        ? <a href={value.url}>{value.text}</a>
        : <div className="callToAction"></div>
  },

  marks: {
    link: ({children, value}) => {
      // `value.href` IS NOT "SAFE" BY DEFAULT
      // Make sure you sanitize/validate the href!
      const href = value.href || ''

      if (uriLooksSafe(href)) {
        const rel = href.startsWith('https://') ? undefined : 'noreferrer noopener'
        return <a href={href} rel={rel}>{children}</a>;
      }

      // If the URI appears unsafe, render the children (eg, text) without the link
      return children
    },
    strong: ({children}) => <b style={{fontWeight: 'bold'}}>{children}</b>
  }
}

const PressRelease = ({ content }) => {
  console.log("Press release content", content);

  if (content == null) 
    return (<div>PressRelease: content null</div>)

  const { title, image, descriptions } = content;

  const [localImage, setLocalImage] = useState(null);  

  const imageRef = image?.asset?._ref;
  useEffect(() => {
    if (imageRef) {
      fetchImage(imageRef).then(image => {
        setLocalImage(image?.url);
      })
    } else {
      setLocalImage(image?.asset?.url);
    }
  }, [image]);

  if (!localImage && imageRef) return (<div>Loading ...</div>)
  
  const imageUrl = localImage; 
  return (
    <PressReleaseContainer>
      <h1>Press Release: {title}</h1>
      <img src={imageUrl} alt={`Image for ${title}`} />
      {descriptions && <PortableText value={descriptions} components={myPortableTextComponents} />}
    </PressReleaseContainer>
  )
}

export default PressRelease;