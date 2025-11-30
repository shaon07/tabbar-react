import { MIN_VENUE_WIDTH, VENUE_OPTIONS } from "../../../../constants";

export default function Vanues() {
  return (
    <div className="w-full flex items-center">
      {VENUE_OPTIONS.map((option) => (
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
