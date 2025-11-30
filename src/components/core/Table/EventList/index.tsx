import {
  MIN_VENUE_WIDTH,
  TIME_LIST_HEIGHT,
  TIME_OPTIONS,
  VENUE_OPTIONS,
} from "../../../../constants";

const eventOptions = [
  {
    name: "Event 1",
    startTime: "9:00",
    endTime: "9:30",
    venue: ["venue-1"],
  },
  {
    name: "Event 2",
    startTime: "10:00",
    endTime: "10:30",
    venue: ["venue-1", "venue-2"],
  },
  {
    name: "Event 3",
    startTime: "9:45",
    endTime: "10:45",
    venue: ["venue-3"],
  },
];

export default function EventList() {
  return (
    <div
      className="relative inset-0 w-full"
      style={{
        height: TIME_LIST_HEIGHT * TIME_OPTIONS.length,
      }}
    >
      {eventOptions.map((event, index) => {
        const startIndex = TIME_OPTIONS.indexOf(event.startTime);
        const endIndex = TIME_OPTIONS.indexOf(event.endTime) + 1;
        const topPosition = startIndex * TIME_LIST_HEIGHT;
        const eventHeight = (endIndex - startIndex) * TIME_LIST_HEIGHT;
        const leftPosition =
          VENUE_OPTIONS.findIndex((venue) => venue.value === event.venue[0]) *
          MIN_VENUE_WIDTH;
        const eventWidth = event.venue.length * MIN_VENUE_WIDTH;

        return (
          <div
            key={index}
            className="bg-green-200 border border-gray-400 flex items-center justify-center cursor-pointer hover:bg-green-300 absolute"
            style={{
              width: eventWidth,
              height: eventHeight,
              top: topPosition,
              left: leftPosition,
            }}
          >
            {event.name}
          </div>
        );
      })}
    </div>
  );
}
