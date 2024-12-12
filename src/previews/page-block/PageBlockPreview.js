import React, {useState, useEffect} from 'react'

// import { fetchBlock, fetchBlockContent  } from './query'
import { 
  fetchBlock
} from '../../query'
import { 
  fetchBlockContent
} from '../../query'
// import CallToAction from '../sanity-modified-components/call-to-action/CallToAction'
import renderComponent from '../../utils/blockRenderer'
import styles from '../indexStyles'
// ... other imports
import { handleFetchedContent } from '../../utils/contentUtils'
import { getContentRef } from '../../utils/contentUtils'

const BlockPreview = ({ blockId }) => {
  const [block, setBlock] = useState(null);
  const [content, setContent] = useState(null);
  // Rename newsContent to furtherContent
  const [furtherContent, setFurtherContent] = useState(null);
  
  useEffect(() => {
    fetchBlock(blockId).then(block => {
      setBlock(block);
      console.log("Block", block)

      const typename = block?.blockType
      // Assuming block.content._ref is the correct reference to the content
      // Get contentRef using the function from contentUtils
      const contentRef = getContentRef(block);

      console.log("About to call fetchBlockContent w/ contentRef", contentRef);
      console.log("About to call fetchBlockContent w/ typename", typename)

    //  // fetchBlockContent(block.content._ref, typename).then(setContent);
      fetchBlockContent(contentRef, typename)
        .then(content => {
          return handleFetchedContent(typename, content);  
        })
        .then(result => {
          if (result.furtherContent) {
            setFurtherContent(result.furtherContent);
          } else {
            setContent(result.content);
          }
        });
    });
  }, [blockId]);

  if (!block) return <div>Loading...</div>
  const allContentAvailable = furtherContent || content;
  if (block && !allContentAvailable) {
  // if (block && !content) {
  // if (block && ( !content || !furtherContent )) {
    return <div>Loading content...</div>
  }

  console.log("Block", block)
  console.log("Content", content)

  // Adjusted to correct property names based on the query
  const { title, blockType } = block;
  
  // Use the renderComponent function
  return renderComponent(blockType, content, furtherContent);
}

const PageBlockPreview = ({ document }) => {
  const { pageBlocks } = document.displayed;
  return (
    <div style={styles.body}>
      {pageBlocks.map((blockRef, index) => (
        // <BlockPreview key={index} blockId={blockRef._ref} />
        <BlockPreview key={index} blockId={blockRef._ref}/>
      ))}
    </div>
  );
};


export default PageBlockPreview;