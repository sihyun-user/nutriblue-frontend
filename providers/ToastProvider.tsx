'use client';

import { Toaster } from 'react-hot-toast';

export default function toaster() {
  const timeoutSec = Number(process.env.NEXT_TIMEOUT_PUBLIC_SEC) || 3000;
  return (
    <Toaster
      position="top-center"
      reverseOrder={false}
      gutter={12}
      containerStyle={{ margin: '8px' }}
      toastOptions={{
        success: {
          duration: timeoutSec
        },
        error: {
          duration: timeoutSec
        },
        style: {
          fontSize: '16px',
          maxWidth: '500px',
          padding: '16px',
          fontWeight: '500',
          color: '#4F5964',
          backgroundColor: '#FFFFFF'
        }
      }}
    />
  );
}
