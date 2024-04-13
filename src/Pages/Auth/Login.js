import React, { useContext, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import logo from "../../Assest/icon.png";
import { AuthContext } from "../../Contexts/AuthContext";

const Login = () => {
  const { dispatch, user } = useContext(AuthContext);

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState(false);

  const handleSubmit = async () => {
    // if (email === "" || password === "") {
    //   setErr(true);
    // }
    // const res = await fetch("http://localhost:5000/api/user/login", {
    //   method: "POST",
    //   headers: {
    //     "Content-type": "application/json",
    //   },
    //   body: JSON.stringify({ email, password }),
    // });
    // const response = res.json();
    // if (response.ok) {
    //   loginUser({ email, password });
    //   navigate("/");
    // }
    // setErr(false);
    // setEmail("");
    // setPassword("");
  };
  if (user) {
    return <Navigate to="/" />;
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
