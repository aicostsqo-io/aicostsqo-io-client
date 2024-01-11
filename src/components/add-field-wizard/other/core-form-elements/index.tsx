const inputContainerClasses = "flex justify-between items-center";
const inputClasses = "border border-black w-1/2 py-1 px-2 outline-none";
const labelClasses = "w-1/2 me-2";

export const FormNumberField = ({ label, value, min, onChange }: any) => {
  return (
    <div className={inputContainerClasses}>
      <label className={labelClasses}>{label}</label>
      <input
        className={inputClasses}
        type="number"
        min={min}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export const FormSelectField = ({ label, value, onChange, data }: any) => {
  return (
    <div className={inputContainerClasses}>
      <label className={labelClasses}>{label}</label>
      <select className={inputClasses} value={value} onChange={onChange}>
        <option value={""}>Select {label}</option>
        {data.map((e: any, index: number) => (
          <option key={index} value={e.name}>
            {e.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export const FormTextField = ({ label, value, onChange }: any) => {
  return (
    <div className={inputContainerClasses}>
      <label className={labelClasses}>{label}</label>
      <input
        className={inputClasses}
        type="text"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export const FormImageField = ({ label, onChange }: any) => {
  return (
    <div className={inputContainerClasses}>
      <label className={labelClasses}>{label}</label>
      <input
        className={inputClasses}
        type="file"
        accept="image/*"
        onChange={onChange}
      />
    </div>
  );
};
