export default function BookingBanner({ events }) {
  return (
    <div className="flex items-center bg-white/20 h-80">
      <img
        className="absolute object-cover w-full h-80 blur-2xl"
        src={events.picture}
      />

      <img
        className="mx-24 h-64 drop-shadow-xl"
        src={events.picture}
        alt="poster"
      />
      <div className="z-10">
        <h1 className="text-2xl font-bold">{events.name}</h1>
        <br />
        <div className="flex">
          <i className="fa-regular fa-calendar-days" />
          <p className="mx-4">
            วันที่แสดง <br /> {events.dateTime}
          </p>
          {/* <p className="mx-10">
            วันที่แสดง <br /> หวกดาสหกด
          </p>
          <p className="mx-10">
            วันที่แสดง <br /> หวกดาสหกด
          </p>
          <p className="mx-10">
            วันที่แสดง <br /> หวกดาสหกด
          </p> */}
        </div>
      </div>
    </div>
  );
}
