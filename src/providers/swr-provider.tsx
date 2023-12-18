'use client';
import { SWRConfig } from 'swr'
export const SWRProvider = ({ children }: { children: React.ReactNode }) => {
  return <SWRConfig
    value={{
      refreshInterval: 200,
      revalidateOnFocus: false,
      errorRetryCount: 0
    }}
  >
    {children}
  </SWRConfig>
};