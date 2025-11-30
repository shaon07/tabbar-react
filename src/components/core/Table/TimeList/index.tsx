import { TIME_LIST_HEIGHT } from "../../../../constants";

const timesOptions = [
  "9:00",
  "9:15",
  "9:30",
  "9:45",
  "10:00",
  "10:15",
  "10:30",
  "10:45",
];

export default function TimeLists() {
  return (
    <div className="bg-yellow-300 max-h-[400px] overflow-y-scroll">
      {timesOptions.map((time) => (
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
