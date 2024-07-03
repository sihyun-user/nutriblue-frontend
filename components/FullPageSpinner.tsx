import Spinner from './Spinner';

export default function FullPageSpinner() {
  return (
    <div className="full-page flex flex-col">
      <Spinner />
      <span className="font-medium">讀取中...</span>
    </div>
  );
}
