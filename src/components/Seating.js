import { useState } from "react";

export default function Seating() {
  const seatArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const rowArr = ["A", "B", "C", "D", "E", "F", "G"];
  const [seat, setSeat] = useState("");
  const [check, setCheck] = useState({
    A: [],
    B: [],
    C: [],
    D: [],
    E: [],
    F: [],
    G: [],
  });

  const handleSelectSeat = () => {
    // setCheck((prev) => {
    //   const clone = structuredClone(prev);
    //   // setSeat(r);
    //   // console.log(seat);
    //   console.log(r, s - 1);
    //   clone[r][s - 1] = !clone[r][s - 1];
    //   console.log(clone);
    //   return clone;
    // });
  };

  return (
    <div className="flex justify-center ">
      <div className="flex">
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

        {/* seating */}
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
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
        </div>
        {/* end seating */}
      </div>
    </div>
  );
}
