import {useAxiosClient} from '@/utils/axios/useAxiosClient';
import {useQuery as tanstackUseQuery} from '@tanstack/react-query';

export const useQuery = (
  {
    url,
    params,
    body,
    method = 'get',
    justResponse = true,
    customRequestHeader,
    queryKey = [],
    ...rest
  }
) => {
  
  const axiosClient = useAxiosClient({customRequestHeader});
  
  // async function for get API:
  const callApi = async () => {
    const result = await axiosClient.request(
      {
        method: method,
        url,
        params,
        data: {...body}
      }
    );
    
    if (justResponse) {
      return result?.data?.response;
    }
    
    return result?.data;
  };
  
  return tanstackUseQuery({
    queryKey,
    queryFn: callApi,
    refetchOnWindowFocus: false,
    retry: 2,
    ...rest
  });
  
};
