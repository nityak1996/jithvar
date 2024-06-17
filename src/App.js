import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Form from "./components/Form";
import MainContainer from "./components/MainContainer";

import CountryDetails from "./components/CountryDetail";
import StateDetails from "./components/StateDetails";
import CityDetail from "./components/CityDetail";
import EmployDetailsForm from "./components/EmployDetailsForm";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/country" element={<CountryDetails />} />
          <Route path="/main" element={<MainContainer />} />
          <Route path="/state" element={<StateDetails />} />
          <Route path="/city" element={<CityDetail />} />
          <Route path="/employee" element={<EmployDetailsForm />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
