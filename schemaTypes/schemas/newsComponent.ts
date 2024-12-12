import { Rule } from "sanity";

export default {
  name: 'newsComponent',
  title: 'News Component',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'newsItems',
      type: 'array',
      title: 'News Items',
      of: [{type: 'reference', to: [{type: 'newsItem'}]}],
      validation: (Rule: Rule) => Rule.custom((value: any[]) => {
        if (value.length != 3)
          return 'News Items must be three items'
        return true;
      })    
    }
  ],
  preview: {
    select: {
      title: 'title',
      title1: 'newsItems.0.title',
      title2: 'newsItems.1.title',
      title3: 'newsItems.2.title',
      image: 'newsItems.0.imageSrc',
    },
    prepare(selection: {title: string, title1: string, title2: string, title3: string, image: any}) {
      const { title, title1, title2, title3, image } = selection;

      const titles = [];
      if (title1) titles.push(title1);
      if (title2) titles.push(title2);
      if (title3) titles.push(title3);

      // Join the subtitles
      const subTitles = titles.join(', ');

      // Join the titles with a seperator
      const combinedTitle = title && subTitles ? `${title}: ${subTitles}` : 'No title avaialble'; // Provide a fallback title if none exits

      return {
        title: combinedTitle,
        media: image,
      };
    }
  }  
}
