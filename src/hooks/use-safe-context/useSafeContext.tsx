import React, { useContext } from 'react';

/**
 * A custom hook to safely use context values.
 * @param context Context object to be used.
 * @param errorMessage Error message to be shown when the context is not available.
 * @returns Context value or throws an error if the context is not available.
 */
function useSafeContext<T>(
  context: React.Context<T | undefined>,
  errorMessage: string
): T {
  const contextValue = useContext(context);

  if (contextValue === undefined) {
    throw new Error(errorMessage);
  }

  return contextValue;
}

export default useSafeContext;
