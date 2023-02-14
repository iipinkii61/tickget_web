import { useState } from "react";
import * as paymentApi from "../apis/payment-api";

export default function ImageModal({ bookingId }) {
  const [file, setFile] = useState(null);

  const handleClickSave = async () => {
    // e.preventDefault();
    const formData = new FormData();
    formData.append("picture", file);
    await paymentApi.updatePayment(bookingId, formData);
    setFile(null);
  };

  return (
    <div
      className="modal p-6 fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
      id="upPicModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog relative w-auto pointer-events-none">
        <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
          <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
            <h5
              className="text-xl font-medium leading-normal text-gray-800"
              id="exampleModalLabel"
            >
              แบบฟอร์มแจ้งโอนเงิน
            </h5>
            <button
              type="button"
              className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body relative p-4">
            {/* begin form */}
            <div className="flex justify-center">
              <div className="mb-3 w-96 flex-col justify-center">
                <label
                  htmlFor="formFile"
                  className="form-label inline-block mb-2 text-gray-700"
                >
                  หลักฐานการชำระเงิน
                </label>
                <form onSubmit={handleClickSave}>
                  <input
                    className="form-control
    block
    w-full
    px-3
    py-1.5
    text-base
    font-normal
    text-gray-700
    bg-white bg-clip-padding
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    type="file"
                    id="formFile"
                    onChange={(e) => {
                      if (e.target.files[0]) {
                        setFile(e.target.files[0]); // check ว่ามีไฟล์จริงๆ ไม่ใช่ undefine (จากการที่ user cancel หน้าเลือกไฟล์)
                        console.log(e.target.files[0]);
                      }
                    }}
                  />
                  <div className="flex justify-center mt-8">
                    <button
                      type="submit"
                      className="
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
            {/* end form */}
          </div>
        </div>
      </div>
    </div>
  );
}
