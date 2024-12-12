import { Rule } from "sanity";

export default {
  name: 'pressRelease',
  title: 'Press Release',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The title of this press release',
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      description: 'Choose an image that encapsulates this press release.',
      options: {
        hotspot: true
      },
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'descriptions',
      title: 'Descriptions',
      type: 'array',
      description: 'Provide supporting text or descriptions.',
      of: [{
        type: 'block',
      }],
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'shortDescription',
      title: 'Short Description',
      type: 'array',
      of: [{
        type: 'block',
      }],
      description: 'First paragraph of the press release, which will invite users to click to view full version',
      validation: (Rule: Rule) => Rule.required()
    }
  ]
}