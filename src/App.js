import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar.jsx';
import Homepage from './Components/Homepage/Homepage.jsx';
import MainPage from './Components/MainPage/MainPage.jsx';
import MainPage2 from './Components/MainPage2/MainPage2.jsx';
import MainPage3 from './Components/MainPage3/MainPage3.jsx';
import MainPage4 from './Components/MainPage4/MainPage4.jsx';
import PageBuilder from './Components/Build/Builder.jsx';

import About  from './Components/About/About.jsx';


function App(){
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={(
            <>
              <Homepage />
              <MainPage />
              <MainPage2 />
              <MainPage3 />
              <MainPage4 />
            </>
          )}
        />
        <Route path="/builder" element={<PageBuilder />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;