import React from 'react';
import { useHistory } from 'react-router-dom';

const useFetch = () => {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(null);
  const [client, setClient] = React.useState(null);
  const [uid, setUid] = React.useState(null);
  const [token, setToken] = React.useState(null);

  const history = useHistory();

  const request = React.useCallback(async (url, options, push) => {
    let response;
    let json;
    try {
      setError(null);
      setLoading(true);
      response = await fetch(url, options);
      setClient(response.headers.get('client'));
      setUid(response.headers.get('uid'));
      setToken(response.headers.get('access-token'));
      json = await response.json();
      if (response.ok === true) {
        history.push(push);
      }
      if (response.ok === false) throw new Error(json.message);
    } catch (err) {
      json = null;
      setError(true);
    } finally {
      setData(json);
      setLoading(false);
      return { response, json };
    }
  }, []);

  return { data, client, uid, token, loading, error, request };
};

export default useFetch;
