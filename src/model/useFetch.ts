import { useState, useEffect } from "react";
import axios, { CancelTokenSource } from 'axios';

interface FetchResponse {
  content: any;
}

interface FetchError {
  message: string;
}

interface Province {
  provinsi: string;
}

interface Kampus {
  id?: number;
  name?: string;
  tipe?: string;
  deskripsi?: string | null;
  image?: string | null;
  akreditasi?: string | null;
  fakultas?: string | null;
  ranking?: number | null;
  kota?: string | null;
  provinsi?: string | null;
  link?: string | null;
}

interface FetchResult {
  data: Kampus[] | Province[] | null;
  loading: boolean | null;
  error: string | null;
}

function useFetch(url: string): FetchResult {
  const [data, setData] = useState<Kampus[] | Province[] | null>(null);
  const [loading, setLoading] = useState<boolean | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setData(null);
    setError(null);
    const source: CancelTokenSource = axios.CancelToken.source();

    axios
      .get<FetchResponse>(url, { cancelToken: source.token })
      .then((res: any) => {
        setLoading(false);

        if (res.kampus) {
          setData(res.kampus);
        } else if (res.provinsi) {
          setData(res.provinsi);
        }
      })
      .catch((err: FetchError) => {
        setLoading(false);
        setError("An error occurred. Awkward..");
        console.log(err)
      });

    return () => {
      source.cancel();
    };
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
