import {useState} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HabitsPage from './Components/Habits/HabitsPage';
import LoginPage from './Components/Login/LoginPage';
import SignUpPage from './Components/SignUp/SignUpPage';
import TodayPage from './Components/Today/TodayPage';
import HistoryPage from './History/HistoryPage';
import UserContext from './contexts/UserContext';
import './styles/reset.css';

function App() {

  const [token, setToken] = useState(null);
  const [photo, setPhoto] = useState('');
  const [percentage, setPercentage] = useState(0);

  return (
    <UserContext.Provider value={{token, setToken, photo, setPhoto, percentage, setPercentage}}>
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
