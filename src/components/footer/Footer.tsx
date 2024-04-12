import { assets } from "@/assets/imgs";
import Image from "next/image";
const Footer = () => {
  return (
    <div className="flex flex-row justify-between items-center shadow-item2 px-14 bg-white  border-gray-300 text-sm py-2">
      <ul className="flex flex-row gap-7">
        <li className="w-[100px] h-[50px]">
          <Image
            src={assets.BAY_E}
            alt=""
            className="rounded-t-md w-full h-full object-fill"
          />
        </li>
        <li className="w-[80px] h-[50px]">
          <Image
            src={assets.FIS}
            alt=""
            className="rounded-t-md w-full h-full object-cover"
          />
        </li>
        <li className="w-[50px] h-[50px]">
          <Image
            src={assets.GIR}
            alt=""
            className="rounded-t-md w-full h-full object-cover"
          />
        </li>
        <li className="w-[50px] h-[50px]">
          <Image
            src={assets.Unibo}
            alt=""
            className="rounded-t-md w-full h-full object-cover"
          />
        </li>
        <li className="w-[70px] h-[50px]">
          <Image
            src={assets.UniversiteDinPetrosani}
            alt=""
            className="rounded-t-md w-full h-full object-cover"
          />
        </li>
      </ul>
    </div>
  );
};

export default Footer;
