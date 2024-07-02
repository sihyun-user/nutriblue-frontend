import Spinner from './Spinner';

export default function FullPageSpinner() {
  return (
    <div className="full-page flex flex-col">
      <Spinner />
      <span className="font-medium">準備中...</span>
    </div>
  );
}
