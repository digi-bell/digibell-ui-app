//import './App.css';
import Homepage from './components/Homepage';
import {Route, Routes} from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import ResetPassword from './components/Reset';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path='/' element={<Homepage/>} />
          <Route path='/login' element={<SignIn/>} />
          <Route path='/signup' element={<SignUp/>} />
          <Route path='/reset' element={<ResetPassword/>} />
          <Route path='/logout' element={<ResetPassword/>} />
      </Routes>
    </div>
  );
}

export default App;
