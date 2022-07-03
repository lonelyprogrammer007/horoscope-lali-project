import { Link } from "react-router-dom";
import { nameOfHoroscopes } from "../util/nameOfHoroscopes";
import Horoscope from "./Horoscope";

const HoroscopeList = () => {
  return (
    <section className="custom_grid mb-8 w-full gap-2 bg-red-600 p-2">
      {nameOfHoroscopes.map((name) => (
        <Link key={name} to={`/detail/${name}`}>
          <Horoscope name={name} />
        </Link>
      ))}
    </section>
  );
};

export default HoroscopeList;
