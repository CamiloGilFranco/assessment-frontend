import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import "./HomePage.css";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import LoaderComponent from "../../components/LoaderComponent/LoaderComponent";
import CardComponent from "../../components/CardComponent/CardComponent";

import err from "../../assets/err.png";

const HomePage = () => {
  const { posts, loading, error } = useSelector(
    (state) => state.myStoreReducer
  );
  return (
    <div className="home-page">
      <HeaderComponent />
      <span className="home-page-title">PRODUCTS</span>
      <div className="home-page-body">
        {loading ? (
          <div className="page-loading">
            <LoaderComponent />
          </div>
        ) : (
          ""
        )}
        {error !== null && !loading ? (
          <img src={err} alt="" className="home-page-error-image" />
        ) : (
          ""
        )}
        {posts.map((element, index) => (
          <CardComponent
            key={index}
            image={element.image}
            title={element.title}
            id={element.id}
            limitTimeNumber={element.limitTimeNumber}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
