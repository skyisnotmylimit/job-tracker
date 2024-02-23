import Navbar from "./components/Navbar";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Jobcard from "./components/Jobcard";
import jobData from "./JobDummyData";
import { useEffect, useState } from "react";
import { db } from "./firebase.config";
import { collection, query, getDocs } from "firebase/firestore";

function App() {
  const [jobs, setJobs] = useState([]);

  const fetchJobs = async () => {
    const q = query(collection(db, "jobs"));
    const querySnapshot = await getDocs(q);
    const jobs = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    setJobs(jobs);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div>
      <Navbar />
      <Header />
      <SearchBar />
      {jobs.map((job) => (
        <Jobcard key={job.id} {...job} />
      ))} // Use fetched jobs from state
    </div>
  );
}
export default App;
