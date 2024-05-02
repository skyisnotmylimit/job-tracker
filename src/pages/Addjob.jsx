import { useState } from "react";
import {
  signInWithEmailAndPassword,
  signUpWithEmailAndPassword,
  signInWithGoogle,
} from "../../firebase"; // Import Firebase authentication methods
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

function Addjob() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err,setError] = useState(null);
  const navigate = useNavigate();

  const handleEmailSignIn = async () => {
    try {
      await signInWithEmailAndPassword(email, password);
      // Handle successful sign-in (e.g., redirect)
      console.log("Signed in with email/password successfully!");
      navigate("/jobform")
    } catch (error) {
      setError(error.message)
      console.error("Error signing in with email/password:", err);
      alert(err);
    }
  };

  const handleEmailSignUp = async () => {
    try {
      await signUpWithEmailAndPassword(email, password);
      console.log("Signed up with email/password successfully!");
      // Handle successful sign-up (e.g., redirect to profile setup)
      navigate("/jobform");
    } catch (error) {
      setError(error.message);
      console.error("Error signing up with email/password:", err);
      alert(err);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      // Handle successful Google sign-in (e.g., redirect)
      console.log("Signed in with Google successfully!");
      navigate("/jobform")
    } catch (error) {
      setError(error.message)
      console.error("Error signing in with Google:", err);
      alert(err);
    }
  };

  return (
    <div>
      <Navbar />
      <Header />
      <div className="flex justify-center mt-10">
        <div className="w-1/4 mt-10 rounded-md border-white border-2">
          <div className="flex justify-center text-white m-3">
            <h1 className="text-4xl font-bold">Welcome.</h1>
          </div>

          <div className="flex flex-col m-3">
            <input
              className="py-2 pl-4 bg-zinc-200 rounded-md mt-3 placeholder-gray-600"
              type="text"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              className="py-2 pl-4 bg-zinc-200 rounded-md mt-3 placeholder-gray-600"
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className="flex flex-row space-x-5 mt-5 justify-center">
              <button className="w-1/4 bg-blue-500 text-white font-bold py-1 rounded-md" onClick={handleEmailSignIn}>
                Sign-in
              </button>
              <button className="w-1/4 bg-blue-500 text-white font-bold py-1 rounded-md" onClick={handleEmailSignUp}>
                Sign-up
              </button>
            </div>

            <div className="flex flex-col">
              <div className="flex justify-center mt-3">
                <p className="text-white">or</p>
              </div>
              <button className="bg-blue-500 text-white font-bold py-1 px-5 rounded-md mt-3" onClick={handleGoogleSignIn}>
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
