import useSWR from 'swr';
import { fetcher } from '../api/axiosInstance';

export default function useFetch(url : string, params : any = {}) {
  // if values in params is null, undefined, or empty string, remove it
  const filteredParams = Object.keys(params).reduce((acc : any, key) => {
    if (
      params[key] !== null &&
      params[key] !== undefined &&
      params[key] !== '' &&
      params[key] !== 'undefined' &&
      params[key] !== 'null'
    ) {
      acc[key] = params[key];
    }
    return acc;
  }, {});
  const string_params = new URLSearchParams(filteredParams).toString();
  const req_url = string_params ? `${url}?${string_params}` : url;
  console.log("req_url : ",req_url)
  const { data, error, mutate } = useSWR(req_url, fetcher, {
    revalidateOnFocus: false,
  });

  return {
    data,
    isLoading: !error && !data,
    isError: error,
    mutate,
  };
}
