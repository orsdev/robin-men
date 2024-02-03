import { ChatMessages } from '@/components/chat';
import { useGetQuery } from '..';

interface ChatResponse {
  data: Array<ChatMessages>;
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: any;
  nextPage: number;
}

type UseDirectMessages = {
  currentPage: number;
};

export const DirectMessagesPageSize = 8;

export const useDirectMessages = ({ currentPage }: UseDirectMessages) => {
  const { data, isLoading, isSuccess, isFetching } = useGetQuery({
    key: ['direct_messages', currentPage.toString()],
    url: `/messages?page=${currentPage}&limit=${DirectMessagesPageSize}`,
    options: {
      staleTime: Infinity
    }
  });

  const response = data as ChatResponse;

  return {
    isLoadingMessages: isLoading,
    isSuccess,
    totalPages: response?.totalDocs || 0,
    direct_messages: response?.data || [],
    isFetching
  };
};
