import mockPoster from "../assets/images/poster.jpeg";
import pung from "../assets/images/pung.png";
import TextBox from "../components/TextBox";
import Seating from "../components/Seating";

export default function BookingPage() {
  return (
    <div>
      {/* banner */}
      <div className="flex items-center bg-slate-500 h-80">
        <img
          className="mx-24 h-64 drop-shadow-xl"
          src={mockPoster}
          alt="poster"
        />
        {/* header details */}
        <div className="">
          <i className="fa-regular fa-calendar-days" />
          <h1 className="text-2xl font-bold">Concert Nameeeeeeeeeeeeeee</h1>
          <br />
          <div className="flex">
            <p className="mx-10">
              วันที่แสดง <br /> หวกดาสหกด
            </p>
            <p className="mx-10">
              วันที่แสดง <br /> หวกดาสหกด
            </p>
            <p className="mx-10">
              วันที่แสดง <br /> หวกดาสหกด
            </p>
            <p className="mx-10">
              วันที่แสดง <br /> หวกดาสหกด
            </p>
          </div>
        </div>
        {/* end header details */}
      </div>
      {/* end banner */}

      {/* select date(optional) */}
      <div className="flex justify-center">
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
            <option selected>กรุณาเลือกวันและเวลาที่ต้องการ </option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>
      {/* end select date */}

      {/* seating */}
      <div className="flex justify-center">
        <img src={pung} usemap="#image-map" />
        {/* image width 500px */}
        <map name="image-map">
          <area
            alt="se"
            title="se"
            href="#seating"
            coords="150,302,114,243"
            shape="rect"
          />
          <area
            alt="p"
            title="p"
            href="#seating"
            coords="401,291,484,314,467,358,416,333"
            shape="poly"
          />
        </map>
      </div>
      <div id="seating">
        <Seating />
      </div>
      <div>
        {/* end seating */}

        <h1 className="text-center font-semibold text-bluer text-2xl my-6">
          Ticket Information
        </h1>
        <div className="flex justify-center">
          <TextBox />
        </div>
      </div>
      {/* button */}
      <div className="flex justify-center gap-6 my-8">
        <button
          type="button"
          className="inline-block w-28 px-6 py-2.5 bg-gray-400 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          Back
        </button>
        <button
          type="button"
          className="inline-block w-28 px-6 py-2.5 bg-lavender text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          Confirm
        </button>
      </div>
      {/* end button */}
    </div>
  );
}
