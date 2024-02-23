import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAOXZMT24YNnMtWRXBmXEwLFi_AOXJjtOw",
  authDomain: "jobportalproject-482f7.firebaseapp.com",
  projectId: "jobportalproject-482f7",
  storageBucket: "jobportalproject-482f7.appspot.com",
  messagingSenderId: "762502573562",
  appId: "1:762502573562:web:1402187713c187b8fd8843",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const data = {
  postedOn: "2023-10-24",
  title: "Frontend Developer",
  type: "Full time",
  location: "In-office",
  experience: "Fresher",
  company: "Amazon",
  skills: ["Javascript", "Nextjs", "Tailwind CSS"],
  job_link: "https://www.amazon.jobs/en/",
};
const addJob = async () => {
  try {
    const docRef = await addDoc(collection(db, "jobs"), data);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
addJob();

export { db };
