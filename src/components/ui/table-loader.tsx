import { FC } from 'react';
import { Spinner } from './spinner';

interface TableLoader {
  colSpan?: number;
}

export const TableLoader: FC<TableLoader> = ({ colSpan = 5 }) => {
  return (
    <tr>
      <td colSpan={colSpan}>
        <span className="flex justify-center items-center min-h-[100px]">
          <Spinner />
        </span>
      </td>
    </tr>
  );
};
