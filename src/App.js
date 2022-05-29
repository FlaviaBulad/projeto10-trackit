import {useState} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HabitsPage from './Components/Habits/HabitsPage';
import LoginPage from './Components/Login/LoginPage';
import SignUpPage from './Components/SignUp/SignUpPage';
import TodayPage from './Components/Today/TodayPage';
import HistoryPage from './History/HistoryPage';
import UserContext from './contexts/UserContext';

function App() {

  const [token, setToken] = useState(0);
  const [photo, setPhoto] = useState('');

  return (
    <UserContext.Provider value={{token, setToken, photo, setPhoto}}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/cadastro/" element={<SignUpPage />} />
        <Route path="/habitos/" element={<HabitsPage />} />
        <Route path="/hoje/" element={<TodayPage />} />
        <Route path="/historico/" element={<HistoryPage />} />
      </Routes>
    </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
