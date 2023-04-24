import './App.css';
import Home from './components/Home';
import About from './components/About';
import {HashRouter,Routes,Route} from 'react-router-dom'
function App() {
  return (
    <HashRouter>
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/about" element={<About/>} />
    </Routes>
    </HashRouter>
  );
}

export default App;
