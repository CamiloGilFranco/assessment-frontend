import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import "./DetailPage.css";
import expired from "../../assets/expired.png";

const DetailPage = () => {
  const { pathname } = useLocation();
  const productID = pathname.replace("/detalle/", "");

  const product = useSelector((state) => {
    return state.myStoreReducer.posts.find((element) => {
      return element.id === parseInt(productID);
    });
  });

  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const nowTime = new Date().getTime();
      const timeLeft = product.limitTimeNumber - nowTime;

      setHours(
        (
          "0" +
          Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        ).slice(-2)
      );

      setMinutes(
        ("0" + Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))).slice(
          -2
        )
      );

      setSeconds(("0" + Math.floor((timeLeft % (1000 * 60)) / 1000)).slice(-2));

      if (timeLeft <= 0) {
        setHours("00");
        setMinutes("00");
        setSeconds("00");
        clearTimeout(interval);
      }
    }, 1000);
  }, []);
  return (
    <div className="detail-page">
      <HeaderComponent />
      {hours === "00" && minutes === "00" && seconds === "00" ? (
        <div className="detail-page-expired-container">
          <img src={expired} alt="" className="detail-page-expired-img" />
        </div>
      ) : (
        ""
      )}

      <div className="detail-page-body">
        <span className="detail-page-title">{product.title}</span>
        <span className="detail-page-clock">
          {hours}:{minutes}:{seconds}
        </span>
        <div className="detail-page-info-container">
          <div className="detail-page-img-container">
            <img src={product.image} alt="" className="detail-page-img" />
          </div>
          <div className="detail-page-info-container-text">
            <p className="detail-page-description">{product.description}</p>
            <span className="detail-page-price">${product.price}</span>
            <div className="detail-page-info-container-rate-container">
              <span className="detail-page-info-rate">
                Rating: {product.rating.rate}⭐, {product.rating.count} opinions
              </span>
              <span className="detail-page-info-rate">
                Category: {product.category}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
