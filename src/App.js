
import './App.css';
import Login from './Login'
import Sign from './Sign'
import { Route,Routes, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/sign-up" element={<Sign/>}/>
    </Routes>
   </BrowserRouter> 
 
  );
}

export default App;
