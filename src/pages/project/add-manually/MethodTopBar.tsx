const barItem =
  "py-4 text-center shadow-md text-sm sm:text-md md:text-lg flex-1 cursor-pointer";
const barItemInActive = `${barItem} bg-gray-100 hover:bg-gray-200 `;
const barItemActive = `${barItem} shadow-xl bg-white hover:bg-white `;

function MethodTopBar({ method, setMethod }: any) {
  return (
    <div className="flex flex-col modal-container py-6 px-6">
      <h1 className="modal-container-title">Adding Method</h1>

      <div className="">
        <div className="flex justify-between gap-2">
          <div
            className={`${
              method === "manual" ? barItemActive : barItemInActive
            }`}
            onClick={() => setMethod("manual")}
          >
            Manual
          </div>
          <div
            className={`${
              method === "excel" ? barItemActive : barItemInActive
            }`}
            onClick={() => setMethod("excel")}
          >
            Excel
          </div>
        </div>
      </div>
    </div>
  );
}

export default MethodTopBar;
