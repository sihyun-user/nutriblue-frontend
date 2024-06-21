import { Toaster } from 'react-hot-toast';

export default function ToasterControl() {
  return (
    <Toaster
      position="top-right"
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
          padding: '16px 24px',
          fontWeight: '600',
          color: 'text-white',
          backgroundColor: 'bg-cyan-400'
        }
      }}
    />
  );
}
