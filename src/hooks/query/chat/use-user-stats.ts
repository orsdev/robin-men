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
    url: `/chat_dashboard`
  });

  const user_stats = (data?.data as UserStats) || {};

  return {
    isLoadingStats: isLoading,
    isSuccess,
    user_stats
  };
};
