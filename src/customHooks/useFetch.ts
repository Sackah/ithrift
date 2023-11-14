import { useState, useEffect } from "react";
import { BASE_URL } from "../config";

/**
 * Custom hook to fetch data
 * @typedef {object} UseFetchResult
 * @property {null | any} data - the fetched data
 * @property {boolean} isPending - whether the data is still being fetched
 * @property {null | any} error - any errors that occured during fetch
 * @property {Function} refetch - a setter function to update the initial url
 *
 * @param initialUrl a url called with the fetch hook
 * @returns {UseFetchResult}
 */

const useFetch = (initialUrl: string) => {
  const [data, setData] = useState<null | any>(null);
  const [isPending, setIsPending] = useState<boolean>(true);
  const [error, setError] = useState<null | any>(null);
  const [url, setUrl] = useState(initialUrl);

  useEffect(() => {
    const accessToken = localStorage.getItem("ACCESS_TOKEN_KEY");
    const abortCont = new AbortController();

    const fetchData = async () => {
      try {
        const res = await fetch(`${BASE_URL}${url}`, {
          signal: abortCont.signal,
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        if (!res.ok) {
          throw Error("could not fetch the data for that resource");
        }

        const data = await res.json();
        setIsPending(false);
        setData(data);
        setError(null);
      } catch (err: any) {
        if (err.name === "AbortError") {
          console.log("fetch aborted");
        } else {
          setIsPending(false);
          setError(err.message);
        }
      }
    };

    fetchData();

    return () => {
      abortCont.abort();
    };
  }, [url]);

  const refetch = (newUrl: string) => setUrl(newUrl);

  return { data, isPending, error, refetch };
};

export default useFetch;
