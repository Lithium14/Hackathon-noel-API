import expressLoader from './express';
import { Application } from 'express';
import typeormLoader from './typeorm';

export default async (app: Application ) => {
  await expressLoader(app);
  console.log('Express Intialized');
  await typeormLoader();
  console.log('Typeorm initialized');
  // Rajouter le loader MySQL
};
