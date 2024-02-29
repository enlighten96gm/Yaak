import { useEffect, useState } from "react";

const baseURL = "http://localhost:3100/api/sessions";

const useFetch = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    const handleFetchData = async () => {
      try {
        setIsFetching(true)
        const data = await fetch(baseURL);
        const response = await data.json();
        setData(response.data);
      } catch (error) {
        setError(JSON.stringify(error));
      } finally {
        setIsFetching(false)
      }
    };
    handleFetchData();
  }, []);

  return { data, error, isFetching };
};

export default useFetch;
