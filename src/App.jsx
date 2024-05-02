import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Addjob from "./pages/Addjob";
import Jobform from "./pages/Jobform";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Addjob />} />
        <Route path="/jobform" element={<Jobform />} />
      </Routes>
    </Router>
  );
}

export default App;
