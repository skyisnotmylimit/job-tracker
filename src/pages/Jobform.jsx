import { useState } from "react";
import { uploadFormData } from "../../firebaseService";
import Navbar from "../components/Navbar";
import Header from "../components/Header";

function Jobform() {
  const [formData, setFormData] = useState({
    company: "",
    title: "",
    type: "",
    location: "",
    experience: "",
    job_link: "",
    skills: [],
  });

  const [selectedSkills, setSkills] = useState([]);

  const handleSkillChange = (e) => {
    const inputValue = e.target.value;
    // Split the input value by commas to get individual skills
    const newSkills = inputValue.split(",").map((skill) => skill.trim());
    setSkills(newSkills); // Update selectedSkills state
  };

  const updateSkills = () => {
    setFormData({
      ...formData,
      skills: selectedSkills, // Update formData's skills with selected skills
    });
    setSkills([]);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const docId = await uploadFormData(formData);
      console.log("Form data uploaded successfully with ID:", docId);
      // Reset form fields after submission
      setFormData({
        company: "",
        title: "",
        type: "",
        location: "",
        experience: "",
        job_link: "",
        skills: [],
      });
    } catch (error) {
      console.error("Error uploading form data:", error.message);
      // Handle error (e.g., display error message)
    }
  };

  const handleClear = () => {
    setFormData({
      company: "",
      title: "",
      type: "",
      location: "",
      experience: "",
      job_link: "",
      skills: [],
    });
    setSkills([]);
  };

  return (
    <div>
      <Navbar />
      <Header />
      <div className="flex justify-center mt-10">
        <div className="w-1/4 mt-10 rounded-md border-white border-2">
          <div className="flex justify-center text-white m-3">
            <h1 className="text-4xl font-bold">Post a Job</h1>
          </div>

          <form className="flex flex-col m-3" onSubmit={handleSubmit}>
            <input
              className="py-2 pl-4 bg-zinc-200 rounded-md mt-3 placeholder-gray-600"
              type="text"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              placeholder="Company Name"
            />
            <select
              name="title"
              className="py-2 pl-4 bg-zinc-200 rounded-md mt-3 placeholder-gray-600"
              value={formData.title}
              onChange={handleInputChange}
            >
              <option value="" disabled hidden>
                Select Job Profile
              </option>
              <option value="iOS Developer">iOS Developer</option>
              <option value="Frontend Developer">Frontend Developer</option>
              <option value="Backend Developer">Backend Developer</option>
              <option value="Android Developer">Android Developer</option>
              <option value="Developer Advocate">Developer Advocate</option>
            </select>

            <select
              name="type"
              className="py-2 pl-4 bg-zinc-200 rounded-md mt-3 placeholder-gray-600"
              value={formData.type}
              onChange={handleInputChange}
            >
              <option value="" disabled hidden>
                Select Job Type
              </option>
              <option value="Full Time">Full Time</option>
              <option value="Part Time">Part Time</option>
              <option value="Contract">Contract</option>
            </select>

            <select
              name="location"
              className="py-2 pl-4 bg-zinc-200 rounded-md mt-3 placeholder-gray-600"
              value={formData.location}
              onChange={handleInputChange}
            >
              <option value="" disabled hidden>
                Select Location
              </option>
              <option value="Remote">Remote</option>
              <option value="In-Office">In-Office</option>
              <option value="Hybrid">Hybrid</option>
            </select>

            <select
              name="experience"
              className="py-2 pl-4 bg-zinc-200 rounded-md mt-3 placeholder-gray-600"
              value={formData.experience}
              onChange={handleInputChange}
            >
              <option value="" disabled hidden>
                Select Experience Level
              </option>
              <option value="Fresher">Fresher</option>
              <option value="Junior Level">Junior Level</option>
              <option value="Mid Level">Mid Level</option>
              <option value="Senior Level">Senior Level</option>
            </select>

            <input
              className="py-2 pl-4 bg-zinc-200 rounded-md mt-3 placeholder-gray-600"
              type="text"
              value={selectedSkills.join(", ")} // Display selected skills as comma-separated string
              onChange={handleSkillChange}
              placeholder="Add Skills (e.g., ReactJS, UI/UX, Django)"
            />
            <button
              type="button"
              className="w-1/4 bg-blue-500 text-white font-bold py-2 rounded-md mt-2"
              onClick={updateSkills}
            >
              Add
            </button>
            <input
              className="py-2 pl-4 bg-zinc-200 rounded-md mt-3 placeholder-gray-600"
              type="text"
              name="job_link"
              value={formData.job_link}
              onChange={handleInputChange}
              placeholder="Enter Link"
            />

            <div className="flex justify-center mt-5">
              <button
                type="submit"
                className="w-1/4 bg-blue-500 text-white font-bold py-2 rounded-md mr-2"
              >
                Submit
              </button>
              <button
                type="button"
                className="w-1/4 bg-gray-500 text-white font-bold py-2 rounded-md"
                onClick={handleClear}
              >
                Clear
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Jobform;
