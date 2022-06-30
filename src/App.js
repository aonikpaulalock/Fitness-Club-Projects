import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/Home/About';
import Home from './Pages/Home/Home';
import Header from './Shared/Header';
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
      </Routes>
    </>
  );
}

export default App;
