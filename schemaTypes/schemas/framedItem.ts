import { Rule } from "sanity";

export default {
  name: 'framedItem',
  title: 'Framed Item',
  type: 'document',
  description: '',
  fields: [
    {
      name: 'title',
      title: 'Title',
      description: 'The heading or title for this framed item.',
      type: 'string',
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      description: 'Detailed information or explanation for this framed item.',
      of: [{
        type: 'block',
      }],
      validation: (Rule: Rule) => Rule.required()
    }
  ]
}