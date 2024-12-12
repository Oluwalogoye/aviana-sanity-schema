import React, {useState, useEffect} from 'react'
import { fetchImage } from '../../../../query'

const Person = ({ person, isSecondInPair=false }) => {
  const {name, image, title, description} = person;

  const [imageSrc, setImageSrc] = useState(null);

  // Convert Sanity Block to plain paragraph
  function toPlainText(blocks = []) {
    console.log("blocks in toPlainText of Person class", blocks);
    
    return blocks
      // 
      .map(block => {
        //
        //
        if (block._type !== 'block' || !block.children) {
          return ''
        }
        //
        //
        return block.children.map(child => child.text).join('')
      })
      //
      .join('\n\n')
  }
  
  const plainTextDescription = toPlainText(description);

  console.log('plainTextDescription', plainTextDescription);

  const imageRef = image?.asset?._ref;
  useEffect(() => {
    if (imageRef) {
      fetchImage(imageRef).then(image => {
        setImageSrc(image?.url);
      })
    } else {
      setImageSrc(image?.asset?.url);
    }

  }, [image])

  if (!imageSrc && imageRef) return (<div>Loading...</div>)

  const backgroundImageUrl = imageSrc;
  const backgroundStyle = {
    backgroundImage: `url('${backgroundImageUrl}')`
  }; 

  const names = name.split(' ');
  const firstName = names.length >= 1 ? names[0] : '' ;
  const lastName = names.length >= 2 ? names.splice(1).join(' ') : '';

  return (
    // <div>Hello there from person. isSecondInPair? {isSecondInPair ? <p>true</p> : <p>false</p>}</div>
    <div className="tmm_member">
      <div style={backgroundStyle} className="tmm_photo"></div>
      <div className="tmm_textblock">

        <div className="tmm_names">
          <span className="tmm_fname">{firstName}</span>
          <span>{` `}</span>
          <span className="tmm_lname">{lastName}</span>
        </div>

        <div className="tmm_job">{title}</div>
        <div className="tmm_desc" style={{textAlign: "left"}}>
          {
            plainTextDescription.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))
          }
        </div>
        <div className="tmm_scblock"></div>

        {!isSecondInPair && <span className="tmm_two_containers_tablet"></span>}
      </div>      
    </div>
  )

}

export default Person;