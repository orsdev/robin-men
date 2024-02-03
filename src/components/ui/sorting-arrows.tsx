import { UTILS } from '@/utils';
import { Icon } from '../icons';
import { cn } from '@/lib';

export const SortingArrows = ({ direction }: { direction: string }) => (
  <div className={cn('flex flex-col items-center fill-muted')}>
    <span
      className={cn(
        'flex flex-col items-center fill-muted',
        UTILS.arrowSortingClassOpacity(direction, 'up')
      )}
    >
      <Icon.Triangle />
    </span>

    <span
      className={cn(
        'transform rotate-180 flex flex-col items-center fill-muted',
        UTILS.arrowSortingClassOpacity(direction, 'down')
      )}
    >
      <Icon.Triangle />
    </span>
  </div>
);
