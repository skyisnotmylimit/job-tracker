import Navbar from "./components/Navbar";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Jobcard from "./components/Jobcard";
import jobData from "./JobDummyData";

function App() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <SearchBar/>
      {jobData.map((job)=> (
        <Jobcard key={job.id} {...job}/>
      ))}
    </div>
  )
}
export default App