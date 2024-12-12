// blockTypeUtils.js

// blockTypeUtils.js

export const seperator = ` | `;
export const homePageBlockTypeDescription = [
  'Select the type of information you want to display in this block.',
  '1. Call To Action: Use this for calls to action, promoting further engagement.',
  '2. News Component: Ideal for showcasing news or updates with visuals.',
  '3. Info Component: Best for providing detailed information or explanations.',
  '4. Pegasus Component: Combine a call to action with visual elements.',
  '5. Featured Component: Display logos for companies that have featured us.'
].join(seperator);

export const participatePageBlockTypeDescription = [
  'Select the type of information you want to display in this block.',
  '1. Call To Action: Use this for calls to action, promoting further engagement.',
  '2. Frame: Use this for framed information'
].join(seperator);

export const aboutUsBlockTypeDescription = [
  'Select the type of information you want to display in this block for the About Us page.',
  '1. Framed Call To Action: Use this to showcase key information in visually appealing way.',
  '2. Content Section: Best for displaying further information without providing a title',
  '3. Enhanced Call To Action: Use this to show images along with key information',
].join(seperator);

export const ourTeamBlockTypeDescription = [
  'Select the type of information you want to display in this block.',
  '1. People: Use this for showing information about everyone on the team'
].join(seperator);

export const pressPageBlockTypeDescription = [
  'Select the type of information you want to display in this block.',
  '1. Press Section: Use this for displaying press information both in a minified version and full version',
].join(seperator);

export const ourLeaderPageBlockTypeDescription = [
  'Select the type of information you want to display in this block.',
  '1. Profile: Use this to provide a full biography of the leader of the organization.',
].join(seperator);

export const contactUsBlockTypeDescription = [
  'Select the type of information you want to display in this block.',
  '1. Info Section: Use this for displaying your address, phone number, email etc', 
  '2. Contact Form: Best for collecting information from users'
].join(seperator);


// ... (blockTypeDescriptions and seperator remain the same)

// Map block types to their previous titles and values
const homePageMap = {
  callToAction: {
    title: 'Inviting information (convinces people to click on another link to learn more)',
    value: 'callToAction'
  },
  newsComponent: {
    title: 'Three images (each with a description)',
    value: 'newsComponent'
  },
  infoComponent: {
    title: 'Pure title and paragraphs',
    value: 'infoComponent'
  },
  pegasusComponent: {
    title: 'Inviting information, along with two images',
    value: 'pegasusComponent'
  },
  featuredComponent: {
    title: 'Logos of all companies that have featured us',
    value: 'featuredComponent'
  }
};

const participatePageMap = {
  callToAction: {
    title: 'Inviting information (convinces people to click on another link to learn more)',
    value: 'callToAction'
  },
  frame: {
    title: 'Three frames, each with an image, title, and description',
    value: 'frame'
  }
};

const aboutUsMap = {
  framedCallToAction: { 
    title: 'Three framed blocks, each with a title and description', 
    value: 'framedCallToAction'
  }, 
  contentSection: {
    title: 'One or two images and paragraphs, with plain white background',
    value: 'contentSection', 
  },
  enhancedCallToAction: {
    title: 'Two enhanced blocks, each with a title, image, and description',
    value: 'enhancedCallToAction',
  }
};

const ourTeamPageMap = {
  people: {
    title: 'Short profile of members of the team, each with an image, name, and title',
    value: 'people'
  }
}

const pressPageMap = {
  pressSection: {
    title: 'Searchable Page for press releases',
    value: 'pressSection'
  }
}

const ourLeaderPageMap = {
  profile: {
    title: 'Full profile of the leader, with an image, name, and title',
    value: 'profile'
  }
}

const contactUsMap = {
    infoSection: {
      title: 'Informative section, with address, email etc',
      value: 'infoSection',
    },
    contactForm: {
      title: 'Pure form for people to fill and submit',
      value: 'contactForm',
    }
}

export const blockTypeMap = {
  homePage: homePageMap,
  aboutUsPage: aboutUsMap,
  participatePage: participatePageMap,
  ourTeamPage: ourTeamPageMap,
  pressPage: pressPageMap,
  ourLeaderPage: ourLeaderPageMap,
  contactUsPage: contactUsMap,
};

export interface ValidBlockTypes {
  types: string[];
  keyAsString: string;
  keyAsTitle: string;
}

export const validBlockTypes: Record<string, ValidBlockTypes> = {
  homePage: {
    types: Object.keys(homePageMap),
    keyAsString: 'homePage',
    keyAsTitle: 'Home Page',
  },
  participatePage: {
    types: Object.keys(participatePageMap),
    keyAsString: 'participatePage',
    keyAsTitle: 'Participate Page',
  },
  aboutUsPage: {
    types: Object.keys(aboutUsMap),
    keyAsString: 'aboutUsPage',
    keyAsTitle: 'About Us Page',
  },
  ourTeamPage: {
    types: Object.keys(ourTeamPageMap),
    keyAsString: 'ourTeamPage',
    keyAsTitle: 'Our Team Page',
  },
  pressPage: {
    types: Object.keys(pressPageMap),
    keyAsString: 'pressPage',
    keyAsTitle: 'Press Page',
  },
  ourLeaderPage: {
    types: Object.keys(ourLeaderPageMap),
    keyAsString: 'ourLeaderPage',
    keyAsTitle: 'Our Leader Page',
  },
  contactUsPage: {
    types: Object.keys(contactUsMap),
    keyAsString: 'contactUsPage',
    keyAsTitle: 'Contact Us Page',
  },
};


export const pageTypeOptions = [
  { title: 'Home Page', value: 'homePage' },
  { title: 'Participate Page', value: 'participatePage' },
  { title: 'About Us Page', value: 'aboutUsPage' },
  { title: 'Our Team Page', value: 'ourTeamPage' },
  { title: 'Press Page', value: 'pressPage' },
  { title: 'Our Leader Page', value: 'ourLeaderPage' },
  { title: 'Contact Us Page', value: 'contactUsPage' }
]

export const blockTypeOptions = [
  { title: '1. Home Page: Inviting information (convinces people to click on another link to learn more)', value: 'callToAction' },
  { title: '2. Home Page: Three images (each with a description)', value: 'newsComponent' },
  { title: '3. Home Page: Pure title and paragraphs', value: 'infoComponent' },
  { title: '4. Home Page: Inviting information, along with two images', value: 'pegasusComponent' },
  { title: '5. Home Page: Logos of all companies that have featured us', value: 'featuredComponent' },
  { title: '1. Participate Page: Inviting information (convinces people to click on another link to learn more)', value: 'callToAction' },
  { title: '2. Particpate Page: Three frames, each with an image, title, and description', value: 'frame' },
  { title: '1. About Us Page: Three framed blocks, each with a title and description', value: 'framedCallToAction' },
  { title: '2: About Us Page: One or two images and paragraphs, with plain white background', value: 'contentSection'},
  { title: '3: About Us Page: Two enhanced blocks, each with a title, image, and description', value: 'enhancedCallToAction' },
  { title: '1. Our Team Page: Short profile of members of the team, each with an image, name, and title', value: 'people' },
  { title: '1. Press Page: Searchable page for press releases', value: 'pressSection' },
  { title: '1. Our Leader Page: Full profile of the leader, with an image, title, and description', value: 'profile' },
  { title: '1: Contact Us Page: Informative section, with address, email etc.', value: 'infoSection' },
  { title: '2: Contact Us Page: Pure form for people to fill and submit', value: 'contactForm' },
]



