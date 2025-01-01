import { AxiosResponse } from 'axios';
import useToken from '../store/useToken';
import IAPIResponse from '../DTO/IAPIResponse';

export function handleResponse<T>(rawResponse: AxiosResponse<IAPIResponse<T>>) : IAPIResponse<T> {
    const body : IAPIResponse<T> = rawResponse.data;

    if (rawResponse.status === 401) {
        useToken.getState().setToken(null);
    }

    if(!body.status) {
        console.error(body.message);
    }

    return body;
}