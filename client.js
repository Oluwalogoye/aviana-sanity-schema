import { createClient } from '@sanity/client';

const projectId = process.env.SANITY_PROJECT_ID || '7caz0k19';
const dataset = process.env.SANITY_DATASET || 'production';

const client = createClient({
  projectId: projectId, // find this at manage.sanity.io or in your sanity.json
  dataset: dataset, // commonly 'production'
  apiVersion: '2024-12-01', // use a date at or after your project was created
  useCdn: false, // `false` if you want fresh data
});

export default client;
