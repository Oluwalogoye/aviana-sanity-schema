import { Rule } from 'sanity'

export default {
  name: 'featuredCompany',
  title: 'Featured Company',
  type: 'document',
  description: 'A section with logos (which link to their official website) for all companies that have featured us (e.g in the press)',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'url',
      title: 'Url',
      type: 'string',
      validation: (Rule: Rule) => Rule.required()
    }
  ]
}