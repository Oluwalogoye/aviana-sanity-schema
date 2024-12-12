import React, {useState, useEffect} from 'react'

// import { fetchBlock, fetchBlockContent } from './query'
// import { fetchBlock, fetchBlockContent  } from './query'
import { fetchBlock } from './query'
import { fetchBlockContent } from './query'
import { fetchNewsContent } from './query'
// import CallToAction from '../sanity-modified-components/call-to-action/CallToAction'
import CallToAction from './sanity-modified-components/call-to-action/CallToAction'
import InfoComponent from './sanity-modified-components/info-component/InfoComponent'
import PegasusComponent from './sanity-modified-components/pegasus-component/PegasusComponent'
import NewsComponent from './sanity-modified-components/news-component/NewsComponent'

// import CallToAction from '../sanity-modified-components/call-to-action/CallToAction'



// const fetchBlock = async (blockId) => {
//   function manualReturn(blockId) {
    // const manualValue = [
      // {
        // blockType: 'callToAction',
        // content: {
          // _ref: 'callToActionRef'
        // }
      // },
      // {
        // blockType: 'infoComponent',
        // content: {
          // _ref: 'infoComponentRef'
        // }
      // }
    // ]

//     return manualValue[blockId];
//   }
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(manualReturn(blockId)), 5000);
//   })
// }


const BlockPreview = ({ blockId }) => {
  const [block, setBlock] = useState(null);
  const [content, setContent] = useState(null);
  const [newsContent, setNewsContent] = useState(null);
  

  useEffect(() => {
    fetchBlock(blockId).then(block => {
      setBlock(block);
      console.log("Block", block)

      const typename = block?.blockType
      // Assuming block.content._ref is the correct reference to the content
      const contentRef = block?.content?._ref
      console.log("About to call fetchBlockContent w/ contentRef", contentRef);
      console.log("About to call fetchBlockContent w/ typename", typename)


        
      // fetchBlockContent(block.content._ref, typename).then(setContent);
      fetchBlockContent(contentRef, typename).then(content => {
        if (typename === 'newsComponent' && content.newsItems) {
        console.log("typename", typename, "content.newsItems", content.newsContent)

          const newsCompContent = {
            title: content?.title,
            newsItems: []
          };
          console.log("About to call fetchNewsContent w/ contentRef", contentRef);
          console.log("About to call fetchNewsContent w/ newsItems", content.newsItems)
          Promise.all(
            content.newsItems.map(newsItemRef => {
              return fetchNewsContent(newsItemRef._ref)
                .then(newsContent => newsContent) // Handle successful fetch
                .catch(error => {
                  console.error("Error fetching news content:", error);
                  return null; // Or some default value for failed fetches
                });
            })
          ).then(newsContents => {
            // Filter out any null values (failed fetches)
            console.log("newsContent prior to filter", newsContents)
            const validNewsContents = newsContents.filter(item => item !== null);
            newsCompContent.newsItems = validNewsContents;
            setNewsContent(newsCompContent);
          });
        } else {
          setContent(content);
        }
      });

        
      
    })
  }, [blockId]);

  if (!block) return <div>Loading...</div>

  console.log("Block", block)
  console.log("Content", content)


  // Adjusted to correct property names based on the query
  const { title, blockType } = block;
  const contentTitle = content ? content.title : 'No content title';


  let blockCount = 0;
  
  switch (blockType) {
    case 'callToAction':
      blockCount++;
      return <CallToAction content={content} isFirstItem={blockCount == 1}/>
    case 'infoComponent':
      blockCount++;
      return <InfoComponent content={content} isFirstItem={blockCount == 1}/>
    case 'pegasusComponent':
      blockCount++;
      return <PegasusComponent content={content} isFirstItem={blockCount == 1}/>
    case 'newsComponent':
      blockCount++;
      return <NewsComponent content={newsContent} isFirstItem={blockCount == 1}/>
    default: 
      blockCount++;
      return <div>Some Block Type</div>
  }
}

const PageBlockPreview = ({ document }) => {
  const { pageBlocks } = document.displayed;
  return (
    <div>
      {pageBlocks.map((blockRef, index) => (
        // Using blockRef._ref if pageBlocks is an array of references
        // <BlockPreview key={index} blockId={blockRef._ref} />
        <BlockPreview key={index} blockId={blockRef._ref}/>
      ))}
    </div>
  );
};


export default PageBlockPreview