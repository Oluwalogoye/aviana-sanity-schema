import React from 'react';
import { 
  LymeContainer
} from './componentStyles'

import { 
  toHTML,
  uriLooksSafe
} from '@portabletext/to-html'

const myPortableTextComponents = {
  types: {
    image: ({value}) => `<img src="${value.imageUrl}" />`
  },
  marks: {
    link: ({children, value}) => {
      //
      //
      const href = value?.href || '';

      if (uriLooksSafe(href)) {
        const rel = href.startsWith('https://') ? undefined : 'noreferrer noopener'
        return `<a
              class="lyme-link"
              href="${href}"
              rel="${rel}">
                ${children}
              </a>`
      }

      //
      return Array.isArray(children) ? children.join('') : String(children)
    },
    strong: ({children}) => {
      return `<b style="font-weight:bold;">${children}</b>`
    }
  },
}

const ContentSection = ({ content }) => {
  const { title, images, descriptions } = content; // Destructure content
  const formattedDescriptions = toHTML(descriptions, {components: myPortableTextComponents}) 

  return (
    <LymeContainer>
      <h2 className="lyme-header">{title}</h2>
      <div className={images.length == 1 ? 'covid-images-container' : 'lyme-images-container'}>
        {images && images.map((image) => (
          <img src={image.asset.url} className="img" alt="Content visual" />
        ))}
      </div>

      <div className="lyme-content" dangerouslySetInnerHTML={{ __html: formattedDescriptions }} />
    </LymeContainer>
  )

}

export default ContentSection;