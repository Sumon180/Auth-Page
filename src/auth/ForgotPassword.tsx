import React from "react";

const ForgotPassword = () => {
  return (
    <>
      <div className="flex items-center justify-center h-screen w-screen  bg-[#f8f7fa]">
        <div className="bg-white rounded p-5">
          <form action="">
            <div className="">
              <h1 className=" text-3xl text-slate-600 mb-2">
                Forgot Password? 🔒
              </h1>
              <p className=" text-gray-600 mb-7">
                Enter your email and we′ll send you instructions to reset your
                password
              </p>

              <div className="relative mb-5">
                <input
                  type="text"
                  name="email"
                  id="email"
                  required
                  className="border border-gray-400 outline-[#655BD3] w-full h-14 pl-3 rounded-md"
                />
                <label className="absolute top-[50%] transition-all duration-300 translate-y-[-60%] text-gray-500 left-[15px]">
                  Enter Email
                </label>
              </div>

              <button
                type="submit"
                className="bg-[#655BD3] text-white hover:bg-[#5147bb] transition-all duration-200 w-full h-12 rounded-md mb-4 text-xl"
              >
                SEND RESETE LINK
              </button>
            </div>

            <div className="text-center">
              <p>
                <a href="#" className="text-[#655BD3]">
                  Back to login
                </a>
                .
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
