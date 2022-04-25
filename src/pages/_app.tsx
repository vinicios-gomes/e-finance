import type { AppProps } from 'next/app';
import { Hydrate, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { queryClient } from '@app/services/react-query';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '@app/styles/theme';
import { makeServer } from '@app/services/mirage';
import Head from 'next/head';
import projectConfig from '../../package.json';

const isDev = process.env.NODE_ENV === 'development';
const mirageServerEnabled = process.env.NEXT_PUBLIC_MIRAGE_SERVER === 'true';

if (isDev && mirageServerEnabled) {
  makeServer();
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>{projectConfig.name}</title>
      </Head>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.deHydratedState}>
          <Component {...pageProps} />
          <ReactQueryDevtools initialIsOpen={false} />
        </Hydrate>
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default MyApp;
