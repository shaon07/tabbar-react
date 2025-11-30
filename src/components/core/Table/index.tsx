import { useState } from "react";
import {
  EVENT_OPTIONS,
  HEADER_OPTIONS,
  TIME_OPTIONS,
  VENUE_OPTIONS,
} from "../../../constants";
import type { Event } from "../../../types";
import EventList from "./EventList";
import Header from "./Header/Header";
import TimeLists from "./TimeList";
import Vanues from "./Venues";

export default function Table() {
  const selectedHeader = localStorage.getItem("selectedHeader") || "2024-12-01";
  const [eventOptions, setEventOptions] = useState<Event[]>(
    EVENT_OPTIONS[selectedHeader] || []
  );

  return (
    <div className="bg-gray-200 max-w-[600px]">
      <div>
        <Header
          active={selectedHeader}
          options={HEADER_OPTIONS}
          onClick={(data) => {
            setEventOptions(EVENT_OPTIONS[data.value]);
          }}
        />
      </div>

      <div className="grid grid-cols-[100px_1fr] h-full overflow-scroll max-h-[400px]">
        <div className="sticky left-0 z-20">
          <div className="h-[39px]"></div>
          <TimeLists options={TIME_OPTIONS} />
        </div>

        <div className="bg-blue-300 relative w-full ">
          <Vanues options={VENUE_OPTIONS} />

          <div className="flex">
            <EventList option={eventOptions} />
          </div>
        </div>
      </div>
    </div>
  );
}
