
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <nav className="bg-red-100 py-4">
        <ul className="flex items-center justify-center gap-6">
          <li>
            <Link
              to={"register"}
              className=" bg-red-500 px-4 py-2 rounded text-white"
            >
              Register
            </Link>
          </li>
          <li>
            <Link
              to={"login"}
              className=" bg-red-500 px-4 py-2 rounded text-white"
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              to={"forgetpassword"}
              className=" bg-red-500 px-4 py-2 rounded text-white"
            >
              Forget Password
            </Link>
          </li>
          <li>
            <Link
              to={"resetpassword"}
              className=" bg-red-500 px-4 py-2 rounded text-white"
            >
              Reste Password
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Home;
