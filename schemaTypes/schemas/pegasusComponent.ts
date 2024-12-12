import { Rule } from "sanity";

export default {
  name: 'pegasusComponent',
  title: 'Pegasus Component',
  type: 'document',
  fields: [
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      description: 'Upload the logo image for this component.',
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Enter the heading for this'
    },
    {
      name: 'descriptions',
      title: 'Descriptions',
      type: 'array',
      of: [{
        type: 'block'
      }],
      description: 'Add detailed descriptions or content',
    },
    {
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
      description: 'Select an image that visually reinforces the call to action.',
      options: {
        hotspot: true
      }
    },
    {
      name: 'buttonName',
      title: 'Button Name',
      type: 'string',
      description: 'Provide text for the clickable button that links to a provided page',
    },
    {
      name: 'link',
      title: 'Link',
      type: 'reference',
      to: [{ type: 'page' }],
      description: 'The page you want to be redirected to when you click on the button',
    }
  ]
}