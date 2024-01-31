import { useQuery as useReactQuery } from '@tanstack/react-query';
import { fetcher } from '@/lib/api';

import { UseQueryOptions } from '@tanstack/react-query';

export type QueryTypeOptions = UseQueryOptions<any, unknown, any, string[]>;

type UseGetQuery = {
  key: Array<string>;
  url: string;
  options?: Partial<QueryTypeOptions>;
};

export const useGetQuery = ({ key, url, options }: UseGetQuery) => {
  const token = '';
  const { data, isLoading, isFetching, isRefetching, refetch, dataUpdatedAt } =
    useReactQuery({
      queryKey: key,
      queryFn: () =>
        fetcher({
          url,
          headers: { Authorization: `Bearer ${token}` }
        }),
      ...options
    });

  return { data, isLoading, isFetching, isRefetching, dataUpdatedAt, refetch };
};
