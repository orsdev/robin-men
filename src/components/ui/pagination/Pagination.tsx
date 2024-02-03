'use client';

import { FC } from 'react';
// import ArrowLeft from "remixicon-react/ArrowLeftLineIcon";
// import ArrowRight from "remixicon-react/ArrowRightLineIcon";
import ReactPaginate from 'react-paginate';

import Style from './Style.module.scss';
import { DirectMessagesPageSize } from '@/hooks/query';
import { cn } from '@/lib';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface IProps {
  total: number;
  page: number;
  pageSize: number;
  handlePageClick(value: { selected: number }): void;
}

export const CustomPagination: FC<IProps> = ({
  handlePageClick,
  pageSize = 8,
  page = 1,
  total = 0
}) => {
  return (
    <div>
      <ReactPaginate
        breakLabel="..."
        previousLabel={
          <button className="flex items-center justify-center rounded-[4px] border border-solid border-[#dfe3e8]">
            <ChevronLeft size={20} />
          </button>
        }
        nextLabel={
          <button className="flex items-center justify-center  rounded-[4px] border border-solid border-[#dfe3e8]">
            <ChevronRight size={20} />
          </button>
        }
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={Math.ceil(total / pageSize)}
        className={Style.paginationContainer}
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-prev"
        previousLinkClassName="page-link"
        nextClassName="page-next"
        nextLinkClassName="page-link"
        breakClassName="page-item"
        breakLinkClassName="page-link"
        renderOnZeroPageCount={() => null}
      />
    </div>
  );
};
