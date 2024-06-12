import { useUserContext } from "@/contexts/User";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { assets } from "../../assets/imgs";
import { FiLogOut } from "react-icons/fi";

const Header = () => {
  const { logged, currentUser, logout } = useUserContext();
  const [visible, setVisible] = useState(false);

  const handleLogout = () => {
    setVisible(false);
    logout();
  };

  return (
    <div className="flex flex-shrink-0 justify-between items-center px-14 shadow-item2  text-black">
      <div className="flex h-full gap-10 py-2">
        <Link href={logged ? "/" : "/login"} className="w-[100px] h-[50px]">
          <Image
            src={assets.AICOSTSQO_logo}
            alt=""
            className="rounded-t-md w-full h-full object-cover"
            priority
          />
        </Link>

        {logged ? (
          <ul className="flex ">
            <li className="group relative ">
              <span
                onClick={() => setVisible(!visible)}
                className="flex items-center justify-center nav-item h-full"
              >
                <div>File</div>
              </span>
              <div
                className={`absolute top-full -left-5 w-64 rounded p-1 bg-white border-2 border-black flex flex-col z-10  transition-all ${
                  visible ? " visible mt-3" : " invisible mt-2"
                } `}
              >
                <Link
                  onClick={() => setVisible(!visible)}
                  href="/new-project"
                  className={
                    "text-base inline-flex py-2 px-2 items-center rounded hover:bg-green-500 hover:text-white border-b-2"
                  }
                >
                  New Project
                </Link>
                <Link
                  onClick={() => setVisible(!visible)}
                  href="/project"
                  className={
                    "text-base inline-flex py-2 px-2 items-center rounded hover:bg-green-500 hover:text-white border-b-2"
                  }
                >
                  Open Project
                </Link>
                {/* <Link
                  // onClick={() => setVisible(!visible)}
                  href="#"
                  className={
                    "text-base inline-flex py-2 px-2 items-center rounded border-b-2 cursor-default text-slate-400"
                  }
                >
                  Save Project
                </Link>
                <Link
                  // onClick={() => setVisible(!visible)}
                  href="#"
                  className={
                    "text-base inline-flex py-2 px-2 items-center rounded border-b-2 cursor-default text-slate-400"
                  }
                >
                  Close Project
                </Link> */}
              </div>
            </li>
            <li className="nav-item text-slate-300 hover:text-slate-300 hover:bg-gray-100 cursor-default">
              Edit
            </li>
            <li className="nav-item text-slate-300 hover:text-slate-300 hover:bg-gray-100 cursor-default">
              View
            </li>
            <li className="nav-item text-slate-300 hover:text-slate-300 hover:bg-gray-100 cursor-default">
              Help
            </li>
          </ul>
        ) : null}
      </div>

      {logged ? (
        <div className="nav-item px-5" onClick={handleLogout}>
          <FiLogOut className="text-3xl" />
        </div>
      ) : null}
    </div>
  );
};

/* <div className="ml-10 flex items-center order-3">
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
        </div> */

export default Header;
