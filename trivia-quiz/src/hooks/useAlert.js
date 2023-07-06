import {useCallback, useEffect} from 'react';

export const useAlert = (alertMessage) => {
  const handleBeforeUnload = useCallback((e) => {
    e.preventDefault();
    const message = alertMessage;
    e.returnValue = message;
    return message;
  }, [alertMessage]);

  useEffect(() => {
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [handleBeforeUnload]);
};

