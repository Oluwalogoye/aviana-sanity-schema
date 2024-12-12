import { Rule } from 'sanity';

export default {
  name: 'featuredComponent',
  title: 'Featured Component',
  type: 'document',
  description: 'Display the logos of companies that have featured us',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'featuredCompanies',
      title: 'Featured Companies',
      type: 'array',
      of: [{
        type: 'reference',
        to: [{ type: 'featuredCompany' }],
      }],
      validation: (Rule: Rule) => Rule.required()
    }
  ]
}