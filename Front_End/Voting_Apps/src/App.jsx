import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { CustomRoute } from "./components/CustomRoute";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <>
      <ToastContainer />
      <Router>
        <CustomRoute />
      </Router>
    </>
  );
}

export default App;
