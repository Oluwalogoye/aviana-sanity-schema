import React from 'react';
import CallToAction from '../call-to-action/CallToAction'

const PegasusComponent = ( {content} ) => {
  if (content == null)
    return (<div>PegasusComponent: content null</div>)

  const {logo, title, descriptions} = content;
  return (
    <CallToAction
      content={content}
    />
  );
};

export default PegasusComponent;