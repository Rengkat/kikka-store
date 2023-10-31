import React, { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import logo from "../../Assest/icon.png";
import { GeneralContext } from "../../Contexts/GeneralContext";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const { updateUser, user } = useContext(GeneralContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState(false);
  const handleSubmit = () => {
    if (email === "" || password === "") {
      setErr(true);
    }
    setErr(false);
    updateUser({ email, password });
    navigate("/");
    setEmail("");
    setPassword("");
  };
  if (user) {
    <Navigate to="/" />;
  }
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-[90%] sm:w-[50%] md:w-[40%] lg:w-[30%] xl:w-[25%] border-2 px-[1.5rem] py-[3rem]">
        <Link to="/" className="flex justify-center">
          <div className="logo flex items-center flex-col justify-start hover:opacity-75 ">
            <img src={logo} alt="Logo image" className="w-8 h-8 md:w-10 md:h-10" />
            <h1 className="font-bold md:text-xl -mt-2">
              Buil<span className="text-yellow-600">din</span>
              <span className="text-yellow-700 font-bold text-xl">X</span>
            </h1>
          </div>
        </Link>
        <h1 className="font-bold">Sign up</h1>
        <section>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full block border-[1px] border-zinc-400 rounded-md mt-[1rem] py-2 px-4"
            type="email"
            placeholder="Enter email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full block border-[1px] border-zinc-400 rounded-md mt-[1rem] py-2 px-4"
            type="password"
            placeholder="Enter password"
          />
          <p className={`text-red-500 ${err ? "block" : "hidden"}`}>Please enter all field!</p>

          <button
            onClick={handleSubmit}
            className="bg-yellow-700 w-full py-3 px-10 rounded shadow text-white my-[1rem]">
            Login
          </button>
          <p>
            Don't have an account?{" "}
            <span className="font-semibold text-yellow-700">
              <Link to={"/sign-up"}>Register</Link>
            </span>
          </p>
        </section>
      </div>
    </div>
  );
};

export default Login;
