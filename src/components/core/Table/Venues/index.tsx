import { MIN_VENUE_WIDTH } from "../../../../constants";

const valueOptions = [
  {
    label: "Venue 1",
    value: "venue-1",
  },
  {
    label: "Venue 2",
    value: "venue-2",
  },
  {
    label: "Venue 3",
    value: "venue-3",
  },
  {
    label: "Venue 4",
    value: "venue-4",
  },
  {
    label: "Venue 5",
    value: "venue-5",
  },
  {
    label: "Venue 6",
    value: "venue-6",
  },
  {
    label: "Venue 7",
    value: "venue-7",
  },
  {
    label: "Venue 8",
    value: "venue-8",
  },
  {
    label: "Venue 9",
    value: "venue-9",
  },
];

export default function Vanues() {
  return (
    <div className="w-full flex items-center">
      {valueOptions.map((option) => (
        <div
          key={option.value}
          className="bg-gray-300 p-3 text-center text-xs cursor-pointer hover:bg-gray-400 flex-col items-center justify-center border-x border-gray-400 last:border-0"
          style={{
            minWidth: MIN_VENUE_WIDTH,
          }}
        >
          <p>{option.label}</p>
        </div>
      ))}
    </div>
  );
}
