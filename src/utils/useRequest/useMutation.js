import {useAxiosClient} from '@/utils/axios/useAxiosClient';
import {useState} from 'react';
import {useMutation as tanstackUseMutation} from '@tanstack/react-query';
import {toast} from 'react-toastify';
import {requestMessages} from '@/utils/axios/requestMessages';

export const useMutation = (
  {
    url,
    params = {},
    method = 'post',
    showMessage = {
      success: true,
      error: true
    },
    successMessageType = 'success',
    customSuccessMessage = null,
    errorMessageType = 'error',
    customErrorMessage = null,
    formType = 'JSON',
    customRequestHeader,
    ...rest
  }
) => {
  
  const {NODE_ENV} = process.env;
  
  const axiosClient = useAxiosClient({type: formType, customRequestHeader});
  
  let requestMessage = {
    success: true,
    error: true
  };
  
  if (typeof showMessage === 'boolean') {
    requestMessage = {
      success: showMessage,
      error: showMessage
    };
  } else {
    requestMessage = {
      ...requestMessage,
      ...showMessage
    };
  }
  
  const [mutationRequestIsLoading, setMutationRequestIsLoading] = useState(false); // state for mutation request is
                                                                                   // loading
  
  const callApi = async (data, params) => {
    const result = await axiosClient.request(
      {
        method,
        url,
        params,
        data
      }
    );
    
    return result?.data;
  };
  
  // Instead of returning here, just save the result in a variable
  const mutationResult = tanstackUseMutation({
    mutationFn: variables => callApi(variables, params),
    onMutate: () => setMutationRequestIsLoading(true), // start is loading
    retry: false,
    onSettled: async (data, error) => {
      setMutationRequestIsLoading(false); // end is loading
      
      if (data?.message) {
        if (requestMessage?.success) {
          const message = data?.message;
          const findMessage = requestMessages.find(item => item?.en === message);
          
          toast(customSuccessMessage || findMessage?.fa || (NODE_ENV === 'development' ?
            message : 'عملیات با موفقیت انجام شد'), {
            toastId: `mutationRequest/${url}`,
            type: successMessageType
          });
        }
      } else {
        if (requestMessage?.error) {
          const message = error?.message;
          const findMessage = requestMessages.find(item => item?.en === error?.message);
          
          toast(customErrorMessage || findMessage?.fa || (NODE_ENV === 'development' ?
            message : 'عملیات با موفقیت انجام شد'), {
            toastId: `mutationRequest/${url}`,
            type: errorMessageType
          });
        }
      }
    },
    ...rest
  });
  
  return {
    ...mutationResult,
    isLoading: mutationRequestIsLoading
  };
};
