import { QueryClient } from 'react-query';
import { getUser } from '../queries/useUsers';

export const prefetchUser = async (queryClient: QueryClient) => {
  await queryClient.prefetchQuery('users', () => getUser());
};
