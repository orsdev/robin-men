'use client';

import { useState } from 'react';
import { ColumnFiltersState, Table } from '@tanstack/react-table';
import { ChatMessages, DirectMessagesFilterColumnsEnum } from '..';
import { TimeFrameEnum } from './helper-utils';

interface UseChatFilter {
  table: Table<ChatMessages>;
  onClearFilter(): void;
  onCloseDrawer(): void;
}

type HandleSetFormData = {
  name: string;
  value: string | Date;
};

const InitialFormData = {
  messages: '',
  from: undefined,
  to: undefined,
  storage: ''
};

export const useChatFilter = ({
  table,
  onClearFilter,
  onCloseDrawer
}: UseChatFilter) => {
  const [selectedTimeFrame, setSelectedTimeFrame] = useState<TimeFrameEnum>(
    TimeFrameEnum.DEFAULT
  );
  const [formData, setFormData] = useState({ ...InitialFormData });
  const [selectedFilters, setSelectedFilters] = useState<ColumnFiltersState>(
    []
  );

  const handleSetTimeFrame = (value: TimeFrameEnum) => {
    setSelectedTimeFrame(value);
  };

  /**
   * Handles updating the formData state based on the provided name and value.
   *
   * @param {object} params - The parameters for setting formData.
   * @param {string} params.name - The name/key for formData.
   * @param {any} params.value - The value to be set for the specified name/key in formData.
   */
  const handleSetFormData = ({ name, value }: HandleSetFormData) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  /**
   * Handles clearing filters.
   *
   * This function invokes onClearFilter to clear filters, resets formData to initial values,
   * and closes the drawer using onCloseDrawer.
   */
  const handleClearFilters = () => {
    onClearFilter();
    setFormData({ ...InitialFormData });
    onCloseDrawer();
  };

  /**
   * Merges 'from' and 'to' values from formData to create a date range string.
   *
   * @returns {string} Merged date range string or an empty string if either 'from' or 'to' is missing.
   */
  const mergeFromAndToDateRange = () => {
    if (formData['from'] && formData['to']) {
      return `${formData['from']}-${formData['to']}`;
    }

    return '';
  };

  /**
   * Handles adding the date range to selectedFilters based on the current column.
   *
   * @returns {Array} Updated array of filters with the merged date range or the original selectedFilters if no date range is available.
   */
  const handleAddDateRange = () => {
    if (!mergeFromAndToDateRange()) return selectedFilters;

    const current_column = table.getColumn(
      DirectMessagesFilterColumnsEnum.DATE_CREATED
    )!;

    const remainingFilters = selectedFilters.filter(
      (item) => item.id !== current_column.id
    );

    return [
      ...remainingFilters,
      { id: current_column.id, value: mergeFromAndToDateRange() }
    ];
  };

  return {
    handleAddDateRange,
    handleSetFormData,
    handleClearFilters,
    setSelectedFilters,
    selectedTimeFrame,
    handleSetTimeFrame,
    formData,
    selectedFilters
  };
};
