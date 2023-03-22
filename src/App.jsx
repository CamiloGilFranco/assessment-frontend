import "./App.css";
import AboutPage from "./pages/AboutPage/AboutPage";
import HomePage from "./pages/HomePage/HomePage";
import QuestionsPage from "./pages/QuestionsPage/QuestionsPage";
import CSSExercisePage from "./pages/CSSExercisePage/CSSExercisePage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/questions" element={<QuestionsPage />} />
        <Route path="/css-exercise" element={<CSSExercisePage />} />
      </Routes>
    </div>
  );
}

export default App;
