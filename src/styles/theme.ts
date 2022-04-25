import { extendTheme } from '@chakra-ui/react';
import projectConfig from '../../package.json';

export const theme = extendTheme({
  config: {
    cssVarPrefix: projectConfig.name,
  },
  font: {
    heading: '"Roboto", sans-serif',
    body: '"Roboto", sans-serif',
  },
});
