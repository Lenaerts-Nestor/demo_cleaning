interface StatProps {
  value: string;
  label: string;
}

export default function Stat({ value, label }: StatProps) {
  return (
    <div className="text-center">
      <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-600">
        {value}
      </p>
      <p className="text-sm sm:text-base text-gray-600 mt-2">{label}</p>
    </div>
  );
}
