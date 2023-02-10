import { Route, Routes } from "react-router-dom";
import ForgotPassword from "./auth/ForgotPassword";
import LoginForm from "./auth/LoginForm";
import RegisterForm from "./auth/RegisterForm";
import ResetePassword from "./auth/ResetePassword";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/forgetpassword" element={<ForgotPassword />} />
        <Route path="/resetpassword" element={<ResetePassword />} />
      </Routes>
    </div>
  );
}

export default App;
