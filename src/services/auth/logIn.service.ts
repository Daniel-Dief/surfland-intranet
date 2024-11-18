import { UserDTO } from '../../DTO/authDTO';
import { axiosClient } from '../../network/appClient';
import { handleResponse } from '../utils.service';

interface LoginProps {
    login: string;
    password: string;
}

interface ResponseProps {
    user?: UserDTO;
    token?: string;
    error?: string;
}

export default async function sendLoginRequest( payload : LoginProps ) : Promise<ResponseProps> {
    const payloadFormBase = `${payload.login}:${payload.password}`;

    const rawResponse = await axiosClient.post(
        '/api/Login/SignIn',
        {},
        {
            headers: {
                Authorization: `Basic ${window.btoa(payloadFormBase)}`,
                'Content-Type': 'multipart/form-data',
            },
            validateStatus: () => true,
        }
    );

    const [body, error] = handleResponse<UserDTO>(rawResponse);

    if (error) return { error };

    return {
        user: body!,
        token: rawResponse.headers['x-access-token']
    };
};