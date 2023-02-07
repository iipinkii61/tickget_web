import BannerColor from "../components/BannerColor";
import qr from "../assets/images/qr.png";

export default function OrderSummaryPage() {
  return (
    <div>
      <div className=" flex flex-col items-center justify-center bg-slate-500 h-80">
        <h1 className="mb-2 text-4xl font-semibold">Order summary</h1>
        <p className="mb-12 font-light">โปรดตรวจสอบความถูกต้องของข้อมูล</p>
      </div>
      <div className="flex justify-around gap-12 m-12 mt-[-90px]">
        {/* left box */}
        <div className="block w-2/3 p-8 px-10 bg-white border border-gray-200 rounded-lg shadow">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-purpling">
            Payment
          </h5>
          <div className="flex items-center justify-evenly gap-10">
            <img src={qr} className="w-24" alt="" />
            <p className="ml-[-30px] font-normal text-gray-700 dark:text-gray-400">
              บริษัท รวยไม่ จำกัด <br /> เลขที่ 000-1111111-222 <br />{" "}
              ธนาคารโค้ดแคมป์ สาขาบรรทัดทอง
            </p>
          </div>
          <hr className="h-px my-6 bg-gray-200 border-0 dark:bg-gray-700" />

          {/* order detail */}
          <h5 className="mb-4 text-2xl font-bold tracking-tight text-purpling">
            Order detail
          </h5>
          <div className="my-2 flex items-center gap-5">
            <p className="ml-12 font-semibold text-lg text-gray-700 dark:text-gray-400">
              Zone :
            </p>
            <p className="text-gray-700">;lsdkf;ldsf</p>
          </div>
          <div className="flex items-center gap-5">
            <p className="ml-12 font-semibold text-lg text-gray-700 dark:text-gray-400">
              Zone :
            </p>
            <p className="text-gray-700">;lsdkf;ldsf</p>
          </div>
          <hr className="h-px my-6 bg-gray-200 border-0 dark:bg-gray-700" />
          {/* end order detail */}
          <h5 className="mb-4 text-2xl font-bold tracking-tight text-purpling">
            Buyer detail
          </h5>
          <div className="my-2 flex items-center gap-5">
            <p className="ml-12 font-semibold text-lg text-gray-700 dark:text-gray-400">
              Zone :
            </p>
            <p className="text-gray-700">;lsdkf;ldsf</p>
          </div>
          <div className="flex items-center gap-5">
            <p className="ml-12 font-semibold text-lg text-gray-700 dark:text-gray-400">
              Zone :
            </p>
            <p className="text-gray-700">;lsdkf;ldsf</p>
          </div>
        </div>
        {/* end left box */}

        {/* right box */}
        <div className="block w-1/3 p-8 px-10 h-64 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <div className="flex justify-between text-gray-900 text-lg font-semibold">
            <p>Type</p>
            <p>Price</p>
          </div>
          <hr className="h-px my-3 bg-gray-200 border-0 dark:bg-gray-700" />
          <div className="flex justify-between text-gray-900 ">
            <div className="flex gap-3">
              <p>1 x</p>
              <p className="text-purpling">Zen</p>
            </div>
            <p>200.-</p>
          </div>
          <hr className="h-px my-3 bg-gray-200 border-0 dark:bg-gray-700" />
          <div className="flex justify-between text-gray-900 ">
            <p>Shipping fee</p>
            <p>0</p>
          </div>
          <div className="flex my-2 justify-between text-gray-900 ">
            <p>Discount</p>
            <p>0</p>
          </div>
          <div className="flex my-2 justify-between text-purpling font-semibold ">
            <p>Total price</p>
            <p>200.-</p>
          </div>
        </div>
        {/* end right box */}
      </div>

      {/* button */}
      <div className="flex justify-center gap-6">
        <button
          type="button"
          className="inline-block w-28 px-6 py-2.5 bg-danger text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
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
