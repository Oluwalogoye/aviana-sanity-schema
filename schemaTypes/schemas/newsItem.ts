import { Rule } from "sanity";

export default {
  name: 'newsItem',
  title: 'News Item',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'imageSrc',
      title: 'Image Source',
      type: 'image',
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'caption',
      title: 'Caption',
      type: 'array',
      of: [{
        type: 'block',
      }],
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
    },
    {
      name: 'link',
      title: 'Link',
      type: 'reference',
      to: [{type: 'page'}],
      hidden: ({parent}: {parent: {buttonText: string}}) => !parent.buttonText
    }
  ]
}
