import { MIN_VENUE_WIDTH, TIME_LIST_HEIGHT } from "../../../../constants";

export default function EventList() {
  return (
    <div
      className="relative inset-0 w-full"
      style={{
        height: TIME_LIST_HEIGHT * 8,
      }}
    >
      <div
        className="bg-green-200 border border-gray-400 flex items-center justify-center cursor-pointer hover:bg-green-300 absolute"
        style={{
          width: MIN_VENUE_WIDTH * 1,
          height: TIME_LIST_HEIGHT * 3,
          top: TIME_LIST_HEIGHT * 0,
          left: MIN_VENUE_WIDTH * 0,
        }}
      >
        9:00 - 9:30
      </div>

      <div
        className="bg-green-200 border border-gray-400 flex items-center justify-center cursor-pointer hover:bg-green-300 absolute"
        style={{
          width: MIN_VENUE_WIDTH * 2,
          height: TIME_LIST_HEIGHT * 3,
          top: TIME_LIST_HEIGHT * 4,
          left: MIN_VENUE_WIDTH * 0,
        }}
      >
        9:00 - 9:30
      </div>

      <div
        className="bg-green-200 border border-gray-400 flex items-center justify-center cursor-pointer hover:bg-green-300 absolute"
        style={{
          width: MIN_VENUE_WIDTH * 1,
          height: TIME_LIST_HEIGHT * 5,
          top: TIME_LIST_HEIGHT * 3,
          left: MIN_VENUE_WIDTH * 2,
        }}
      >
        9:00 - 9:30
      </div>
    </div>
  );
}
