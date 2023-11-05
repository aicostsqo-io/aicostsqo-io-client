import React from "react";

const Options = ({ options, setOtherType, otherType }: any) => {
  return (
    <div className="flex flex-col gap-5 mt-10 text-lg">
      {options?.map((option: string, index: number) => (
        <div key={index} className="flex gap-3">
          <input
            type="radio"
            value={option}
            checked={otherType === index}
            name="type"
            id={option}
            onChange={(e) =>
              setOtherType(parseInt(options.indexOf(e.target.value)))
            }
          />
          <label htmlFor={option}>{option}</label>
        </div>
      ))}
    </div>
  );
};

export default Options;
