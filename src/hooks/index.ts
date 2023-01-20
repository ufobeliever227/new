import axios from "axios";
import { useEffect, useState } from "react";

interface IState<TData> {
  data: TData | null;
  loading: boolean;
  error: boolean;
}

export const useQuery = <TData>(): IState<TData> => {
  const [queryState, setQueryState] = useState<IState<TData>>({
    data: null,
    loading: true,
    error: false,
  });

  const fetchApi = async () => {
    try {
      const { data } = await axios.get(process.env.NEXT_PUBLIC_MAIN_URL!);
      setQueryState({
        data: data,
        loading: false,
        error: false,
      });
    } catch {
      setQueryState({
        data: null,
        loading: false,
        error: true,
      });
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return queryState;
};
