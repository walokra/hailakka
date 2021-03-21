import { createContext } from 'react';

const DEFAULT_CONTEXT = {
  htmlFilename: 'uutiset',
  title: 'Uutiset',
};

export const CategoryContext = createContext(DEFAULT_CONTEXT);
