import { MIN_VENUE_WIDTH } from "../../../../constants";
import type { Menu } from "../../../../types";

interface HeaderProps {
  options: Menu[];
  onClick?: (value: Menu) => void;
}

export default function Header({ options, onClick = () => {} }: HeaderProps) {
  const handleClickItems = (option: Menu) => {
    onClick(option);
  };
  return (
    <div className="w-full overflow-x-scroll flex items-center">
      {options.map((option) => (
        <div
          key={option.value}
          className="bg-gray-200 flex-1 p-3 text-center text-xs cursor-pointer hover:bg-gray-300 flex-col items-center justify-center min-w-[120px] border-r border-gray-400 last:border-0"
          style={{
            width: MIN_VENUE_WIDTH,
          }}
          onClick={() => handleClickItems(option)}
        >
          <p>{option.label}</p>
          <p>{option.value}</p>
        </div>
      ))}
    </div>
  );
}
