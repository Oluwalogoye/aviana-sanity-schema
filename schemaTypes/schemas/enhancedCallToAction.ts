import { Rule } from "sanity";

export default {
  name: 'enhancedCallToAction',
  title: 'Enhanced Call To Action',
  type: 'document',
  description: 'Creates the most compelling call to action section',
  fields: [
    {
      name: 'backgroundImage',
      title: 'backgroundImage',
      type: 'image',
      description: 'Select an image that visually reinforces the call to action.',
      options: {
        hotspot: true
      },
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'enhancedItems',
      title: 'Enhanced Items', // Added a title for better readability in the Sanity Studio 
      description: `Content displayed within the enhanced sections.
      Each item consists of a title, image, and a description.`, // Added description for the field
      type: 'array',
      of: [{
        type: 'reference',
        to: [{ type: 'enhancedItem' }],
      }],
      validation: (Rule: Rule) => Rule.custom((value: any[]) => {
        if (value.length !== 2)
          return 'Enhanced Items must contain two items'
        return true
      })
    },
  ],
  preview: {
    select: {
      title1: 'enhancedItems.0.title',
      title2: 'enhancedItems.1.title',
      media: 'backgroundImage',
    }, 
    prepare(selection: {title1: string; title2: string; media: string}) {
      const { title1, title2, media } = selection;

      const titles = [];
      if (title1) titles.push(title1);
      if (title2) titles.push(title2);

      // Join the titles with a seperator
      const title = titles.join(', ');

      return {
        title: title || 'No title available',
        media,
      };
    }
  }
}