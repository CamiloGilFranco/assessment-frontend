import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import expired from "../../assets/expired.png";

const CardComponent = ({ image, title, id, limitTimeNumber }) => {
  const navigate = useNavigate();
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const nowTime = new Date().getTime();
      const timeLeft = limitTimeNumber - nowTime;

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

  const handleClick = () => {
    navigate(`/detalle/${id}`);
  };

  return (
    <div className="item-card">
      {hours === "00" && minutes === "00" && seconds === "00" ? (
        <div className="item-card-expired-container">
          <img src={expired} alt="" className="item-card-expired-img" />
        </div>
      ) : (
        ""
      )}

      <div className="item-card-image-container">
        <img src={image} alt="" className="item-card-image" />
      </div>
      <p className="item-card-paragraph">{title}</p>
      <div className="item-card-last-container">
        <span className="item-card-clock">
          {hours}:{minutes}:{seconds}
        </span>

        <button className="item-card-button" onClick={handleClick}>
          Go To Detail
        </button>
      </div>
    </div>
  );
};

export default CardComponent;
