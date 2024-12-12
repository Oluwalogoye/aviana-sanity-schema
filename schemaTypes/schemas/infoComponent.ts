import { Rule } from "sanity";

export default {
  name: 'infoComponent',
  title: 'Info Component',
  type: 'document',
  description: 'Presents informational content using a header and paragraphs.',
  fields: [
    {
      name: 'header',
      type: 'string',
      description: 'The main heading or title for the information section.',
      validation: (Rule: Rule) => Rule.required() 
    },
    {
      name: 'paragraphs',
      type: 'array',
      description: 'Add multiple paragraphs to provide detailed information.',
      of: [{ type: 'block' }],
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'dots',
      title: 'Decorative dots',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Add decorative dots to beautify this section.'
    }
  ]
}