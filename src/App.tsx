import MainPage from "./pages/Main/MainPage";
import LoginPage from "./pages/Login/LoginPage";
import RegisterPage from "./pages/Register/RegisterPage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchPage from "./pages/Search/SearchPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/welcome" element={<SearchPage />} />
      </Routes>
    </Router>
  )
}

export default App;