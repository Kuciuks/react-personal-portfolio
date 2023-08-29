import './App.css';
import Header from './Components/Header';
import HomePage from './Components/HomePage';
import ProjectPage from './Components/ProjectPage';
import ContactMePage from './Components/ContactMePage';
import Footer from './Components/Footer';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/*" element={<ProjectPage />} />
        <Route path="/contact" element={<ContactMePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
