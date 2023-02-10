export default function PosterItem({ events }) {
  return (
    <div className="flex justify-evenly flex-wrap ">
      {/* each poster */}
      {events.map((el) => (
        <div className="bg-transparent max-w-sm">
          <a href={`/booking/${el.id}`}>
            <img
              className="h-80 drop-shadow-xl"
              src={el.picture}
              alt="poster"
            />
          </a>
          <div className="py-6 px-4">
            <h5 className="text-white-500 text-xl font-medium mb-2">
              {el.name}
            </h5>
            <p className="text-white-500 text-base mb-4">{el.dateTime}</p>
            <p className="text-white text-base mb-4">{el.Venue?.name}</p>
            <a href={`/booking/${el.id}`}>
              <button
                type="button"
                className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Buy now
              </button>
            </a>
          </div>
        </div>
      ))}

      {/* each poster */}

      {/* <div className="bg-transparent max-w-sm">
        <a href="#!">
          <img className="h-80 drop-shadow-xl" src={mockPoster} alt="poster" />
        </a>
        <div className="py-6 px-4">
          <h5 className="text-white-500 text-xl font-medium mb-2">
            Concert Nameeeeeeeeeeeeeee
          </h5>
          <p className="text-white-500 text-base mb-4">1-7 มีนาคม 2989</p>
          <p className="text-white text-base mb-4">อิมแพคอารีน่า บรรทัดทอง</p>
          <button
            type="button"
            className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Buy now
          </button>
        </div>
      </div>
      <div className="bg-transparent max-w-sm">
        <a href="#!">
          <img className="h-80 drop-shadow-xl" src={mockPoster} alt="poster" />
        </a>
        <div className="py-6 px-4">
          <h5 className="text-white-500 text-xl font-medium mb-2">
            Concert Nameeeeeeeeeeeeeee
          </h5>
          <p className="text-white-500 text-base mb-4">1-7 มีนาคม 2989</p>
          <p className="text-white text-base mb-4">อิมแพคอารีน่า บรรทัดทอง</p>
          <button
            type="button"
            className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Buy now
          </button>
        </div>
      </div>
      <div className="bg-transparent max-w-sm">
        <a href="#!">
          <img className="h-80 drop-shadow-xl" src={mockPoster} alt="poster" />
        </a>
        <div className="py-6 px-4">
          <h5 className="text-white-500 text-xl font-medium mb-2">
            Concert Nameeeeeeeeeeeeeee
          </h5>
          <p className="text-white-500 text-base mb-4">1-7 มีนาคม 2989</p>
          <p className="text-white text-base mb-4">อิมแพคอารีน่า บรรทัดทอง</p>
          <button
            type="button"
            className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Buy now
          </button>
        </div>
      </div> */}
    </div>
  );
}
