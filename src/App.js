import './App.css';
import Home from './components/Home';
import About from './components/About';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/about" element={<About/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
