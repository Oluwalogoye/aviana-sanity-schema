import { Rule } from "sanity";

export default {
  name: 'frame',
  title: 'Frame',
  type: 'document',
  fields: [
    {
      name: 'featuredItems',
      title: 'Featured Items',
      type: 'array',
      of: [{
        type: 'reference',
        to: [{ type: 'featuredItem' }],
      }],
      validation: (Rule: Rule) => Rule.custom((value: any[]) => {
        if ( value.length !== 3 )
          return 'Featured items must be three items';
        return true;
      })
    }
  ],
  preview: {
    select: {
      title1: 'featuredItems.0.title',
      title2: 'featuredItems.1.title',
      title3: 'featuredItems.2.title',
      media: 'featuredItems.0.image',
    },
    prepare(selection: {title1: string, title2: string, title3: string, media: any}) {
      const { title1, title2, title3, media } = selection;

      const titles = [];
      if (title1) titles.push(title1);
      if (title2) titles.push(title2);
      if (title3) titles.push(title3);

      // Join the titles with a separator (e.g., comma and space)
      const title = titles.join(', ');
      
      return {
        title: title || 'No title available', // Provide a fallback title if none exist
        media
      };
    }
  }
}