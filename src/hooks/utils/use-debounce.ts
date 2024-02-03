import { useEffect, useState } from 'react';

export const useDebounce = () => {
  const [value, setFieldValue] = useState('');
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [value]);

  const handleInputChange = (val: string) => {
    setFieldValue(val);
  };

  const handleClearInput = () => {
    setFieldValue('');
    setDebouncedValue('');
  };

  return {
    value,
    debouncedValue,
    handleInputChange,
    handleClearInput
  };
};
