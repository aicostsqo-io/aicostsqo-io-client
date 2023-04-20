import { assets } from "@/assets/imgs";
import { useUserContext } from "@/contexts/User";
import { registerSchema } from "@/validations/register";
import { useFormik } from "formik";
import Image from "next/image";
import Link from "next/link";

const Signup = () => {
  const { register } = useUserContext();
  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        username: "",
        email: "",
        password: "",
        passwordConfirm: "",
      },
      onSubmit: (values) => {
        register({
          username: values.username,
          email: values.email,
          password: values.password,
        });
      },
      validationSchema: registerSchema,
    });

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="flex flex-col w-2/5 gap-5">
        <div className="w-full">
          <Image
            src={assets.AICOSTSQO_logo}
            alt=""
            className="rounded-t-md w-full h-full object-cover"
            priority
          />
        </div>
        <div className="w-full m-auto py-10 bg-white">
          <form onSubmit={handleSubmit} className="mb-5">
            <div className="w-full flex items-center  px-10">
              <div className="w-3/4 flex  flex-col gap-5">
                <div className="flex justify-between gap-10 items-center">
                  <label
                    htmlFor="username"
                    className="text-green-600 w-1/3 text-center"
                  >
                    Username
                  </label>
                  <input
                    id="username"
                    value={values.username}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="username"
                    type="text"
                    className="text-darkBlue py-2 px-4 w-2/3 border-black border-2 rounded outline-none"
                    placeholder="Username"
                  />
                </div>
                <div className="flex justify-between gap-10 items-center">
                  <label
                    htmlFor="username"
                    className="text-green-600 w-1/3 text-center"
                  >
                    Email
                  </label>
                  <input
                    id="username"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="email"
                    type="text"
                    className="text-darkBlue py-2 px-4 w-2/3 border-black border-2 rounded outline-none"
                    placeholder="Email"
                  />
                </div>
                <div className="flex justify-between gap-10 items-center">
                  <label
                    htmlFor="password"
                    className="text-green-600 w-1/3 text-center"
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="password"
                    type="password"
                    className="text-darkBlue py-2 px-4 w-2/3 border-black border-2 rounded outline-none"
                    placeholder="Password"
                  />
                </div>
                <div className="flex justify-between gap-10 items-center">
                  <label
                    htmlFor="password-confirm"
                    className="text-green-600 w-1/3 text-center"
                  >
                    Password Confirm
                  </label>
                  <input
                    id="password-confirm"
                    value={values.passwordConfirm}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="passwordConfirm"
                    type="password"
                    className="text-darkBlue py-2 px-4 w-2/3 border-black border-2 rounded outline-none"
                    placeholder="Password Confirm"
                  />
                </div>
              </div>
              <div className="text-right mt-5 w-1/4">
                <button
                  type="submit"
                  className={`btn text-base py-2 px-10 border-2 border-green-500 bg-white text-green-500 hover:text-white hover:bg-green-500 transition-all`}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </form>
          <Link
            href={"/login"}
            type="submit"
            className="mt-5 border-2 border-green-500 text-green-500 bg-white  w-full py-2 text-center text-base hover:bg-green-500 hover:text-white transition-all duration-200 rounded"
          >
            Already have account? Login!
          </Link>

          <ul className="flex flex-row justify-between gap-7 mt-10">
            <li className="h-[80px]">
              <Image
                src={assets.BAY_E}
                alt=""
                className="rounded-t-md w-full h-full object-fill"
              />
            </li>
            <li className="h-[80px]">
              <Image
                src={assets.FIS}
                alt=""
                className="rounded-t-md w-full h-full object-cover"
              />
            </li>
            <li className="h-[80px]">
              <Image
                src={assets.GIR}
                alt=""
                className="rounded-t-md w-full h-full object-cover"
              />
            </li>
            <li className="h-[80px]">
              <Image
                src={assets.Unibo}
                alt=""
                className="rounded-t-md w-full h-full object-fit"
              />
            </li>
            <li className="h-[80px]">
              <Image
                src={assets.UniversiteDinPetrosani}
                alt=""
                className="rounded-t-md w-full h-full object-cover"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Signup;
