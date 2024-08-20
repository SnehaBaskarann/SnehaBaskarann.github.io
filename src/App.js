import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import "./App.css";
import WelcomePage from "./WelcomePage";


// export const scroll = new SmoothScroll('a[href*="#"]', {
//   speed: 1000,
//   speedAsDuration: true,
// });

const App = () => {
  // const [landingPageData, setLandingPageData] = useState({});
  // useEffect(() => {
  //   setLandingPageData(JsonData);
  // }, []);

  return (
    <div>
      <Router>
      <Routes>
              
              
              <Route path="/" element={<WelcomePage/>}/>
             
            </Routes>
    </Router>
    </div>
    
  );
};

export default App;
