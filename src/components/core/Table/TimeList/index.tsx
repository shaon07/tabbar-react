import { TIME_LIST_HEIGHT } from "../../../../constants";

interface TimeListProps {
  options: string[];
}

export default function TimeLists({ options }: TimeListProps) {
  return (
    <div className="bg-yellow-300 max-h-[400px] overflow-y-scroll">
      {options.map((time) => (
        <div
          key={time}
          className="border-b border-gray-400 p-2 text-center text-xs cursor-pointer hover:bg-yellow-400 flex items-center justify-center"
          style={{ height: TIME_LIST_HEIGHT }}
        >
          {time}
        </div>
      ))}
    </div>
  );
}
