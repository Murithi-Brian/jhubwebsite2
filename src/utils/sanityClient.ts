import { createClient } from "@sanity/client";

// type SanityClient = {
//   projectId: string,
//   dataset: string,
//   apiVersion: string,
//   useCdn: boolean,
// }

export const sanityClient = createClient({
  projectId: "mmlot90j", // find this at manage.sanity.io or in your sanity.json
  dataset: "production", // this is from those question during 'sanity init'
  apiVersion: "2024-03-08",
  useCdn: true,
});
