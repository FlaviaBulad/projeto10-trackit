import {useState} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HabitsPage from './Components/Habits/HabitsPage';
import Header from './Components/Layouts/Header';
import LoginPage from './Components/Login/LoginPage';
import SignUpPage from './Components/SignUp/SignUpPage';
import TodayPage from './Components/Today/TodayPage';
import UserContext from './contexts/UserContext';

function App() {

  const [token, setToken] = useState(0);

  return (
    <UserContext.Provider value={{token, setToken}}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/cadastro/" element={<SignUpPage />} />
        <Route path="/habitos/" element={<HabitsPage />} />
        <Route path="/hoje/" element={<TodayPage />} />
      </Routes>
    </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
