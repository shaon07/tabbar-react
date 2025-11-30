import {
  HEADER_OPTIONS,
  TIME_OPTIONS,
  VENUE_OPTIONS,
} from "../../../constants";
import EventList from "./EventList";
import Header from "./Header/Header";
import TimeLists from "./TimeList";
import Vanues from "./Venues";

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

export default function Table() {
  return (
    <div className="bg-gray-200 max-w-[600px]">
      <div className="">
        <Header
          options={HEADER_OPTIONS}
          onClick={(data) => {
            console.log(data);
          }}
        />
      </div>

      <div className="grid grid-cols-[100px_500px]">
        <div>
          <div className="h-[39px]"></div>
          <TimeLists options={TIME_OPTIONS} />
        </div>

        <div className="bg-blue-300 relative w-full h-full overflow-scroll">
          <Vanues options={VENUE_OPTIONS} />

          <EventList option={eventOptions} />
        </div>
      </div>
    </div>
  );
}
