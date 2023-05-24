import React from "react";

const RPInfo = () => {
  return (
    <div className="w-1/4 h-min">
      <div className="text-center text-blue-500 text-2xl mb-3">
        Properties for RP 001
      </div>
      <table className="w-full text-center border border-blue-400 table-fixed">
        <thead className="bg-blue-400 text-white">
          <tr>
            <th className="py-2">Name</th>
            <th className="py-2">Data</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white text-black border border-blue-400">
            <td className="py-2">RP Name</td>
            <td className="py-2">RP 001</td>
          </tr>
          <tr className="bg-blue-100 text-black border border-blue-400">
            <td className="py-2">RP Id</td>
            <td className="py-2">1</td>
          </tr>
          <tr className="bg-white text-black border border-blue-400">
            <td className="py-2">Depth X</td>
            <td className="py-2">30</td>
          </tr>
          <tr className="bg-blue-100 text-black border border-blue-400">
            <td className="py-2">Width Y</td>
            <td className="py-2">33</td>
          </tr>
          <tr className="bg-white text-black border border-blue-400">
            <td className="py-2">Height Z</td>
            <td className="py-2">12</td>
          </tr>
          <tr className="bg-blue-100 text-black border border-blue-400">
            <td className="py-2">Position X</td>
            <td className="py-2">0</td>
          </tr>
          <tr className="bg-white text-black border border-blue-400">
            <td className="py-2">Position Y</td>
            <td className="py-2">0</td>
          </tr>
          <tr className="bg-blue-100 text-black border border-blue-400">
            <td className="py-2">Position Z</td>
            <td className="py-2">0</td>
          </tr>
          <tr className="bg-white text-black border border-blue-400">
            <td className="py-2">Rotation X</td>
            <td className="py-2">0</td>
          </tr>
          <tr className="bg-blue-100 text-black border border-blue-400">
            <td className="py-2">Rotation Y</td>
            <td className="py-2">0</td>
          </tr>
          <tr className="bg-white text-black border border-blue-400">
            <td className="py-2">Rotation Z</td>
            <td className="py-2">274</td>
          </tr>
          <tr className="bg-blue-100 text-black border border-blue-400">
            <td className="py-2">Slope Angle</td>
            <td className="py-2">85</td>
          </tr>
          <tr className="bg-white text-black border border-blue-400">
            <td className="py-2">Crepe Angle</td>
            <td className="py-2">0</td>
          </tr>
          <tr className="bg-blue-100 text-black border border-blue-400">
            <td className="py-2">Volume</td>
            <td className="py-2">0</td>
          </tr>
        </tbody>
      </table>
      <div className="w-full justify-between flex mt-4">
        <div className="border border-black rounded-l-md flex-1 text-center py-2 px-3 hover:bg-blue-400 hover:text-white hover:border-blue-500 transition-all cursor-pointer">
          Apply
        </div>
        <div className="border border-black flex-1 text-center py-2 px-3 hover:bg-blue-400 hover:text-white hover:border-blue-500 transition-all cursor-pointer">
          Redo
        </div>
        <div className="border border-black flex-1 text-center py-2 px-3 hover:bg-blue-400 hover:text-white hover:border-blue-500 transition-all cursor-pointer">
          Undo
        </div>
        <div className="border border-black rounded-r-md flex-1 text-center py-2 px-3 hover:bg-blue-400 hover:text-white hover:border-blue-500 transition-all cursor-pointer">
          Save
        </div>
      </div>
    </div>
  );
};

export default RPInfo;
