import { useState, useEffect } from "react";
import { BASE_URL } from "../config";

const useFetch = (initialUrl: string) => {
  const [data, setData] = useState<null | any>(null);
  const [isPending, setIsPending] = useState<boolean>(true);
  const [error, setError] = useState<null | any>(null);
  const [url, setUrl] = useState(initialUrl);

  useEffect(() => {
    const accessToken = localStorage.getItem("ACCESS_TOKEN_KEY");
    const abortCont = new AbortController();

    fetch(`${BASE_URL}${url}`, {
      signal: abortCont.signal,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetch the data for that resource");
        }
        return res.json();
      })
      .then((data) => {
        setIsPending(false);
        setData(data);
        setError(null);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("fetch aborted");
        } else {
          setIsPending(false);
          setError(err.message);
        }
      });

    return () => {
      abortCont.abort();
    };
  }, [url]);

  const refetch = (newUrl: string) => setUrl(newUrl);

  return { data, isPending, error, refetch };
};

export default useFetch;
