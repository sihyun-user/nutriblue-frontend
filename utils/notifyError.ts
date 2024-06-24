import axios, { AxiosError } from 'axios';
import toast from 'react-hot-toast';

export default function notifyError(
  error: Error | AxiosError,
  defaultMessage?: string
) {
  let errorMessage;

  if (axios.isAxiosError(error)) {
    errorMessage = error.response?.data?.message || '請求錯誤';
  } else {
    errorMessage = error.message || defaultMessage || '未知的錯誤';
  }

  toast.error(errorMessage);
}
