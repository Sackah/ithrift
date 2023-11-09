import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (initialUrl: string) => {
  const [data, setData] = useState<null | any>(null);
  const [isPending, setIsPending] = useState<boolean>(true);
  const [error, setError] = useState<null | any>(null);
  const [url, setUrl] = useState(initialUrl);

  useEffect(() => {
    const source = axios.CancelToken.source();

    axios
      .get(url, { cancelToken: source.token })
      .then((res) => {
        setIsPending(false);
        setData(res.data);
        setError(null);
      })
      .catch((err) => {
        if (axios.isCancel(err)) {
          console.log("aborted fetch");
        } else {
          setIsPending(false);
          setError(err);
        }
      });

    return () => source.cancel();
  }, [url]);

  const refetch = (newUrl: string) => setUrl(newUrl);

  return { data, isPending, error, refetch };
};

export default useFetch;
