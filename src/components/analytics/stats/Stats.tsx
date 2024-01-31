'use client';

import { clsx } from 'clsx';
import dayjs from 'dayjs';
import { Icon } from '@/components/icons';
import { StatCard } from '@/components/ui/stat-card';
import { useDashboardMetrics } from '@/hooks/query/analytics';

import relativeTime from 'dayjs/plugin/relativeTime';
import { Spinner } from '@/components/ui/spinner';

dayjs.extend(relativeTime);

export const AnalyticsStat = () => {
  const {
    isLoadingMetrics,
    metrics,
    dataUpdatedAt,
    isSuccess,
    refetchMetrics,
    isRefetching
  } = useDashboardMetrics();

  // Spinner
  if (isLoadingMetrics) {
    return (
      <div className="mt-[40px] min-h-[150px] flex items-center justify-center">
        <Spinner label="Loading metrics..." />
      </div>
    );
  }

  // Error message
  if (!isLoadingMetrics && !isSuccess!) {
    return (
      <div className="mt-[40px] min-h-[150px] flex items-center justify-center">
        <p className="text-center text-sm">Failed to retrieve metrics...</p>
      </div>
    );
  }

  return (
    <div>
      <header className="flex flex-col sm:flex-row items-center gap-3">
        {/* Last updated */}
        <p className="text-text text-md">
          Last updated {dayjs(dataUpdatedAt).fromNow()}
        </p>

        {/* Refresh button */}
        <button
          className="flex items-center gap-2"
          onClick={() => refetchMetrics()}
        >
          <span className={clsx({ 'animate-spin': isRefetching })}>
            <Icon.Refresh />
          </span>

          <span className="text-sm text-others-500">Refresh</span>
        </button>
      </header>

      {/* Spinner */}
      {isRefetching && (
        <div className="mt-[40px]">
          <Spinner label="Loading metrics..." />;
        </div>
      )}

      {/* Stat card */}
      {!isRefetching && (
        <div className="mt-2 grid grid-cols-[repeat(auto-fill,minmax(228px,1fr))] gap-x-[13px] gap-y-[17px]">
          {Object.entries(metrics).map(([label, value]) => (
            <StatCard
              label={label}
              value={value}
              key={label}
              is_bytes={label === 'dashboard'}
              remaining_bytes="512"
            />
          ))}
        </div>
      )}
    </div>
  );
};
