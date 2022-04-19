import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Signin from './screen/Signin';
import Signup from './screen/Signup';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="Signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
