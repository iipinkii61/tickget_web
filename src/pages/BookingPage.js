import BookingBanner from "../components/BookingBanner";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as eventApi from "../apis/event-api";
import SeatSelector from "../components/SeatSelector";

export default function BookingPage() {
  const [events, setEvents] = useState([]);
  const { eventId } = useParams();

  useEffect(() => {
    const fetchEvent = async () => {
      const res = await eventApi.getEventById(eventId);
      setEvents(res.data.events);
    };
    fetchEvent();
  }, [eventId]);

  return (
    <div>
      <BookingBanner events={events} />

      {/* select date(optional) */}
      {/* <div className="flex justify-center">
        <div className="my-3 xl:w-96">
          <select
            className="form-select form-select-sm
    appearance-none
    block
    w-full
    px-4
    py-1
    text-sm
    font-normal
    text-gray-700
    bg-white  bg-clip-padding bg-no-repeat
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            aria-label=".form-select-sm example"
          >
            <option defaultValue={}>กรุณาเลือกวันและเวลาที่ต้องการ </option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div> */}
      {/* end select date */}

      <SeatSelector />
    </div>
  );
}
