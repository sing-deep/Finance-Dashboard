import { useState, useEffect } from "react";

export function useSimulatedLoading(delayMs = 900) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => setIsLoading(false), delayMs);
    return () => clearTimeout(timeoutId);
  }, [delayMs]);

  return isLoading;
}