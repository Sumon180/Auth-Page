const RegisterForm = () => {
  return (
    <>
      <div className="flex items-center justify-center h-screen w-screen  bg-[#f8f7fa]">
        <div className="bg-white rounded p-5">
          <form action="">
            <div className="">
              <h1 className=" text-3xl text-slate-600 mb-2">Register</h1>
              <p className=" text-gray-600 mb-7">
                Please fill in this form to create an account.
              </p>
              <div className="flex flex-col gap-4">
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    className="border border-gray-400 outline-[#655BD3] w-full h-14 pl-3 rounded-md"
                  />
                  <label className="absolute top-[50%] transition-all duration-300 translate-y-[-60%] text-gray-500 left-[15px]">
                    Username
                  </label>
                </div>

                <div className="relative">
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

                <div className="relative">
                  <input
                    type="password"
                    name="psw"
                    id="psw"
                    required
                    className="border border-gray-400 outline-[#655BD3] w-full h-14 pl-3 rounded-md"
                  />
                  <label className="absolute top-[50%] transition-all duration-300 translate-y-[-60%] text-gray-500 left-[15px]">
                    Enter Password
                  </label>
                </div>
              </div>

              <p className="my-4">
                By creating an account you agree to our{" "}
                <a href="#" className="text-[#655BD3]">
                  Terms & Privacy
                </a>
                .
              </p>
              <button
                type="submit"
                className="bg-[#655BD3] text-white hover:bg-[#5147bb] transition-all duration-200 w-full h-12 rounded-md mb-4 text-2xl"
              >
                Register
              </button>
            </div>

            <div className="text-center">
              <p>
                Already have an account?{" "}
                <a href="#" className="text-[#655BD3]">
                  Sign in
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

export default RegisterForm;
