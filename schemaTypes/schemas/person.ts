import { Rule } from "sanity";

export default {
  name: 'person',
  title: 'person',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'The name of the person',
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      description: 'Choose an image of the person',
      options: {
        hotspot: true
      },
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The offical title of this person',
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'description',
      type: 'array',
      description: 'Add multiple paragraphs to provide detailed information about this person',
      validation: (Rule: Rule) => Rule.required(),
      of: [{ type: 'block' }]
    }
  ],
  preview: {
    select: {
      title: 'name',
      image: 'image'
    },
    prepare(selection : { title: string; image: any } ) {
      const { title, image } = selection

      return {
        title: title,
        media: image,
      };
    },
  },
}