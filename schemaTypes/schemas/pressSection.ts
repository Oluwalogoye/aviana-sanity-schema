import { Rule } from "sanity";

export default {
  name: 'pressSection',
  title: 'Press Section',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'pressReleases',
      type: 'array',
      title: 'Press Releases',
      description: 'An ordered list of press releases.',
      of: [{
        type: 'reference',
        to: [{ type: 'pressRelease' }],
      }],
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'decorativeImage',
      title: 'Decorative Image',
      type: 'image',
      options: {
        hotspot: true,
      }
    }
  ]
}