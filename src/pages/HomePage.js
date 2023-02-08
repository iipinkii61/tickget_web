import MyCarousel from "../components/MyCarousel";
import PosterItem from "../components/PosterItem";

export default function HomePage() {
  return (
    <>
      <MyCarousel />
      <br />
      <h1 className="font-semibold text-2xl mx-16 mt-6">Upcoming Events</h1>
      <div className="flex-initial justify-center my-8">
        <PosterItem />
        <div className="flex justify-center">
          <button
            type="button"
            className="px-6 py-2.5 w-32 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            See all
          </button>
        </div>
      </div>
    </>
  );
}
