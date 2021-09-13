import axios from 'axios';
import { useEffect, useState } from 'react';
import { EVENTS_URI } from 'support/constants';

const useFetchEvents = () => {
  const url = EVENTS_URI;
  const [gate, setGate] = useState(true);

  const [eventsCollection, setEventsCollection] = useState([]);
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
        setEventsCollection(result.data.collection);
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

  return [{ eventsCollection, isLoading, isError }, forceUpdate];
};

export default useFetchEvents;
