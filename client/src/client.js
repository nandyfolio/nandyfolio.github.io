import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
console.log(process.env)
export const client = sanityClient({
  projectId: "h7hmv2hh",// process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: 'sk0RZr3sh9vD5rUvKhsgS9CtTJ4pU6gmIKUItUiuuDGJ4KgwdtQhY8IvJZj2q0zfA1UljPbzzjAtPYSfXdM1bJEMvBSNJPcVDnu0g4PD3Krs36X4bnnqofwD8QZTqLnF4F6oKIfhqPV13vyVdTR3oDZyGT41ACDAB0NQCMqdB6NlUfL57Ur7'//process.env.REACT_APP_SANITY_TOKEN,
});


const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
