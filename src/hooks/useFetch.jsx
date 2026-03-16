import React, { useEffect } from "react";
export const useFetch = ({ ApiPath }, term) => {

  const [data, setdata] = React.useState([]);
  const url = `https://xmdbapi.com/api/v1/${ApiPath}?apiKey=${import.meta.env.VITE_API_KEY}&q=${term}`;
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setdata(data.results);
    };
    fetchData();
  }, [url]);
  return { data };
}
