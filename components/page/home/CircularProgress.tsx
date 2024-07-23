import clsx from 'clsx';

interface Props {
  caloriespercent: number;
  caloriesBalance: number;
}

export default function CircularProgress({
  caloriespercent,
  caloriesBalance
}: Props) {
  return (
    <div className="relative size-40">
      <svg className="size-full" viewBox="0 0 100 100">
        <circle
          className="stroke-current text-gray-200"
          strokeWidth="8"
          cx="50"
          cy="50"
          r="40"
          fill="transparent"
        />
        <circle
          className={clsx(
            'progress-ring__circle stroke-current',
            caloriespercent > 100 ? 'text-red-400' : 'text-blue-400'
          )}
          strokeWidth="8"
          strokeLinecap="round"
          cx="50"
          cy="50"
          r="40"
          fill="transparent"
          strokeDasharray="251.2"
          strokeDashoffset={`calc(251.2px - (251.2px * ${caloriespercent}) / 100)`}
        />
        <text
          style={{ fill: '#636565' }}
          x="50"
          y="30"
          fontSize="9"
          textAnchor="middle"
          alignmentBaseline="middle"
        >
          尚可攝取
        </text>
        <text
          className="font-bold"
          style={{ fill: '#5f8cb6' }}
          x="50"
          y="55"
          fontSize="24"
          textAnchor="middle"
          alignmentBaseline="middle"
        >
          {caloriesBalance}
        </text>
        <text
          x="50"
          y="75"
          fontSize="9"
          style={{ fill: '#636565' }}
          textAnchor="middle"
          alignmentBaseline="middle"
        >
          Kcal
        </text>
      </svg>
    </div>
  );
}
