export default {
  name: 'page',
  title: 'Page',
  type: 'document',
  description: 'Represents a single page in your website or application.',
  fields: [
    {
      name: 'title',
      type: 'string',
      description: 'The title of the page, displayed in the browser tab or window title bar.',
    },
    {
      name: 'pageBlocks',
      type: 'array',
      title: 'Page Blocks',
      description: 'An ordered list of content blocks that make up the page.',
      of: [{
        type: 'reference',
        to: [{ type: 'pageBlock' }],
      }],
    },
    {
      name: 'menuBlock',
      title: 'Menu Block',
      type: 'reference',
      description: 'Which menu block does this page belong to?',
      to: [{
        type: 'menuBlock' // Reference to menuBlock 
      }]
    }
  ],
};
