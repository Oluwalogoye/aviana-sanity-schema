import { fetchFurtherContent, fetchMenu } from '../query';

export const fetchMenuItems = async (menuItems) => {
  const refinedMenuItems = await Promise.all(
    menuItems.map(menuItemRef => {
      return fetchMenu(menuItemRef._ref)
        .catch(error => {
          console.error("Error fetching menu item", error);
          return null;
        });
    })
  );
  
  return refinedMenuItems? refinedMenuItems.filter(item => item !== null) : [];
}  

// Move the then handler logic into a separate function
export const handleFetchedContent = async (typename, content) => {
  if ( typename === 'newsComponent' && content.newsItems ) {

    const newsComponentContent = {

      title: content?.title,

      newsItems: []

    }

    const newsItemsContent = await Promise.all(

      content.newsItems.map(newsItem => {

        return fetchFurtherContent(newsItem._ref, typename)

          .catch(error => {

            console.error("Error fetching news item", error);

            return null;

          });

      })

    );

    const validNewsItemsContent = newsItemsContent.filter(item => item !== null);

    newsComponentContent.newsItems = validNewsItemsContent;

    console.log("News Component content", newsComponentContent.newsItems);

    return { furtherContent: newsComponentContent }

  } else if (typename === 'featuredComponent' && content.featuredCompanies ) {
    
    const featuredComponentContent = {
      title: content.title,
      featuredCompanies: []
    }

    const featuredCompaniesContent = await Promise.all(
      
      content.featuredCompanies.map(featuredCompany => {

        return fetchFurtherContent(featuredCompany._ref, typename)

          .catch(error => {

            console.error("Error fetching featured company", error);

            return null;

          });

      })
    
    );

    const validFeaturedCompaniesContents = featuredCompaniesContent.filter(item => item !== null);

    featuredComponentContent.featuredCompanies = validFeaturedCompaniesContents;

    console.log("featured component contents", featuredComponentContent.featuredCompanies);
    
    return { furtherContent: featuredComponentContent };

  } else if ( typename === 'frame' && content.featuredItems ) {

    const frameContent = {
      featuredItems: []
    };

    const featuredItemsContent = await Promise.all(

      content.featuredItems.map(featuredItem => {

        return fetchFurtherContent(featuredItem._ref, typename)

          .catch(error => {

            console.error("error fetching featured item", error);

            return null;

          });

      })

    );

    const validFeaturedItemsContents = featuredItemsContent.filter(item => item !== null);

    frameContent.featuredItems = validFeaturedItemsContents;

    console.log("Featured Items contents", frameContent.featuredItems);

    return { furtherContent: frameContent };

  } else if ( typename === 'framedCallToAction' && content.framedItems ) {

    const framedCallToActionContent = {
      backgroundImg: content.backgroundImg,
      framedItems: []
    }

    const framedItemsContent = await Promise.all(

      content.framedItems.map(framedItem => {

        return fetchFurtherContent(framedItem._ref, typename)

          .catch(error => {

            console.error("Error fetching framed item", error);

            return null;

          });

      })

    );

    const validFramedItemsContent = framedItemsContent.filter(item => item !== null);

    framedCallToActionContent.framedItems = validFramedItemsContent;

    console.log("Framed Call to Action content", framedCallToActionContent.framedItems);

    return { furtherContent : framedCallToActionContent };

  } else if ( typename === 'enhancedCallToAction' && content.enhancedItems ) {

    const enhancedCallToActionContent = {
      backgroundImage: content.backgroundImage,
      enhancedItems: []
    }

    const enhancedItemsContent = await Promise.all(

      content.enhancedItems.map(enhancedItem => {

        return fetchFurtherContent(enhancedItem._ref, typename)

          .catch(error => {

            console.error("Error fetching enhanced item", error);

            return null;

          });

      })

    );

    const validEnhancedItemsContent = enhancedItemsContent.filter(item => item !== null);

    enhancedCallToActionContent.enhancedItems = validEnhancedItemsContent;

    console.log("Enhanced Call to Action content", enhancedCallToActionContent.enhancedItems);

    return { furtherContent : enhancedCallToActionContent };

  } else if ( typename === 'pressSection' && content.pressReleases ) {

    const pressSectionContent = {
      title: content.title,
      decorativeImage: content.decorativeImage,
      pressReleases: [],
    }

    const pressReleasesContent = await Promise.all(

      content.pressReleases.map(pressRelease => {

        return fetchFurtherContent(pressRelease._ref, typename)

          .catch(error => {

            console.error("Error fetching press release", error);

            return null;

          });

      })

    );

    const validPressReleasesContent = pressReleasesContent.filter(item => item !== null);

    pressSectionContent.pressReleases = validPressReleasesContent;

    console.log("Press releases", pressSectionContent.pressReleases);

    return { furtherContent : pressSectionContent };

  }else {
    return { content } // Return content
  }
}
// ... other utility functions

// Determine contentRef based on pageType
export const getContentRef = (block) => {
  if (block?.pageType === 'homePage') {
    return block?.homePageContent?._ref;
  } else if (block?.pageType === 'participatePage') {
    return block?.participatePageContent?._ref;
  } else if (block?.pageType === 'aboutUsPage') {
    return block?.aboutUsContent?._ref;
  } else if (block?.pageType === 'ourTeamPage') {
    return block?.ourTeamPageContent?._ref;
  } else if (block?.pageType === 'pressPage') {
    return block?.pressPageContent?._ref;
  } else if (block?.pageType === 'ourLeaderPage') {
    return block?.ourLeaderPageContent?._ref;
  } else if (block?.pageType === 'contactUsPage') {
    return block?.contactUsContent?._ref;
  } else {
    // Hanlde the case where pageType is neither 'homePage' nor 'aboutUsPage'
    // You might want to log an error or return a default value here
    console.error("Invalid pageType:", block?.pageType);
    return null; // or some default value
  }
}