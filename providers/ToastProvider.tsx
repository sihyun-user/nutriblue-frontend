'use client';

import { Toaster } from 'react-hot-toast';

export default function toaster() {
  return (
    <Toaster
      position="top-center"
      reverseOrder={false}
      gutter={12}
      containerStyle={{ margin: '8px' }}
      toastOptions={{
        success: {
          duration: 3000
        },
        error: {
          duration: 3000
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
