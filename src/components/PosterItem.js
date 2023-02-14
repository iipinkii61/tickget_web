export default function PosterItem({ events }) {
  return (
    <div className="flex justify-evenly flex-wrap ">
      {/* each poster */}
      {events.map((el) => (
        <div className="flex flex-col bg-transparent max-w-sm">
          <div className="flex justify-center w-72">
            {el.status == "SELL" ? (
              <a href={`/booking/${el.id}/${el.venueId}`}>
                <img
                  className="h-80 drop-shadow-xl"
                  src={el.picture}
                  alt="poster"
                />
              </a>
            ) : (
              <img
                className="h-80 drop-shadow-xl"
                src={el.picture}
                alt="poster"
              />
            )}
          </div>
          <div className="py-6 px-4 w-72">
            <h5 className="text-white-500 text-xl font-medium mb-2">
              {el.name}
            </h5>
            <p className="text-white-500 text-base mb-4">{el.dateTime}</p>
            <p className="text-white text-base mb-4">{el.Venue?.name}</p>

            <div className="flex justify-center">
              {/* button handling */}
              {el.status == "SELL" ? (
                <a href={`/booking/${el.id}/${el.venueId}`}>
                  <button
                    type="button"
                    className="w-40 px-6 py-2.5 bg-lavender text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-violet-400 hover:shadow-lg focus:bg-violet-400 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-violet-400 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Buy now
                  </button>
                </a>
              ) : el.status == "SOLD_OUT" ? (
                <button
                  type="button"
                  className="w-2/3 px-6 py-2.5 bg-danger text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md "
                >
                  Sold out
                </button>
              ) : (
                <button
                  type="button"
                  className="w-2/3 px-6 py-2.5 bg-stone-400 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md"
                >
                  Coming soon
                </button>
              )}
              {/* end button handling */}
            </div>
          </div>
        </div>
      ))}
      {/* end each poster */}
    </div>
  );
}
