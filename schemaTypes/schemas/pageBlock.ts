import { 
  blockTypeMap,
  validBlockTypes,

  homePageBlockTypeDescription, 
  participatePageBlockTypeDescription,
  aboutUsBlockTypeDescription,

  blockTypeOptions,
  pageTypeOptions,

  ourTeamBlockTypeDescription,

  pressPageBlockTypeDescription,
  ourLeaderPageBlockTypeDescription,
  contactUsBlockTypeDescription,
} from '../utils/blockTypeUtils';

export default {
  name: 'pageBlock',
  title: 'Page Block',
  type: 'document',
  description: 'Create a content block for your page. The available fields depend on the selected page type.',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Enter a concise and descriptive title for your page block.',
    },
    {
      name: 'pageType',
      title: 'Page Type',
      type: 'string',
      description: 'Select the type of page you are creating content for.',
      options: {
        list: pageTypeOptions,
      }
    },
    {
      name: 'blockType',
      title: 'Block Type',
      type: 'string',
      description: 'The type of content block you want for your page',
      options: {
        list: blockTypeOptions,
      },
      validation: (Rule: any) => Rule.custom((value: string, context: { parent? : { pageType?: string } }) => {
        const parentPageType = context?.parent?.pageType;

        const homePageBlocks = validBlockTypes.homePage.types;
        const participatePageBlocks = validBlockTypes.participatePage.types;
        const aboutUsBlocks = validBlockTypes.aboutUsPage.types;
        const ourTeamPageBlocks = validBlockTypes.ourTeamPage.types;
        const pressPageBlocks = validBlockTypes.pressPage.types;
        const ourLeaderBlocks = validBlockTypes.ourLeaderPage.types;
        const contactUsBlocks = validBlockTypes.contactUsPage.types; 
        
        if ( parentPageType === 'homePage' && !homePageBlocks.includes(value) ) {
          return 'Invalid block type for Home Page';
        } else if ( parentPageType === 'participatePage' && !participatePageBlocks.includes(value) ) {
          return 'Invalid block type for Participate Page';
        } else if ( parentPageType === 'aboutUsPage' && !aboutUsBlocks.includes(value) ) {
          return 'Invalid block type for About Us Page';
        } else if ( parentPageType === 'ourTeamPage' && !ourTeamPageBlocks.includes(value) ) {
          return 'Invalid block type for Our Team Page';
        } else if ( parentPageType === 'pressPage' && !pressPageBlocks.includes(value) ) {
          return 'Invalid block type for Press Page';
        } else if ( parentPageType === 'ourLeaderPage' && !ourLeaderBlocks.includes(value) ) {
          return 'Invalid block type for Our Leader Page';
        } else if ( parentPageType === 'contactUsPage' && !contactUsBlocks.includes(value) ) {
          return 'Invalid block type for Contact Us Page';
        }


    
        return true; 
      })
    },
    {
      name: 'homePageContent',
      title: 'Home Page Content',
      type: 'homePageBlockContent',
      description: homePageBlockTypeDescription,
      hidden: ({ parent }: { parent: { pageType: string } }) => parent?.pageType !== 'homePage',
    },
    {
      name: 'participatePageContent',
      title: 'Participate Page Content',
      type: 'participatePageBlockContent',
      description: participatePageBlockTypeDescription,
      hidden: ({ parent }: { parent: { pageType: string } }) => parent?.pageType !== 'participatePage',
    },
    {
      name: 'aboutUsContent',
      title: 'About Us Content',
      type: 'aboutUsBlockContent',
      description: aboutUsBlockTypeDescription,
      hidden: ({ parent }: { parent: { pageType: string } }) => parent?.pageType !== 'aboutUsPage',
    },
    {
      name: 'ourTeamPageContent',
      title: 'Our Team Page Content',
      type: 'ourTeamPageBlockContent',
      description: ourTeamBlockTypeDescription,
      hidden: ({ parent }: { parent: { pageType: string } }) => parent?.pageType !== 'ourTeamPage',

    },
    {
      name: 'pressPageContent',
      title: 'Press Page Content',
      type: 'pressPageBlockContent',
      description: pressPageBlockTypeDescription,
      hidden: ({ parent }: { parent: { pageType: string } }) => parent?.pageType !== 'pressPage',
    },
    {
      name: 'ourLeaderPageContent',
      title: 'Our Leader Page Content',
      type: 'ourLeaderPageBlockContent',
      descripion: ourLeaderPageBlockTypeDescription,
      hidden: ({ parent }: { parent: { pageType: string } }) => parent?.pageType !== 'ourLeaderPage',
    },
    {
      name: 'contactUsContent',
      title: 'Contact Us Content',
      type: 'contactUsBlockContent',
      description: contactUsBlockTypeDescription,
      hidden: ({ parent }: { parent: { pageType: string } }) => parent?.pageType !== 'contactUsPage'
    }
    // other related fields can be added here directly
  ]
};
