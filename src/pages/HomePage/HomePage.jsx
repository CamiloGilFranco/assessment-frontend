import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import "./HomePage.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../../store/actions/myStore.action";
import LoaderComponent from "../../components/LoaderComponent/LoaderComponent";

import err from "../../assets/err.png";

const HomePage = () => {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector(
    (state) => state.myStoreReducer
  );

  useEffect(() => {
    dispatch(getPost());
  }, []);
  return (
    <div className="home-page">
      <HeaderComponent />
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
        {posts.map((element) => (
          <div className="item-card">
            <div className="item-card-image-container">
              <img src={element.image} alt="" className="item-card-image" />
            </div>
            <p className="item-card-paragraph">{element.title}</p>
            <div className="item-card-last-container">
              <span className="item-card-clock">00:00:00</span>
              <button className="item-card-button">Go To Detail</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
