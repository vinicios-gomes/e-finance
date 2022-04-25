import { BaseQuery } from '@app/interfaces/BaseQuery';
import { User } from '@app/interfaces/User';
import { api } from '@app/services/api';
import { useQuery, UseQueryResult } from 'react-query';

interface useUsersReturn extends BaseQuery {
  data: User[];
}

export const getUser = async (): Promise<User[]> => {
  const { data } = await api.get<User[]>('/users');
  return data;
};

export const useUsers = (): useUsersReturn => {
  const {
    data = [],
    isLoading,
    isError,
    isSuccess,
    error,
  } = useQuery('users', () => getUser());

  return { data, isLoading, isError, isSuccess, error };
};
