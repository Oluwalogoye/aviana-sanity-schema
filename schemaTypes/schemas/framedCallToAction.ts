import { Rule } from "sanity";

export default {
  name: 'framedCallToAction',
  title: 'Framed Call to Action',
  type: 'document',
  description: 'A section with framed content and a background image, used to highlight key information.', // Description for the schema type
  fields: [
    {
      name: 'backgroundImg',
      title: 'Background Image',
      description: 'The image displayed in the background',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'framedItems',
      title: 'Framed Items', // Added a title for better readability in the Sanity Studio
      description: `Content displayed within the framed sections. 
      Each item consists of a title and a description.`, // Added description for the title field 
      type: 'array',
      of: [{
        type: 'reference',
        to: [{ type: 'framedItem' }],
      }],
      validation: (Rule: Rule) => Rule.custom((value: any[]) => {
        if (value.length !== 3)
          return 'Framed Items must be three items.'
        return true
      })
    },
  ],
  preview: {
    select: {
      title1: 'framedItems.0.title',
      title2: 'framedItems.1.title',
      title3: 'framedItems.2.title',
      media: 'backgroundImg',
    },
    prepare(selection: { title1: string, title2: string, title3: string, media: any }) {
      const { title1, title2, title3, media } = selection;

      const titles = [];
      if (title1) titles.push(title1);
      if (title2) titles.push(title2);
      if (title3) titles.push(title3);

      // Join the titles with a separator (e.g., comma and space)
      const title = titles.join(', ');
      
      return {
        title: title || 'No title available', // Provide a fallback title if none exist
        media,
      };
    }
  }
}