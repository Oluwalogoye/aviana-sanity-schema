import React from 'react'
import {ProfileImage, LeaderProfile} from './componentStyles'

const Profile = ({content}) => {
  if (content == null) 
    return (<div>Profile: content is null</div>)

  const { name, image, descriptions, organizationInfo } = content;
  const imageUrl = image?.asset?.url;
  function destructureOrganization (organization = {}){
    // this field must be required then
    let result = `${organization.name}`   
    // handle city
    let separator = organization.city ? ', ' : '';
    result = result + separator + organization.city;
    // handle state
    separator = organization.state ? ', ': '';
    result = result + separator + organization.state; 
  }
  // assumes there is content
  const organizationFullName = destructureOrganization(organizationInfo);

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
    <LeaderProfile>
      <ProfileImage>
        <img src={imageUrl} alt={name} />
      </ProfileImage>
      <div className="profile-content">
        <h1 >{name}</h1>
        <h2 >{organizationFullName}</h2>
        {
          descriptions && toPlainText(descriptions).split('\n\n').map((description, index) => (
            <p key={index} >{description}</p>
          ))
        }
      </div>
    </LeaderProfile>
  );
}

export default Profile;