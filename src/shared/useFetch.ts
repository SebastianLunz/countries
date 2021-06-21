import { useState, useEffect } from "react";
import axios from "axios";
import { IState } from "./interfaces";

const useFetch = (url: string) => {
  const [countries, setCountries] = useState<IState["countries"]>([]);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios(url);
        setCountries(response.data);
      } catch (err) {
        setError(err.response.status);
      }
    };
    fetchData();
  }, [url]);

  return { countries, error };
};

export default useFetch;
