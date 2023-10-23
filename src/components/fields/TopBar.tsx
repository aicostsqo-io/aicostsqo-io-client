import { useSiteContext } from "@/contexts/Site";

const barItem =
  "py-4 text-center shadow-md text-sm sm:text-md md:text-lg flex-1 cursor-pointer";
const barItemInActive = `${barItem} bg-gray-100 hover:bg-gray-200 `;
const barItemActive = `${barItem} shadow-xl bg-white hover:bg-white `;

function TopBar({ page, setPage }: any) {
  const { setSelectedDiscs } = useSiteContext();
  return (
    <div className="mb-2 flex justify-between gap-2">
      <div
        className={`${page === 0 ? barItemActive : barItemInActive}`}
        onClick={() => {
          setPage(0);
          setSelectedDiscs([]);
        }}
      >
        Visualizations / Panel
      </div>
      <div
        className={`${page === 1 ? barItemActive : barItemInActive}`}
        onClick={() => setPage(1)}
      >
        Datas
      </div>
      <div
        className={`${page === 2 ? barItemActive : barItemInActive}`}
        onClick={() => setPage(2)}
      >
        Block Size Distribution Curves
      </div>
      <div
        className={`${page === 3 ? barItemActive : barItemInActive}`}
        onClick={() => setPage(3)}
      >
        Decision Support System
      </div>
    </div>
  );
}

export default TopBar;
