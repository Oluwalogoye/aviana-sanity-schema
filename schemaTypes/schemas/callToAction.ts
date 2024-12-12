export default {
  name: 'callToAction',
  title: 'Call to Action',
  type: 'document',
  description: 'Creates a compelling call to action section, encouraging users to take a specific action.',
  fields: [
      {
          name: 'title',
          title: 'Title',
          type: 'string',
          description: 'The main headline or title for the call to action.'
      },
      {
          name: 'descriptions',
          title: 'Descriptions',
          type: 'array',
          description: 'Provide supporting text or descriptions to elaborate on the call to action.',
          of: [{
              type: 'block',
          }],
      },
      {
          name: 'buttonName',
          title: 'Button Text', // Improved title for clarity
          type: 'string',
          description: 'The text displayed on the button that users will click.'
      },
      {
          name: 'link',
          title: "Link",
          description: 'Page you want users to navigate into when they click your link?',
          hidden: ({ parent }: { parent: { buttonName: string } }) => parent.buttonName,
          type: 'reference',
          to: [{type: 'page'}]
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
          name: 'hideLogo',
          title: 'Hide Supplementary Image?',
          type: 'boolean',
          description: 'Check this box to hide the supplementary image.',
          initialValue: true // Set the default value to true
      },
      {
          name: 'logo',
          title: 'Supplementary Image',
          type: 'image',
          description: 'An optional additional image to support the call to action.',
          hidden: ({ parent }: { parent: { hideLogo: boolean } }) => parent.hideLogo
      },
  ]
}