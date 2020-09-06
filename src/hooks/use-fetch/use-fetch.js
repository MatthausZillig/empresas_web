import React from 'react';

const useFetch = () => {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(null);
  const [client, setClient] = React.useState(null);
  const [uid, setUid] = React.useState(null);
  const [token, setToken] = React.useState(null);

  const request = React.useCallback(async (url, options) => {
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

      if (response.ok === false) throw new Error(json.message);
    } catch (err) {
      json = null;
      setError(err.message);
    } finally {
      setData(json);
      setLoading(false);
      return { response, json };
    }
  }, []);

  return { data, client, uid, token, loading, error, request };
};

export default useFetch;
