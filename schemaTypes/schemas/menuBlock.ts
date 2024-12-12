import { Rule } from "sanity";

export default {
  name: 'menuBlock',
  title: 'Menu Block',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The name of this menu block'
    },
    {
      name: 'menuItems',
      type: 'array',
      title: 'Menu Items',
      description: 'An ordered list of menu items.',
      of: [{
        type: 'reference',
        to: [{ type: 'menu' }],
      }],
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'logo',
      title: 'Logo of the organization',
      type: 'image',
      description: 'Clicking on the logo will redirect the user back to the home page',
      options: {
        hotspot: true
      },
      validation: (Rule: Rule) => Rule.required()
    }
  ]
}