const barItem =
  "py-4 text-center shadow-md text-sm sm:text-md md:text-lg flex-1 cursor-pointer";
const barItemInActive = `${barItem} bg-gray-100 hover:bg-gray-200 `;
const barItemActive = `${barItem} shadow-xl bg-white hover:bg-white `;

function TopBar({
  page,
  setPage,
  method,
  setMethod,
  gprStep,
  setGprStep,
}: any) {
  return (
    <div className="flex flex-col modal-container py-6 px-6">
      <h1 className="modal-container-title">Add Data</h1>
      <div className="mb-2 flex justify-between gap-2">
        <div
          className={`${page === 0 ? barItemActive : barItemInActive}`}
          onClick={() => setPage(0)}
        >
          Site
        </div>
        <div
          className={`${page === 1 ? barItemActive : barItemInActive}`}
          onClick={() => setPage(1)}
        >
          RP
        </div>
        <div
          className={`${page === 2 ? barItemActive : barItemInActive}`}
          onClick={() => setPage(2)}
        >
          Discontinuities
        </div>
        <div
          className={`${page === 3 ? barItemActive : barItemInActive}`}
          onClick={() => setPage(3)}
        >
          Measurement Techniques
        </div>
      </div>
      {page === 3 ? (
        <div className="mb-2">
          <div className="flex justify-between gap-2">
            <div
              className={`${
                gprStep === "info" ? barItemActive : barItemInActive
              }`}
              onClick={() => setGprStep("info")}
            >
              Info
            </div>
            <div
              className={`${
                gprStep === "profile" ? barItemActive : barItemInActive
              }`}
              onClick={() => setGprStep("profile")}
            >
              Profile
            </div>
            <div
              className={`${
                gprStep === "crack" ? barItemActive : barItemInActive
              }`}
              onClick={() => setGprStep("crack")}
            >
              Crack
            </div>
          </div>
        </div>
      ) : null}

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

export default TopBar;
