import React from 'react';
import { ProfileImage, LeaderProfile } from './componentStyles';
const Profile = ({
  content
}) => {
  if (content == null) return /*#__PURE__*/React.createElement("div", null, "Profile: content is null");
  const {
    name,
    image,
    descriptions,
    organizationInfo
  } = content;
  const imageUrl = image?.asset?.url;
  function destructureOrganization(organization = {}) {
    // this field must be required then
    let result = `${organization.name}`;
    // handle city
    let separator = organization.city ? ', ' : '';
    result = result + separator + organization.city;
    // handle state
    separator = organization.state ? ', ' : '';
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
        return '';
      }
      // loop through the children spans, and join the 
      // text strings
      return block.children.map(child => child.text).join('');
    })
    // join the paragraphs leaving split by two linebreaks
    .join('\n\n');
  }
  return /*#__PURE__*/React.createElement(LeaderProfile, null, /*#__PURE__*/React.createElement(ProfileImage, null, /*#__PURE__*/React.createElement("img", {
    src: imageUrl,
    alt: name
  })), /*#__PURE__*/React.createElement("div", {
    className: "profile-content"
  }, /*#__PURE__*/React.createElement("h1", null, name), /*#__PURE__*/React.createElement("h2", null, organizationFullName), descriptions && toPlainText(descriptions).split('\n\n').map((description, index) => /*#__PURE__*/React.createElement("p", {
    key: index
  }, description))));
};
export default Profile;