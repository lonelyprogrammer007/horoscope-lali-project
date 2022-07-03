import axios from "axios";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import useSWR from "swr";

const fetcher = (url) => {
  const options = {
    method: "POST",
    url,
    params: { sign: "Libra", day: "today" },
    headers: {
      "X-RapidAPI-Key": "c5c437f9d3msh65666290194ca6bp145e31jsn591e6f27fd1c",
      "X-RapidAPI-Host": "sameer-kumar-aztro-v1.p.rapidapi.com",
    },
  };
  return axios
    .request(options)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.error(error);
    });
};

const HoroscopeDetail = ({ horoscopeName }) => {
  const { data, error } = useSWR(
    "https://sameer-kumar-aztro-v1.p.rapidapi.com/",
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <div className="w-full rounded border bg-white p-6 shadow">
      <h5 className="mb-4 mt-0 text-3xl font-bold">{horoscopeName}</h5>
      <p className="text-sm text-gray-700">{data.description}</p>
      <Link className="text-blue-700" to={`/`}>
        Go Back
      </Link>
    </div>
  );
};

HoroscopeDetail.propTypes = {
  horoscopeName: PropTypes.string,
};

export default HoroscopeDetail;
