import { useGetQuery } from '..';

export interface Metrics {
  usersOnline: number;
  usersActiveToday: number;
  usersActiveThisMonth: number;
  peakConcurrency: number;
  dashboard: number;
}

export const useDashboardMetrics = () => {
  const { data, isLoading, refetch, isSuccess, isRefetching, dataUpdatedAt } =
    useGetQuery({
      key: ['dashboard-metrics'],
      url: `/dashboard`,
      options: {
        staleTime: Infinity,
        refetchOnMount: false,
        refetchOnWindowFocus: false
      }
    });

  const metrics = (data?.data as Metrics) || {};

  return {
    isRefetching,
    isLoadingMetrics: isLoading,
    isSuccess,
    refetchMetrics: refetch,
    dataUpdatedAt,
    metrics
  };
};
