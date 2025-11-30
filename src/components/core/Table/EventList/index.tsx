import {
  MIN_VENUE_WIDTH,
  TIME_LIST_HEIGHT,
  TIME_OPTIONS,
  VENUE_OPTIONS,
} from "../../../../constants";
import type { Event } from "../../../../types";

interface EventListProps {
  option: Event[];
}

export default function EventList({ option }: EventListProps) {
  return (
    <div
      className="relative inset-0 w-full"
      style={{
        height: TIME_LIST_HEIGHT * TIME_OPTIONS.length,
      }}
    >
      {option.map((event, index) => {
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
            className="bg-green-200 border border-gray-400 cursor-pointer hover:bg-green-300 absolute flex flex-col items-center justify-center p-1 text-xs"
            style={{
              width: eventWidth,
              height: eventHeight,
              top: topPosition,
              left: leftPosition,
            }}
          >
            <span>{event.name}</span>
            <span>
              {event.startTime} - {event.endTime}
            </span>
          </div>
        );
      })}
    </div>
  );
}
