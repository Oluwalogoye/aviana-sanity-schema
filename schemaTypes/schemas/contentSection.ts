import { Rule } from "sanity";

export default {
  name: 'contentSection',
  title: 'Content Section',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The main headline or title for the content section.'
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      description: 'Provide supporting images to elaborate on the content section.',
      of: [{
        type: 'image',
        options: {
          hotspot: true
        }
      }],
      validation: (Rule: any) => Rule.custom((value: any[] | null | undefined) => {
        if (!value || value.length === 0) {
          // No value or empty array is valid
          return true;
        }
        if (value.length > 2) {
          return 'Array must contain only one or two images';
        }
        return true;
      })
    },
    {
      name: 'descriptions',
      title: 'Descriptions',
      type: 'array',
      description: 'Provide supporting text or descriptions for the call to action.',
      of: [{
        type: 'block'
      }],
      validation: (Rule: Rule) => Rule.required()
    }
  ]
}