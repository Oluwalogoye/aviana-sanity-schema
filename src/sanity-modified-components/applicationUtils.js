import React from 'react';
import FirstItemStyle from './applicationStyles'

const FirstItem = ({ children, isFirstItem }) => {
  let parentTag = '';
  if (isFirstItem) {
    parentTag = (
      <FirstItemStyle>
        {children}
      </FirstItemStyle>
    )
  } else {
    parentTag = (
      <div>
        {children}
      </div>
    )
  }
  return (
    parentTag
  )
}

export default FirstItem