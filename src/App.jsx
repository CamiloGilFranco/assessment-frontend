import "./App.css";
import AboutPage from "./pages/AboutPage/AboutPage";
import HomePage from "./pages/HomePage/HomePage";
import QuestionsPage from "./pages/QuestionsPage/QuestionsPage";
import CSSExercisePage from "./pages/CSSExercisePage/CSSExercisePage";
import { Route, Routes } from "react-router-dom";
import DetailPage from "./pages/DetailPage/DetailPage";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getPost } from "./store/actions/myStore.action";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPost());
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/questions" element={<QuestionsPage />} />
        <Route path="/css-exercise" element={<CSSExercisePage />} />
        <Route path="/detalle/:id" element={<DetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
