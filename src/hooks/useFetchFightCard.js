import axios from 'axios';
import { useEffect, useState } from 'react';
import { FIGHTS_URI } from 'support/constants';

const useFetchFightCard = (id) => {
  const url = `${FIGHTS_URI}/${id}.json`;
  const [gate, setGate] = useState(true);

  const [fightCard, setFightCard] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const forceUpdate = () => {
    setGate(!gate);
  };

  useEffect(() => {
    const source = axios.CancelToken.source();

    const request = axios(url, {
      cancelToken: source.token,
    });

    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const result = await request;
        setIsLoading(false);
        setFightCard(result.data);
      } catch (error) {
        if (!axios.isCancel(error)) {
          setIsLoading(false);
          setIsError(true);
        }
      }
    };

    fetchData();

    return () => { source.cancel(); };
  }, [url, gate]);

  return [{ fightCard, isLoading, isError }, forceUpdate];
};

export default useFetchFightCard;
