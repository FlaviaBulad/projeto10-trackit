import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HabitsPage from './Components/Habits/HabitsPage';
import LoginPage from './Components/Login/LoginPage';
import SignUpPage from './Components/SignUp/SignUpPage';
import TodayPage from './Components/Today/TodayPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/cadastro/" element={<SignUpPage />} />
        <Route path="/habitos/" element={<HabitsPage />} />
        <Route path="/hoje/" element={<TodayPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
