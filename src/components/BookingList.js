import { useState, useEffect } from "react";
import * as bookingApi from "../apis/booking-api";
import ImageModal from "./ImageModal";
import useAuth from "../hooks/useAuth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function BookingList() {
  const [booking, setBooking] = useState([]);
  const [bookingId, setBookingId] = useState(null);
  const { authenticatedUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEvent = async () => {
      const res = await bookingApi.getBookingById(authenticatedUser.id);
      setBooking(res.data.booking);
    };
    fetchEvent();
  }, [authenticatedUser.id]);

  const handleDelete = async (bookingId) => {
    if (window.confirm("Are you sure to delete this booking?")) {
      await bookingApi.deleteBooking(bookingId);
      setBooking(booking.filter((el) => el.id !== +bookingId));
      toast.success("Success delete!");
      navigate("/lists");
    } else {
      console.log("user has cancelled delete");
    }
  };

  return (
    <>
      {booking.map((el) => (
        <>
          <div className="flex items-center justify-evenly my-10 bg-transparent md:flex-row ">
            <img
              className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
              src={el.Event.picture}
              alt=""
            />
            {/* text box */}
            <div className="flex flex-col p-2 leading-normal">
              <h5 className="my-6 text-2xl font-bold tracking-tight text-purpling ">
                {el.Event.name}
              </h5>
              <p className="mb-3 font-normal text-white">order no. {el.id}</p>
              <p className="mb-3 font-normal text-white">
                ราคา {el.totalPrice}.-
              </p>
            </div>
            {/* end text box */}

            {/* ถ้ายังไม่อัพสลิป ปุ่มจะเป็นสีเหลือง 
          - ถ้าอัพแล้วปุ่มจะเป็นสีเทา + modal ไม่ขึ้น
          - ถ้าอัพแล้ว + ตรวจสอบสลิปแล้ว ปุ่มจะเป็นสีฟ้าให้ดูหน้า  */}
            {/* button handling */}
            {el.Payment.status == "PENDING" && el.Payment.picture == null ? (
              <div className="flex-col">
                <button
                  className="m-2 py-1 px-6 bg-yellow-200 text-black rounded-lg shadow-md hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                  data-bs-toggle="modal"
                  data-bs-target="#upPicModal"
                  value={el.id}
                  onClick={(e) => setBookingId(e.target.value)}
                >
                  payment confirmation
                </button>
                <button
                  type="button"
                  className="inline-block w-28 px-6 py-2.5 bg-danger text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                  onClick={() => handleDelete(el.id)}
                >
                  Delete
                </button>
              </div>
            ) : el.Payment.status == "SUCCESS" ? (
              <a href={`/sum/${el.id}`}>
                <button className="m-2 py-1 px-6 bg-bluer rounded-lg shadow-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75">
                  details
                </button>
              </a>
            ) : (
              <button className="m-2 py-1 px-6 bg-stone-400 rounded-lg shadow-md">
                pending
              </button>
            )}
            {/* end button handling */}
          </div>
          <hr className="m-auto w-3/4 border-neutral-500" />
        </>
      ))}

      <ImageModal bookingId={bookingId} />
    </>
  );
}
