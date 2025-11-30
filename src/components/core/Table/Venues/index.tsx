import { MIN_VENUE_WIDTH } from "../../../../constants";
import type { Menu } from "../../../../types";

interface VenuesProps {
  options: Menu[];
}

export default function Vanues({ options }: VenuesProps) {
  return (
    <div className="w-full flex items-center sticky top-0 z-30">
      {options.map((option) => (
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
