export default function Header() {
  return (
    <div className="bg-black">
      <nav className="p-1 flex justify-end space-x-11 bg-black ">
        {/* <img src="../assets/Tick&Get.png" /> */}
        <button className="m-2 py-1 px-6 bg-pule text-white rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
          Login
        </button>
      </nav>
    </div>
  );
}
