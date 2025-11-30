import EventList from "./EventList";
import Header from "./Header/Header";
import TimeLists from "./TimeList";
import Vanues from "./Venues";

export default function Table() {
  return (
    <div className="bg-gray-200 max-w-[600px]">
      <div className="">
        <Header />
      </div>

      <div className="grid grid-cols-[100px_500px]">
        <div>
          <div className="h-[39px]"></div>
          <TimeLists />
        </div>

        <div className="bg-blue-300 relative w-full h-full overflow-scroll">
          <Vanues />

          <EventList />
        </div>
      </div>
    </div>
  );
}
