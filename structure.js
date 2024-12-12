// ./structure.js (.ts)
// import { WebPreview, JsonView } from './previews'

import PageBlockPreview from './jsx-dist/previews/page-block/PageBlockPreview'
import PressReleasePreview from './jsx-dist/previews/press-release/PressReleasePreview'
import MenuBlockPreview from './jsx-dist/previews/menu-block/MenuBlockPreview'

// note: context includes `currentUser` and the client
export const structure = (S, context) =>
  // S.list()
  //   .title('Content')
  //   .items([
  //     S.listItem()
  //       .title('Settings')
  //       .child(
  //         S.document()
  //           .schemaType('siteSettings')
  //           .documentId('siteSettings')
  //       ),
  //     ...S.documentTypeListItems()
  //   ])
    S.list()
    .title('Content')
    .items([
      // S.listItem()
      //   .title('Sermons')
      //   .child(
      //     S.document()
      //       .schemaType('pressRelease')
      //       .documentId('pressRelease')
      //   ),
      S.listItem()
        .title('Page')
        .schemaType('page')
        .child(
          S.documentTypeList('page').title('Pages')
          // S.document()
          //   .schemaType('page')
        ), 
      S.listItem()
        .title('Press Release')
        .schemaType('pressRelease')
          .child(
            S.documentTypeList('pressRelease').title('PressReleases')
          ),
        // ...S.documentTypeListItems()
      S.listItem()
        .title('Menu')
        .schemaType('menuBlock')
          .child(
              S.documentTypeList('menuBlock').title('Menu')
          ),
    ])

export const defaultDocumentNode = (S, { schemaType }) => {
  // Conditionally return a different configuration based on the schema type
  if (schemaType === 'page') {
    return S.document().views([
      S.view.form(),
      S.view.component(PageBlockPreview).title('Preview')
      // S.view.component(PageBlockPreview).title('Web')
    ])
  } else if (schemaType === 'pressRelease') {
    return S.document().views([
      S.view.form(),
      S.view.component(PressReleasePreview).title('Preview')
    ])
  } else if (schemaType === 'menuBlock') {
    return S.document().views([
      S.view.form(),
      S.view.component(MenuBlockPreview).title('Preview')
    ])
  }
  
}






// export const defaultDocumentNode = (S, {schemaType}) => {
//   // Conditionally return a different configuration based on the schema type
//   if (schemaType === "post") {
//     return S.document().views([
//       S.view.form(),
//       S.view.component(WebPreview).title('Web')
//     ])  
//  }

//  return S.document().views([
//     S.view.form(),
//     S.view.component(JsonView).title('JSON')
//   ])
// }