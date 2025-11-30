import Header from "./Header/Header";

export default function Table() {
  return (
    <div className="bg-gray-200">
      <div className="">
        <Header />
      </div>
      <div className="bg-amber-400">venue list</div>

      <div className="flex">
        <div>time zone</div>
        <div>event list</div>
      </div>
    </div>
  );
}
