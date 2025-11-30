const headerOptions = [
  {
    label: "Monday",
    value: "2024-12-01",
  },
  {
    label: "Tuesday",
    value: "2024-12-02",
  },
  {
    label: "Wednesday",
    value: "2024-12-03",
  },
  {
    label: "Thursday",
    value: "2024-12-04",
  },
  {
    label: "Friday",
    value: "2024-12-05",
  },
  {
    label: "Saturday",
    value: "2024-12-06",
  },
  {
    label: "Sunday",
    value: "2024-12-07",
  },
];

export default function Header() {
  return (
    <div className="w-full max-w-[600px] overflow-x-scroll flex items-center">
      {headerOptions.map((option) => (
        <div
          key={option.value}
          className="bg-gray-400 flex-1 p-3 text-center text-xs cursor-pointer hover:bg-gray-500 flex-col items-center justify-center min-w-[120px] border-r border-gray-300 last:border-0"
        >
          <p>{option.label}</p>
          <p>{option.value}</p>
        </div>
      ))}
    </div>
  );
}
