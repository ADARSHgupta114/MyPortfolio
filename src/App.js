
import './App.scss';
import Layout from './Components/Layouts';
import {Routes,Route} from 'react-router-dom';
import Home from  './Components/Homepage';
import About from './Components/About';
import Contact from './Components/Contact';
import Portfolio from './Components/Portfolio';
function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="contact" element={<Contact />} />
    <Route path="portfolio" element={<Portfolio />} />
    </Route>
    </Routes>
    </>
  );
}

export default App;
