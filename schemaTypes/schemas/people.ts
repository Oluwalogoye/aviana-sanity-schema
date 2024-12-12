import { Rule } from "sanity";

export default {
  name: 'people',
  title: 'People',
  type: 'document',
  description: 'Creates a complete our team section, allowing users to view team members',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The main headline or title for the team section.',
      validation: (Rule: Rule) => Rule.required()      
    },
    {
      name: 'everyone',
      title: 'Everyone',
      type: 'array',
      description: 'The people that will be displayed in the our team section',
      of: [{
        type: 'person',
      }],
      validation: (Rule: Rule) => Rule.required()
    }
  ]
}