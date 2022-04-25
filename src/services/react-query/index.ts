import { QueryClient, QueryClientConfig } from 'react-query';

const ONE_HOUR_IN_MS = 60 * 60 * 1000;

export const queryClientDefaultOptions: QueryClientConfig['defaultOptions'] = {
  queries: {
    staleTime: ONE_HOUR_IN_MS,
    retryDelay: 0,
  },
};

export const queryClient = new QueryClient({
  defaultOptions: queryClientDefaultOptions,
});
