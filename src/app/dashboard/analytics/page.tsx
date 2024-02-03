import { AnalyticsStat } from '@/components/analytics';
import {
  ActiveDailyUsers,
  ActiveMonthlyUsers
} from '@/components/analytics/charts';

export default function AnalyticsPage() {
  return (
    <section>
      {/* Stats */}
      <AnalyticsStat />
      {/* Divider */}
      <hr className="flex w-full my-[25px] border-others-800 opacity-[0.1]" />

      {/* Charts */}
      <div className="flex flex-col xl:flex-row gap-[23px] w-full">
        <div className="flex-1">
          <ActiveDailyUsers />
        </div>
        <div className="flex-1">
          <ActiveMonthlyUsers />
        </div>
      </div>
    </section>
  );
}
