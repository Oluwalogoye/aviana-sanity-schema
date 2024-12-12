import React from "react"
import { 
  ImagesContainer,
  ImageWrapper,
  FrameContainer
} from './componentStyles';

const Frame = ({ content }) => {
  if (content == null) 
    return (<div>Frame: content null</div>)

  const { featuredItems } = content;

  console.log("In Frame.js, content here is", content);
  
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
    // <div>Hello there</div>
    <FrameContainer>
      <ImagesContainer>
        {featuredItems.map(({ title, description, image }, i) => (
          <ImageWrapper key={i}>
            <img src={image?.asset?.url} alt={title}/>
            <h2 >{title}</h2>
            {
              toPlainText(description).split('\n\n').map((description, j) => (
                <p key={j} >{description}</p>
              ))
            }
          </ImageWrapper>
        ))}
      </ImagesContainer>
    </FrameContainer>
  );
}

export default Frame;
