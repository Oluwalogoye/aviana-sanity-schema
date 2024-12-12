import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';

import { visionTool } from '@sanity/vision';
import { SchemaTypeDefinition } from 'sanity';

import { schemaTypes } from './schemaTypes';
import { 
  structure,
  defaultDocumentNode
} from './structure'

export default defineConfig({

  name: 'default',

  title: 'Aviana-website-builder',
  
  projectId: '7caz0k19',

  dataset: 'production',
  
  plugins: [
    
    structureTool({
      
      structure: structure,
      
      defaultDocumentNode: defaultDocumentNode

    }),

  ],
  
  schema: {

    types: schemaTypes as SchemaTypeDefinition[], // Ensure correct typing here

  },
  
});
