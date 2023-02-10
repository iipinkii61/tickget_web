import poster from "../assets/images/poster.jpeg";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as bookingApi from "../apis/booking-api";

export default function BookingList() {
  const [events, setEvents] = useState([]);
  const { userId } = useParams();

  useEffect(() => {
    const fetchEvent = async () => {
      const res = await bookingApi.getBookingById(userId);
      setEvents(res.data.events);
    };
    fetchEvent();
  }, []);
  return (
    <>
      <div className="flex items-center justify-evenly my-10 bg-transparent md:flex-row ">
        <img
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src={poster}
          alt=""
        />
        {/* text box */}
        <div className="flex flex-col p-2 leading-normal">
          <h5 className="my-6 text-2xl font-bold tracking-tight text-purpling ">
            Concert nameeeeeeeeeeeeeeeeeeee
          </h5>
          <p className="mb-3 font-normal text-white">order no.13947683493</p>
          <p className="mb-3 font-normal text-white">ราคา 300.-</p>
        </div>
        {/* end text box */}
        <button className="m-2 py-1 px-6 bg-purpling text-white rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
          details
        </button>
      </div>

      <hr className="m-auto w-3/4 border-neutral-500" />

      <div className="flex items-center justify-evenly my-10 bg-transparent md:flex-row ">
        <img
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src={poster}
          alt=""
        />
        {/* text box */}
        <div className="flex flex-col p-2 leading-normal">
          <h5 className="my-6 text-2xl font-bold tracking-tight text-purpling ">
            Concert nameeeeeeeeeeeeeeeeeeee
          </h5>
          <p className="mb-3 font-normal text-white">order no.13947683493</p>
          <p className="mb-3 font-normal text-white">ราคา 300.-</p>
        </div>
        {/* end text box */}
        <button className="m-2 py-1 px-6 bg-purpling text-white rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
          details
        </button>
      </div>
    </>
  );
}
