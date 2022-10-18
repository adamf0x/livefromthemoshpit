import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Home";
import Gallery from './Gallery';
 

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
      </Routes>
    </Router>
  );
}

export default App;
