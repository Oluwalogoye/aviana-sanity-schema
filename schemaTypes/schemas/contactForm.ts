import { Rule } from "sanity";

export default {
  name: 'contactForm',
  title: 'Contact Form',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'title',
      type: 'string',
      description: 'The main headline for this conctact form.',
      initialValue: false,
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'firstName',
      title: 'Hide first name field?',
      type: 'boolean',
      description: 'Check this box to hide the first name input field.',
      initialValue: false,
      validation: (Rule: Rule) => Rule.required() 
    },
    {
      name: 'lastName',
      title: 'Hide last name field?',
      type: 'boolean',
      description: 'An optional field to support the first name field.',
      hidden: ({parent}:{parent:{firstName:string}}) => parent.firstName,
      initialValue: false,
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'emailAddress',
      title: 'Hide email address field?',
      type: 'boolean',
      description: 'Check this box to hide the email address input field.',
      initialValue: false,
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'phoneNumber',
      title: 'Hide phone number field?',
      type: 'boolean',
      description: 'Check this box to hide the phone number input field.',
      initialValue: false,
      validation: (Rule: Rule) => Rule.required()
    },
  ]
}