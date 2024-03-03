import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
function Addjob() {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="flex justify-center mt-10">
        <div className="w-1/4 mt-10 rounded-md border-white border-2">
          <div className="flex justify-center text-white m-3">
            <h1 className="text-4xl font-bold">Welcome.</h1>
          </div>

          <div className="flex flex-col m-3 ">
            <input
              className="py-2 pl-4 bg-zinc-200 rounded-md mt-3 placeholder-gray-600"
              type="text"
              placeholder="Enter Email"
            />

            <input
              className="py-2 pl-4 bg-zinc-200 rounded-md mt-3 placeholder-gray-600"
              type="password"
              placeholder="Enter Password"
            />

            <div className="flex flex-row space-x-5 mt-5 justify-center">
              <button className="w-1/4 bg-blue-500 text-white font-bold py-1 rounded-md">
                Sign-in
              </button>
              <button className="w-1/4 bg-blue-500 text-white font-bold py-1 rounded-md">
                Sign-up
              </button>
            </div>

            <div className="flex flex-col">
              <div className="flex justify-center mt-3">
                <p className="text-white">or</p>
              </div>
              <button className="bg-blue-500 text-white font-bold py-1 px-5 rounded-md mt-3">
                Continue with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Addjob;
