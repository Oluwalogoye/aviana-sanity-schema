import { Rule } from "sanity";

export default {
  name: 'infoSection',
  title: 'Info Section',
  type: 'document',
  description: 'Creates an informative info section, encouraging users to call, email, view address.',
  fields: [
    {
      name: 'address',
      title: 'Address',
      type: 'string',
      description: 'The Address that will be displayed',
      validation: (Rule: Rule) => Rule.required()    
    },
    {
      name: 'addressLink',
      title: 'Address Link',
      type: 'url',
      description: 'The url of your address provided via any Map service e.g Google Maps',
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'phoneNumber',
      title: 'Phone Number',
      type: 'number',
      description: 'The phone number displayed that users can click on to call',
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'emailAddress',
      title: 'Email Address',
      type: 'string',
      description: 'The email address displayed that users can click on to send an email',
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'descriptions',
      title: 'Descriptions',
      type: 'array',
      description: 'Provide supporting text to elaborate on the info section.',
      of: [{
        type: 'block',
      }],
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
      description: 'The image on the background of this info section.',
      options: {
        hotspot: true
      },
      validation: (Rule: Rule) => Rule.required()
    }
  ] 
}