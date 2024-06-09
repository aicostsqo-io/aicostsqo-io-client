import Excel from "./Excel";
import NotYetImplemented from "@/components/common/NotYetImplemented";

const Add = ({ method }: any) => {
  return (
    <div className="modal-container h-min p-10 gap-3 flex flex-col justify-between">
      <div className="modal-container-title">
        Drilling - Add {method === "manual" ? "Manually" : "from Excel"}
      </div>

      {method === "manual" ? (
        // <ScanlineForm rp={rp} setRp={setRp} handleAddRp={handleAddRp} />
        <NotYetImplemented fontSize={"text-xl"} />
      ) : (
        <Excel />
      )}
    </div>
  );
};

export default Add;
