import { UserDTO } from '../../DTO/authDTO';
import { axiosClient } from '../../network/appClient';
import { handleResponse } from '../utils.service';
interface LoginProps {
    login: string;
    password: string;
}

interface ResponseProps {
    status: boolean;
    message: string;
    data: UserDTO;
    token: string;
}

interface TokenResponse {
    data: UserDTO;
    token: string;
}

export default async function sendLoginRequest( payload : LoginProps ) : Promise<ResponseProps> {
    const rawResponse = await axiosClient.post(
        '/Authenticate',
        payload
    );

    const body = rawResponse.data;
    const token = rawResponse.headers['Authorization'];

    return {
        status: body.status,
        message: body.message,
        data: body.data,
        token: token,
    }
};