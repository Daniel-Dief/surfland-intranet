import { AxiosResponse } from 'axios';
import useToken from '../store/useToken';

interface ErrorResponse {
    status: number;
    parameter: string;
}

export function handleResponse<T>(rawResponse: AxiosResponse<ErrorResponse | T>) : [T, null] | [null, string] {
    const body = rawResponse.data!;

    if (rawResponse.status === 401) {
        useToken.getState().setToken(null);
        return [null, 'Internal.SessionExpired'];
    }

    if (typeof body === 'object' && 'status' in body) {
        const errorResponse = body as ErrorResponse;
        return [null, errorResponse.parameter];
    }

    return [body, null];   
}