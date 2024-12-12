import { Rule } from "sanity";

export default {
  name: 'profile',
  title: 'Profile',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule: Rule) => Rule.required()
    }, 
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      },
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'descriptions',
      title: 'Descriptions',
      type: 'array',
      of: [{
        type: 'block',
      }],
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'organizationInfo',
      title: 'Organization Information',
      type: 'organization',
      validation: (Rule: Rule) => Rule.required()
    }
  ]
}