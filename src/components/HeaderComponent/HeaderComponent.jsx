import "./HeaderComponent.css";
import { useNavigate } from "react-router-dom";

function HeaderComponent() {
  const navigate = useNavigate();
  return (
    <div className="header-component">
      <span className="header-component-link" onClick={() => navigate("/")}>
        HOME
      </span>
      <span
        className="header-component-link"
        onClick={() => navigate("/about")}
      >
        ABOUT
      </span>
      <span
        className="header-component-link"
        onClick={() => navigate("/questions")}
      >
        QUESTIONS
      </span>
    </div>
  );
}

export default HeaderComponent;
