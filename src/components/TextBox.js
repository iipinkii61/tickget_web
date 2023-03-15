import { useState, useEffect } from "react";
import * as zoneApi from "../apis/zone-api";
import * as bookingApi from "../apis/booking-api";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function TextBox({ seatId }) {
  const [seatDetail, setSeatDetail] = useState([]);

  const { eventId } = useParams();
  const navigate = useNavigate();
  // console.log(seatDetail);

  useEffect(() => {
    const fetchZoneById = async () => {
      const res = await zoneApi.getZoneById(seatId);
      setSeatDetail(res.data.zone);
    };
    fetchZoneById();
  }, [seatId]);

  const handleSubmit = async () => {
    const res = await bookingApi.createBooking(eventId, seatId, {
      totalPrice: seatDetail.price,
    });

    toast.success("Success booking!!");
    navigate(`/sum/${res.data.booking?.id}`);
  };

  return (
    <div className="flex flex-col">
      <div className="p-8 px-10 bg-mygray border border-gray-200 rounded-lg shadow">
        {/* order detail */}
        <div className="my-2 flex items-center gap-20">
          <p className="ml-6 font-semibold text-lg text-gray-700 dark:text-gray-400">
            Zone
          </p>
          <p className="text-gray-700">{seatDetail.zoneName}</p>
        </div>
        <hr className="h-px my-4 bg-black/25 border-0" />
        <div className="my-2 flex items-center gap-20">
          <p className="ml-6 font-semibold text-lg text-gray-700 dark:text-gray-400">
            Seat no.
          </p>
          <p className="text-gray-700">{seatDetail.seatNumber}</p>
        </div>
        <hr className="h-px my-4 bg-black/25 border-0" />
        <div className="my-2 flex items-center gap-20">
          <p className="ml-6 font-semibold text-lg text-gray-700 dark:text-gray-400">
            Price
          </p>
          <p className="text-gray-700">{seatDetail.price}</p>
        </div>

        {/* end order detail */}
      </div>

      {/* button */}
      <div className="flex justify-center gap-6 my-8">
        <a href="/">
          <button
            type="button"
            className="inline-block w-28 px-6 py-2.5 bg-gray-400 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-500 hover:shadow-lg focus:bg-gray-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-grey-600 active:shadow-lg transition duration-150 ease-in-out"
          >
            Back
          </button>
        </a>

        <button
          type="submit"
          className="inline-block w-28 px-6 py-2.5 bg-lavender text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
          onClick={handleSubmit}
        >
          Continue
        </button>
      </div>
      {/* end button */}
    </div>
  );
}
