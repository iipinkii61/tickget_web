import { useState } from "react";
import TextBox from "../components/TextBox";

export default function Seating({ zone }) {
  // const seatArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const rowArr = ["A", "B", "C", "D", "E", "F", "G"];

  console.log(zone);
  const initialZone = zone.reduce((acc, cur) => {
    acc[cur.id] = false;
    return acc;
  }, {});
  console.log(initialZone);

  const [seatId, setSeatId] = useState([]);
  const [check, setCheck] = useState(initialZone);

  // const [check, setCheck] = useState({
  //   A: [],
  //   B: [],
  //   C: [],
  //   D: [],
  //   E: [],
  //   F: [],
  //   G: [],
  // });

  // const handleSelectSeat = (e) => {
  //   if (!seat.includes(e.target.value)) {
  //     setSeat([...seat, e.target.value]);
  //   } else {
  //     console.log("Noooooo");
  //   }
  //    <i className="fa-solid fa-check"></i>
  // };

  return (
    <>
      <div className="">
        <div className="flex justify-center">
          {/* row label */}
          <div className="py-20">
            <table className="min-w-full text-center">
              <tbody>
                {rowArr.map((el) => (
                  <tr>
                    <td className="text-sm px-4 py-2 whitespace-nowrap border-r">
                      {el}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* end row label */}

          {/* seat selection map */}
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-20 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-x-auto">
                <table className="min-w-full border text-center">
                  <tbody>
                    <tr className="bg-orange-300 border-b">
                      {zone.map((s) => (
                        <td className="text-sm text-gray-900 px-4 py-2 whitespace-nowrap border-r">
                          {!s.bookingId ? (
                            <button
                              value={s.id}
                              onClick={(e) => {
                                setSeatId(e.target.value);
                                check[e.target.value] = true;
                              }}
                            >
                              {s.seatNumber}
                            </button>
                          ) : (
                            <i className="fa-solid fa-xmark text-lg text-red-700 bg-white px-1"></i>
                          )}
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* end seat selection map */}

          {/* seating */}
          {/* <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-20 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-x-auto">
                <table className="min-w-full border text-center">
                  <tbody>
                    {rowArr.map((r) => (
                      <tr className="bg-orange-300 border-b">
                        {seatArr.map((s) => (
                          <td
                            className="text-sm text-gray-900 px-4 py-2 whitespace-nowrap border-r"
                            onClick={() =>
                              setCheck((prev) => {
                                const clone = structuredClone(prev);
                                // setSeat(r);
                                // console.log(seat);
                                console.log(r, s - 1);
                                clone[r][s - 1] = !clone[r][s - 1];
                                console.log(clone);
                                handleSelectSeat();
                                return clone;
                              })
                            }
                          >
                            {check[r]?.[s - 1] ? (
                              <i className="fa-solid fa-check"></i>
                            ) : (
                              <p>{s}</p>
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div> */}
          {/* end seating */}
        </div>

        <div>
          <h1 className="text-center font-semibold text-bluer text-2xl my-6">
            Ticket Information
          </h1>
          <div className="flex justify-center">
            <TextBox seatId={seatId} />
          </div>
        </div>
      </div>
    </>
  );
}
