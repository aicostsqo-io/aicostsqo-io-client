import { useUserContext } from "@/contexts/User";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import {assets} from  "../../assets/imgs";


const Header = () => {
  const { logged, currentUser, logout } = useUserContext();
  const [visible, setVisible] = useState(false);

  const handleLogout = () => {
    setVisible(false);
    logout();
  };

  return (
    <div className="flex flex-shrink-0 justify-between items-center px-14 shadow-item2 bg-white text-black">
      <div className="flex h-full gap-10">
        <Link href={logged ? "/" : "/login"} className="w-[100px] h-[50px]">
          <Image
              src={assets.AICOSTSQO_logo}
              alt=""
              className="rounded-t-md w-full h-full object-cover"
            />
        </Link>

        <ul className="flex h-full">
          <li className="nav-item">File</li>
          <li className="nav-item">Edit</li>
          <li className="nav-item">View</li>
          <li className="nav-item">Help</li>
        </ul>
      </div>

      {logged ? (
        <div
        className="nav-item"
        onClick={handleLogout}
      >
        Signout
      </div>
      ) : (
        <div className="ml-10 flex items-center order-3">
          <Link
            className={"btn bg-black shadow-item text-white mr-5 text-base"}
            href={"/login"}
          >
            Login
          </Link>
          <Link
            className={"btn bg-black shadow-item text-white text-base"}
            href={"/signup"}
          >
            Sign Up
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
