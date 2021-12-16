import Country from './components/Country';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CountryDetails from './components/CountryDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Country />}></Route>
        <Route path="/country-details:country" element={<CountryDetails />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
