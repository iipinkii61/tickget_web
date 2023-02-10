import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as eventApi from "../apis/event-api";

export default function BookingBanner() {
  const [events, setEvents] = useState([]);
  const { eventId } = useParams();

  useEffect(() => {
    const fetchEvent = async () => {
      const res = await eventApi.getEventById(eventId);
      setEvents(res.data.events);
    };
    fetchEvent();
  }, []);
  // console.log(events);
  return (
    <div className="flex items-center bg-slate-500 h-80">
      <img
        className="mx-24 h-64 drop-shadow-xl"
        src={events.picture}
        alt="poster"
      />
      <div className="">
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
