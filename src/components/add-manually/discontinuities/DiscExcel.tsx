const DiscExcel = () => {
  return (
    <div className="my-4">
      <label className="block text-sm font-medium text-gray-700">
        Excel Dosyası Yükle
      </label>
      <div className="mt-1 flex items-center">
        <input
          type="file"
          className="p-2 border rounded-md"
          //   onChange={handleFileChange}
        />
        <button
          type="button"
          className="ml-2 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          //   onClick={handleUploadClick}
        >
          Yükle
        </button>
      </div>
    </div>
  );
};

export default DiscExcel;
