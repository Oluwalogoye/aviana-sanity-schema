import groq from 'groq';
import client from '../client';
export const fetchImage = async imageRef => {
  const contentQuery = groq`*[_id == "${imageRef}"][0] {
    url
  }`;
  return await client.fetch(contentQuery, {
    imageRef
  });
};
export const fetchBlock = async blockId => {
  const query = groq`*[_id == "${blockId}"][0]{
    title, 
    blockType,
    pageType,
    homePageContent,
    participatePageContent,
    aboutUsContent,
    ourTeamPageContent,
    pressPageContent,
    ourLeaderPageContent,
    contactUsContent
  }`;
  return await client.fetch(query, {
    blockId
  });
};
export const fetchBlockContent = async (contentRef, typename) => {
  let contentQuery = ``;
  if (typename == 'callToAction') {
    contentQuery = groq`*[_id == "${contentRef}"][0] {
      title,
      descriptions,
      buttonName,
      backgroundImage{
        asset->{
          url
        }
      },
      hideLogo
    }`;
  } else if (typename == 'infoComponent') {
    contentQuery = groq`*[_id == "${contentRef}"][0] {
      header,
      paragraphs,
      dots{
        asset->{
          url
        }
      }
    }`;
  } else if (typename == 'pegasusComponent') {
    contentQuery = groq`*[_id == "${contentRef}"][0]{
      logo{
        asset->{
          url
        }
      },
      title,
      descriptions,
      backgroundImage{
        asset->{
          url
        }
      },
      buttonName
    }
    `;
  } else if (typename == 'newsComponent') {
    contentQuery = groq`*[_id == "${contentRef}"] [0] {

    title, 

    newsItems
    
    } `;
  } else if (typename == 'featuredComponent') {
    contentQuery = groq`*[_id == "${contentRef}"][0]{

      title,

      featuredCompanies

    }`;
  } else if (typename == 'frame') {
    contentQuery = groq`*[_id == "${contentRef}"] [0] {

      featuredItems

    }`;
  } else if (typename == 'framedCallToAction') {
    contentQuery = groq`*[_id == "${contentRef}"] [0] {
    
      backgroundImg {
      
        asset -> {
        
          url
        
        }
      
      },

      framedItems
    
    }`;
  } else if (typename === 'contentSection') {
    contentQuery = groq`*[_id == "${contentRef}"] [0] {
    
      title,

      images [] {
       
        asset -> {
        
          url
        
        }
       
      },

      descriptions
    
    }`;
  } else if (typename == 'enhancedCallToAction') {
    contentQuery = groq`*[_id == "${contentRef}"] [0] {

      backgroundImage {
      
        asset -> {
        
          url
        
        }
      
      },

      enhancedItems
    
    }`;
  } else if (typename == 'people') {
    contentQuery = groq`*[_id == "${contentRef}"] [0] {

      title,

      everyone [] {
      
        name,

        image,

        title,

        description

      }

    }`;
  } else if (typename === 'pressSection') {
    contentQuery = groq`*[_id == "${contentRef}"] [0] {
    
      title, 

      pressReleases, 

      decorativeImage {
      
        asset -> {
        
          url
        
        }
      
      }
    
    }`;
  } else if (typename == 'profile') {
    contentQuery = groq`*[_id == "${contentRef}"] [0] {
    
      name,
      
      image {
      
        asset -> {
        
          url
        
        }
      
      },

      descriptions,

      organizationInfo
    
    }`;
  } else if (typename == 'infoSection') {
    contentQuery = groq`*[_id == "${contentRef}"] [0] {
    
      address,

      addressLink,

      phoneNumber,

      emailAddress,

      descriptions,

      backgroundImage {
      
        asset -> {
        
          url
        
        }
      
      }
    
    }`;
  } else if (typename == 'contactForm') {
    contentQuery = groq`*[_id == "${contentRef}"] [0] {
    
      title,

      firstName,

      lastName,

      emailAddress,

      phoneNumber
    
    }`;
  }
  console.log("query", contentQuery);
  return await client.fetch(contentQuery, {
    contentRef
  });
};
export const fetchMenu = async menuRef => {
  const menuQuery = groq`*[_id == "${menuRef}"][0] {
    name,
    homePage
  }`;
  return await client.fetch(menuQuery, {
    menuRef
  });
};
export const fetchFurtherContent = async (contentRef, typename) => {
  let contentQuery = '';
  if (typename === 'newsComponent') {
    contentQuery = groq`*[_id == "${contentRef}"] [0] {
    
      title,

      imageSrc {
      
        asset -> {
        
          url
        
        }
      
      },

      caption,

      buttonText,

      link

    }`;
  } else if (typename === 'featuredComponent') {
    contentQuery = groq`*[_id == "${contentRef}"][0] {

      name,

      logo {
      
        asset -> {
        
          url
        
        }
      
      },

      url
    
    }`;
  } else if (typename === 'frame') {
    contentQuery = groq`*[_id == "${contentRef}"] [0] {
    
      title, 

      description,

      image {
      
        asset -> {
        
          url
        
        }
      
      }
    
    }`;
  } else if (typename === 'framedCallToAction') {
    contentQuery = groq`*[_id == "${contentRef}"] [0] {
    
      title,

      description
    
    }`;
  } else if (typename === 'enhancedCallToAction') {
    contentQuery = groq`*[_id == "${contentRef}"] [0] {
    
      title,

      descriptions,

      image {
      
        asset -> {
        
          url
        
        }
      
      }
    
    }`;
  } else if (typename === 'pressSection') {
    contentQuery = groq`*[_id == "${contentRef}"] [0] {
    
      title,

      image {
      
        asset -> {
        
          url   
        
        }
      
      },

      descriptions,

      shortDescription
     
    }`;
  }

  // add more cases for other typenames as needed

  console.log("further content query", contentQuery);
  return await client.fetch(contentQuery, {
    contentRef
  });
};

// const fetchBlockContent