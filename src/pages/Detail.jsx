import { useParams } from "react-router-dom";
import HoroscopeDetail from "../components/HoroscopeDetail";

const Detail = () => {
  const { horoscope } = useParams();

  return <HoroscopeDetail horoscopeName={horoscope} />;
};

export default Detail;
