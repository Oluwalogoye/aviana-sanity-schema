import { Rule } from '@sanity/types';

export default {
  name: 'menu',
  title: 'Menu',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'What will be displayed in the header',
      validation: (Rule: Rule) => Rule.required().min(1).error('A name is required')
    },
    {
      name: 'link',
      title: 'Link',
      description: 'Page you want users to navigate into when they click your link?',
      type: 'reference',
      to: [{ type: 'page' }],
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'homePage',
      title: 'Is this the home page?',
      type: 'boolean',
      description: 'Is the first page you see when you land on your website?',
      initialValue: false,
    },
    { 
      name: 'pressPage',
      title: 'Is this the press page?',
      type: 'boolean',
      description: 'Is the page that displays all press releaes?',
      initialValue: false,
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'string',
      description: 'The slug that will be suffixed to the website URL e.g. slug "/events": www.domainname.org/events. The Home Page will have a slug of "/"',
      validation: (Rule: Rule) => Rule.required().error('A slug is required')
    }
  ],
  preview: {
    select: {
      title: 'name',
      link: 'link.title'
    },
    prepare(selection: { title: string; link?: string }) {
      const { title, link } = selection;
      const titles: string[] = [];
      if (title) titles.push(title);
      if (link) titles.push(link);

      return {
        title: titles.join(': ')
      };
    }
  }
};