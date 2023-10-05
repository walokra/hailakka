/* eslint-disable react/jsx-no-constructed-context-values */
import React from 'react';

export interface Theme {
  colorScheme: 'dark' | 'light';
}

type ThemeContextState = { colorScheme: string };

const themeContextDefaultValue = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setState: (state: ThemeContextState) => {},
  state: { colorScheme: 'dark' },
};

export const ThemeContext = React.createContext(themeContextDefaultValue);

const ThemeProvider: React.FunctionComponent<{ children: React.ReactElement }> = ({ children }) => {
  const [state, setState] = React.useState(themeContextDefaultValue.state);

  return <ThemeContext.Provider value={{ setState, state }}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
