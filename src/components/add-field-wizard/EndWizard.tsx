import {
  IoSaveOutline as SaveIcon,
  IoTrashOutline as TrashIcon,
} from "react-icons/io5";

const EndWizard = ({ end, save, info, setInfo }: any) => {
  const { site } = info;
  return (
    <div className="flex flex-col gap-10 p-10  text-xl items-center">
      <div className="flex flex-col gap-5">
        <div className="flex gap-2">
          <input
            type="checkbox"
            checked={site.generateDiscontinuityPlanes}
            onChange={() =>
              setInfo({
                ...info,
                site: {
                  ...site,
                  generateDiscontinuityPlanes:
                    !site.generateDiscontinuityPlanes,
                },
              })
            }
          />
          <label htmlFor="">Generate Discontinuity Planes</label>
        </div>
        <div className="flex gap-2">
          <input
            type="checkbox"
            checked={site.calculatePolyhedrons}
            onChange={() =>
              setInfo({
                ...info,
                site: {
                  ...site,
                  calculatePolyhedrons: !site.calculatePolyhedrons,
                },
              })
            }
          />
          <label htmlFor="">Calculate Polyhedrons</label>
        </div>
        <div className="flex gap-2">
          <input
            type="checkbox"
            checked={site.calculateMaximumCuboids}
            onChange={() =>
              setInfo({
                ...info,
                site: {
                  ...site,
                  calculateMaximumCuboids: !site.calculateMaximumCuboids,
                },
              })
            }
          />
          <label htmlFor="">Calculate Maximum Cuboids</label>
        </div>
        <div className="flex gap-2">
          <input
            type="checkbox"
            checked={site.generateVirtual1DExtendedRPs}
            onChange={() =>
              setInfo({
                ...info,
                site: {
                  ...site,
                  generateVirtual1DExtendedRPs:
                    !site.generateVirtual1DExtendedRPs,
                },
              })
            }
          />
          <label htmlFor="">Generate Virtual 1D Extended RPs</label>
        </div>
      </div>

      <div className="flex gap-14">
        <div
          className="flex flex-col gap-3 items-center cursor-pointer"
          onClick={() => save()}
        >
          <SaveIcon className="text-4xl" />
          <span className="text-lg">Save</span>
        </div>
        <div className="flex flex-col gap-3 items-center cursor-pointer">
          <TrashIcon className="text-4xl" />
          <span className="text-lg">Cancel</span>
        </div>
      </div>
    </div>
  );
};

export default EndWizard;
