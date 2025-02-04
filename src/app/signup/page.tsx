import InputBox from "@/components/InputBox";
import React from "react";

export default function SignUp() {
  return (
    <div className="flex h-screen bg-gradient-to-b from-cyan-500 to-green-400 p-8">
      <div className="w-1/2 flex flex-col justify-center items-start pl-20">
        <div className="text-4xl font-bold text-white flex justify-center">
          <span className="text-[#015d7f]">OPPTO: </span>
          <span> Fast, Effective, and Productive!</span>
        </div>
        <img src="/static/images/girl-laptop.png" alt="Girl with Laptop" />
      </div>

      <div className="w-1/2 flex justify-center items-center">
        <div className="bg-white p-10 rounded-3xl shadow-lg w-[600px]">
          <div className="text-2xl font-semibold text-[#015d7f] mb-6 flex justify-between">
            <img src="/static/images/oppto.png" alt="logo" />
            <div className="">Sign up</div>
            <div className="w-[80px]"></div>
          </div>

          <div className="flex justify-center mb-4 gap-4">
            <button className="h-10 px-2 bg-white border py-2 rounded-3xl shadow-md flex items-center justify-center gap-2">
              <div>
                <img
                  src="/static/images/google.png"
                  alt="logo"
                  className="w-6 h-auto object-cover"
                />
              </div>
              Continue with Google
            </button>

            <button className="h-10 px-2 bg-white border py-2 rounded-3xl shadow-md flex items-center justify-center gap-2">
              <div>
                <img
                  src="/static/images/facebook.png"
                  alt="logo"
                  className="w-6 h-auto object-cover"
                />
              </div>
              Continue with Google
            </button>
          </div>

          <div className="text-center text-gray-500 mb-8 mt-8">
            <div>Or with email</div>
            <hr />
          </div>

          <form>
            <div className="grid grid-cols-2 gap-3">
              <InputBox type="text" placeholder="First Name" />
              <InputBox type="text" placeholder="Last Name" />
            </div>
            <InputBox type="email" placeholder="Enter your email here" />
            <InputBox type="password" placeholder="Enter your password here" />
            <InputBox type="password" placeholder="Enter your password again" />

            <div className="flex items-center mb-4 justify-center justify-self-center">
              <input
                type="checkbox"
                id="terms"
                className="mr-2 checked:color-[#015d7f]"
              />
              <label htmlFor="terms" className="text-gray-600">
                Agree to our{" "}
                <a href="#" className="text-[#015d7f] underline">
                  Terms of use
                </a>{" "}
                and{" "}
                <a href="#" className="text-[#015d7f] underline">
                  Privacy Policy
                </a>
              </label>
            </div>

            <button className="bg-[#00b2f3] text-white py-2 w-1/2 rounded-3xl text-lg flex justify-center justify-self-center">
              Confirm
            </button>
          </form>

          <p className="text-center text-gray-600 mt-4">
            Already have an account?{" "}
            <a href="#" className="text-[#015d7f] underline">
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
