import { useState, useEffect } from "react";
import axios from "axios";
import { IState } from "./interfaces";

const useFetch = () => {
  const [countries, setCountries] = useState<IState["countries"]>([]);
  const [error, setError] = useState();

  useEffect(() => {
    const url = "https://restcountries.eu/rest/v2/all";

    const fetchData = async () => {
      try {
        const response = await axios(url);
        setCountries(response.data);
      } catch (err) {
        setError(err.response.status);
      }
    };
    fetchData();
  }, []);

  return { countries, error };
};

export default useFetch;
