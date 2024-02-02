import { useGetQuery } from '..';

export interface UserStats {
  numberOfUsers: number;
  totalMessagesSent: number;
  totalStorageUsed: number;
  totalMediaSent: number;
}

export const useUserStats = () => {
  const { data, isLoading, isSuccess } = useGetQuery({
    key: ['user_stats'],
    url: `/chat_dashboard`,
    options: {
      staleTime: Infinity,
      refetchOnMount: false,
      refetchOnWindowFocus: false
    }
  });

  const user_stats = (data?.data as UserStats) || {};

  return {
    isLoadingStats: isLoading,
    isSuccess,
    user_stats
  };
};
