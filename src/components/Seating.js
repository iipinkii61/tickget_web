export default function Seating() {
  const seatArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const rowArr = ["A", "B", "C", "D", "E", "F", "G"];
  return (
    <div className="flex justify-center ">
      <div class="flex">
        {/* row label */}
        <div className="py-20">
          <table class="min-w-full text-center">
            {rowArr.map((el) => (
              <tr>
                <td class="text-sm px-4 py-2 whitespace-nowrap border-r">
                  {el}
                </td>
              </tr>
            ))}
          </table>
        </div>
        {/* end row label */}

        {/* seating */}
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-20 inline-block min-w-full sm:px-6 lg:px-8">
            <div class="overflow-x-auto">
              <table class="min-w-full border text-center">
                <tbody>
                  {rowArr.map((el) => (
                    <tr class="bg-orange-300 border-b">
                      {seatArr.map((el) => (
                        <td class="text-sm text-gray-900 px-4 py-2 whitespace-nowrap border-r">
                          {el}
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
