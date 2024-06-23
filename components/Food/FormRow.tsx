interface Props {
  label?: string;
  error?: string;
  unit?: string;
  children: React.ReactElement;
}

export default function FormRow({ label, error, unit, children }: Props) {
  return (
    <div className="flex flex-col">
      {label && (
        <label className="mb-3" htmlFor={children.props?.id}>
          {label}
        </label>
      )}
      {unit ? (
        <div className="relative">
          {children}
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-primary-400">
            {unit}
          </span>
        </div>
      ) : (
        children
      )}
      {error && <span className="pt-1 text-sm text-red-500">{error}</span>}
    </div>
  );
}
