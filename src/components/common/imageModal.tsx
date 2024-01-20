import React from "react";
import { AiOutlineClose } from "react-icons/ai";

interface ImageModalProps {
  imageCategory: string;
  imagePath: string;
  onClose: () => void;
}

const UPLOADS_ENDPOINT = process.env.NEXT_PUBLIC_UPLOADS_ENDPOINT;
const ImageModal = ({ imageCategory, imagePath, onClose }: ImageModalProps) => {
  return (
    <div className="bg-black bg-opacity-70 fixed inset-0 w-full flex justify-center items-center overflow-scroll z-[100] tracking-wider">
      <div className="bg-white text-black radius-lg w-4/5 flex flex-col gap-7 min-h-[300px] max-h-screen">
        <div className="modal-header py-3 px-7 flex justify-between border-b border-slate-600 border-opacity-50">
          <span className="modal-header-title font-bold">{imageCategory}</span>
          <button type="button" onClick={() => onClose()}>
            <AiOutlineClose className="text-2xl" />
          </button>
        </div>
        {imagePath ? (
          <img
            src={`${UPLOADS_ENDPOINT}/${imagePath}`}
            className="w-full h-full object-cover"
            alt=""
          />
        ) : (
          "no image"
        )}
      </div>
    </div>
  );
};

export default ImageModal;
