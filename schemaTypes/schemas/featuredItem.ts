import { Rule } from "sanity";

export default {
  name: 'featuredItem',
  title: 'Featured Item',
  type: 'document',
  description: '',
  fields: [
    {
      name: 'title',
      title: 'Title',
      description: 'The heading for this featuerd item.',
      type: 'string',
      validation: (Rule: Rule) => Rule.required() 
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      description: 'Detailed explanation for this featured item.',
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