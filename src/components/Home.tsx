import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <nav className="bg-[#d8d4ff] py-4">
        <ul className="flex items-center justify-start gap-6 mx-10">
          <li>
            <Link
              to={"register"}
              className=" bg-[#655BD3] px-4 py-2 rounded text-white"
            >
              Register
            </Link>
          </li>
          <li>
            <Link
              to={"login"}
              className=" bg-[#655BD3] px-4 py-2 rounded text-white"
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              to={"forgetpassword"}
              className=" bg-[#655BD3] px-4 py-2 rounded text-white"
            >
              Forget Password
            </Link>
          </li>
          <li>
            <Link
              to={"resetpassword"}
              className=" bg-[#655BD3] px-4 py-2 rounded text-white"
            >
              Reste Password
            </Link>
          </li>
          <li>
            <Link
              to={"twosteps"}
              className=" bg-[#655BD3] px-4 py-2 rounded text-white"
            >
              Two Steps
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Home;
