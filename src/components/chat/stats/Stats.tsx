'use client';

import { StatCard } from '@/components/ui/stat-card';
import { Spinner } from '@/components/ui/spinner';
import { useUserStats } from '@/hooks/query';

export const ChatStat = () => {
  const { isLoadingStats, user_stats, isSuccess } = useUserStats();

  // Spinner
  if (isLoadingStats) {
    return (
      <div className="mt-[40px] min-h-[150px] flex items-center justify-center">
        <Spinner label="Loading stats..." />
      </div>
    );
  }

  // Error message
  if (!isLoadingStats && !isSuccess!) {
    return (
      <div className="mt-[40px] min-h-[150px] flex items-center justify-center">
        <p className="text-center text-sm">Failed to retrieve stats...</p>
      </div>
    );
  }

  return (
    <div>
      {/* Stat card */}
      <div className="mt-2 grid grid-cols-[repeat(auto-fill,minmax(228px,1fr))] gap-x-[13px] gap-y-[17px]">
        {Object.entries(user_stats).map(([label, value]) => (
          <StatCard
            label={label}
            value={value}
            key={label}
            is_bytes={label === 'totalStorageUsed'}
          />
        ))}
      </div>
    </div>
  );
};
