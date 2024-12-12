import { Rule } from "sanity";

export default {
  name: 'enhancedItem',
  title: 'Enhanced Item',
  type: 'document',
  description: '',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The title for this enhanced item.',
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'descriptions',
      title: 'Descriptions',
      type: 'array',
      description: 'Detailed information or explanation for this enhanced item.',
      of: [{
          type: 'block',
      }],
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'image',
      title: 'Image',
      description: 'The image displayed in the forefront',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule: Rule) => Rule.required()
    }
  ]
}