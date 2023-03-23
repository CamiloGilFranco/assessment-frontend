import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import { useLocation } from "react-router-dom";

const DetailPage = () => {
  const location = useLocation();
  console.log(location.state);
  return (
    <div>
      <HeaderComponent />
    </div>
  );
};

export default DetailPage;
