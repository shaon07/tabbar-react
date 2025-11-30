import { useCallback } from "react";
import { MIN_VENUE_WIDTH } from "../../../../constants";
import type { Menu } from "../../../../types";

interface HeaderProps {
  active: string;
  options: Menu[];
  onClick?: (value: Menu) => void;
}

export default function Header({
  active,
  options,
  onClick = () => {},
}: HeaderProps) {
  const handleClickItems = useCallback(
    (option: Menu) => {
      onClick(option);
      localStorage.setItem("selectedHeader", option.value);
    },
    [onClick]
  );

  return (
    <div className="w-full overflow-x-scroll flex items-center">
      {options.map((option) => (
        <div
          key={option.value}
          className={` flex-1 p-3 text-center text-xs cursor-pointer hover:bg-gray-400 flex-col items-center justify-center min-w-[120px] border-r border-gray-400 last:border-0 ${
            active === option.value ? "bg-gray-400" : "bg-gray-200"
          }`}
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
